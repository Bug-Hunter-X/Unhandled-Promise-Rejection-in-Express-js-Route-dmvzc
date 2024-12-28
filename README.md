# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Express.js applications: unhandled promise rejections within asynchronous route handlers.  Improper error handling can lead to unexpected application behavior and crashes, making debugging difficult.

The `bug.js` file showcases the problematic code.  The `bugSolution.js` file provides a corrected version with robust error handling.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install express` to install the required dependencies.
4. Run `node bug.js` to start the server with the error.
5. Run `node bugSolution.js` to start the server with the fix.

## Problem

The asynchronous operation `someAsyncOperation()` might throw an error.  The original code lacks a `catch` block within the `.then()` chain, leading to an unhandled promise rejection and a potential server crash or silent failure.

## Solution

The solution involves adding proper error handling using a `catch` block.  This block captures any errors thrown by `someAsyncOperation()` and handles them gracefully, for example by sending an appropriate error response to the client or logging the error to a console.