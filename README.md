# Vercel Test

## Overview

Vercel Test is a lightweight Node.js application built with Express.js. It serves as a foundational template for testing deployments on the Vercel platform. The application exposes a simple HTTP server with a single endpoint that responds with a greeting.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (usually included with Node.js)

## Installation

1.  Clone the repository or download the source code.
2.  Navigate to the project directory in your terminal.
3.  Install the dependencies using npm:

    ```bash
    npm install
    ```

## Usage

To start the server locally:

```bash
npm start
```

This command runs `node server.js`. By default, the server listens on port **3000**.

Open your web browser and navigate to `http://localhost:3000` to see the "hello world" message.

### Configuration

-   **Port**: You can specify a custom port by setting the `PORT` environment variable.
    ```bash
    PORT=8080 npm start
    ```

## Deployment

This project includes a `vercel.json` configuration file, making it ready for deployment on Vercel.

1.  Install the [Vercel CLI](https://vercel.com/docs/cli).
2.  Run `vercel` in the project root to deploy.

## Project Structure

-   `server.js`: The main entry point of the application.
-   `package.json`: Manages project dependencies and scripts.
-   `vercel.json`: Configuration for Vercel deployment.
