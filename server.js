/**
 * @file server.js
 * @description Main server entry point for the Vercel Test application.
 * Initializes an Express application and defines the route handlers.
 */

const express = require("express");

/**
 * Express application instance.
 * @type {import('express').Express}
 */
const app = express();

/**
 * Root route handler.
 * Responds with a "hello world" message.
 *
 * @name GET /
 * @function
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @returns {void}
 */
app.get("/", (req, res) => {
  res.send("hello world");
});

/**
 * The port number on which the server listens.
 * Defaults to 3000 if not specified in the environment variables.
 * @type {string|number}
 */
const port = process.env.PORT || 3000;

/**
 * Starts the server and listens for incoming requests on the specified port.
 */
app.listen(port);
