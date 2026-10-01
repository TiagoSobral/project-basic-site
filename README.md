# Basic Informational Site

A small Node.js server that serves a four-page static site, built for The Odin Project's [Basic Informational Site](https://www.theodinproject.com/lessons/nodejs-basic-informational-site) assignment.

## Features

- Plain Node.js server, no frameworks
- Routes each URL to the matching HTML page
- Shows a custom 404 page for any unknown route


## Routes:

- http://localhost:8080
- http://localhost:8080/about
- http://localhost:8080/contact-me
- http://localhost:8080/anything-else (should show the 404 page)

## What I Learned

- Creating an HTTP server with Node's built-in `http` module
- Reading files with the `fs` module
- Routing requests based on `req.url`
- Setting status codes and headers (including a `404` status for the not-found page)

## Acknowledgements

Project brief from [The Odin Project](https://www.theodinproject.com/).
