# Lilly Technical Challenge Documentation

## Approach
Prior to accomplishing the styling of the website, I went after a well documented functional approach. Ensuring that my JavaScript was written (and commented) in a way that would allow for another developer to pick up where I left up with minimal delay. 

I primarily approached this problem with a frontent design, to provide basic validation and a pleasant user experience for the site. Unfortunately, due to time constraints, I was unable to implement server-side validation, but ideally with more time this would be a priority.

My loading wheel was sourced from w3 schools, as I felt the implementation of my own laoder would have consumed valuable time that could have been used on other features. 

## Objectives - Innovative Solutions
I am particularly proud of how I have handled the loading of data in the frontend, and how it is updated when new data is submitted. I made the decision to include an artificial load delay of 1 second to prevent the site from having a "janky" feel to it, ensuring the user is aware the data is being loaded, and due to the miniscule communication time between localhost clients, ensuring a smooth UX. My approach here also scaled to a remote backend, showing the loading wheel until the request has been loaded.

## Problems Faced
In my efforts to improve the design of the page, I noticed that the disclaimer did not respond well to smaller viewports. I amended the css to allow for this. While I do acknowledge that it takes up a large amount of the screen on particularly smaller screens, it was not on my priority list to make the font size and positioning responsive as it is clearly not designed to be released into a production environment. 

Due to the time allowed, I feel my attention was best directed towards the usability of the site, and all problem criteria were met. However, with more time allowed, I would have like to implement the other backend functionality such as update, delete, and individual fetching, as I feel that, with a larger dataset, this would allow for a more in-depth and feature rich application. 

I would have liked to implement better error handline, but unfortuantely ran out of time. I do not like using the `alert()` function, as I feel a html based error message would have provided a better user experience. 

## Evaluation
I feel like this challenge was very vell written, with all of the objectives and restrictions clearly laid out. There was plenty of room in the scope to adapt the application to be implemented with my own vision, but this could also be seen as a negative in a professional environment. 

I did unfortunately run out of time, meaning I was unable to implement some feature I would have liked to, but I was still able to make a (mostly) responsive solution, that met all of the criteria and objectives laid out. 

If given more time, and a slightly expanded scope, I would have implemented separate pages for the submission and viewing of medicine data, and added functionality for the other avialble API routes, with server side error handling to prevent client side manipulation of how the form data is handled. 