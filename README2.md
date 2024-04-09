# Calculator Microservice

This project is a simple calculator microservice that provides basic arithmetic operations through a REST API. It is built using Node.js and Express.js.

## Features

The calculator microservice supports the following arithmetic operations:
- Addition
- Subtraction
- Multiplication
- Division
- Exponentiation (new)
- Square Root (new)
- Modulo (new)

## API Endpoints

The calculator microservice provides API endpoints for each supported arithmetic operation. The endpoints accept JSON payloads in the request body and return the result of the operation in the response.

Refer to the code and inline comments for details on the request and response formats for each endpoint.

## Getting Started

To run the calculator microservice locally:

1. Clone the repository
2. Install the dependencies using `npm install`
3. Start the microservice using `node index.js`
4. The microservice will be running on `http://localhost:3000`

## Testing

You can use tools like cURL or Postman to test the API endpoints. Send POST requests to the appropriate endpoints with the required JSON payloads to perform the desired arithmetic operations.

Refer to the code and inline comments for examples of test requests and expected responses.

## Recent Updates

- Added support for advanced arithmetic operations:
  - Exponentiation
  - Square Root
  - Modulo
- Implemented new API endpoints for the added operations
- Updated the code to handle edge cases and provide appropriate error responses
