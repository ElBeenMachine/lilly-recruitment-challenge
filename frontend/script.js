// Get static elements
const dataView = document.getElementById("data-view");
const loadingMessage = document.getElementById("loading-message");
const table = document.getElementById("data-table");
const tableBody = document.getElementById("data-table-body");

/**
 * Function to handle the data in a cell and check for emptiness
 * 
 * @param {string} str The string to be checked for emptiness
 * @returns {string} The string if it is not empty, otherwise a message indicating no data was found
 */
function handleCellData(str) {
    // Check for null values
    if (str === null) return "<b>Missing Data</b>";

    // Remove leading and trailing whitespace and make the string lowercase for the check
    const check = str.toString().toLowerCase().trim();

    // Check string for emtiness, returning a message if it is empty or invalid
    if (check === "null" || check === undefined || check === "") return "<b>Missing Data</b>";

    // Otherwise return the data
    return str;
}

/**
 * Function to be run when the page is loaded to load the data
 */
(async () => {
    await loadMeds();
})();

/**
 * Function to refresh the table
 */
async function loadMeds() {
    // Show the loader
    table.classList.add("hidden");
    loadingMessage.classList.remove("hidden");

    // Clear the table
    tableBody.innerHTML = "";

    // Get the medications from the backend
    const meds = await getMeds().catch(err => {
        console.error(err);
        return alert("Failed to fetch data");
    });

    // Wait 2 seconds for better, less snappy UX
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Log successful fetch
    console.log("Successfully fetched the available medications");

    // Populate the table
    meds.forEach(med => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${handleCellData(med.name)}</td>
            <td>${handleCellData(med.price)}</td>
        `;
        tableBody.appendChild(row);
    });

    // Hide the loader
    loadingMessage.classList.add("hidden");

    // Show the data view
    table.classList.remove("hidden");
}

/**
 * Function to get the medications available from the backend
 */
async function getMeds() {
    return new Promise((resolve, reject) => {
        fetch ("http://localhost:8000/medicines").then(async (res, err) => {
            // If an error occurs, log it
            if (err) {
                reject(err);
            }

            // Store the response in a json object
            const data = await res.json();

            // If the data contains an error object, reject
            if (data.error) {
                reject(data.error);
            }

            // Get the output of the request as json
            resolve(data.medicines);
        }).catch(err => {
            // Universal catch all for a failed request
            reject(err);
        });
    });    
}

// Function to submit the form
async function createMed(e) {
    // Prevent default behaviour
    e.preventDefault();

    // Get the form data
    const formData = new FormData(e.target);
    
    // See if the price can be parsed as a float
    if (isNaN(parseFloat(formData.get("price")))) {
        return alert("Price must be a number");
    }

    // Replace the formdata price with a float
    formData.set("price", parseFloat(formData.get("price")));

    // Send the form data to the backend
    const response = await fetch("http://localhost:8000/create", {
        method: "POST",
        body: formData
    });

    // Get the response as json
    const data = await response.json();

    // If the data contains an error, alert the user
    if (data.error) {
        return alert(data.error);
    }

    // Clear the form
    e.target.reset();
    
    // Reload the medications
    await loadMeds();
}

// Add event listener to the form
document.getElementById("add-med-form").addEventListener("submit", createMed);