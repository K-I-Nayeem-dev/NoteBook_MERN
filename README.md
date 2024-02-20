# MERN Notebook App with User Authentication

## Overview
This notebook app is built with the MERN stack and includes user authentication functionality. Each authenticated user can store their notes securely, and unauthenticated users are restricted from accessing notes.

## Features
- **User Authentication:** Users can register, login, and logout securely.
- **Note Storage:** Each authenticated user can create, read, update, and delete their notes.
- **Middleware:** Implemented middleware to restrict unauthenticated users from accessing notes.
- **MERN Stack:** Combines MongoDB, Express.js, React, and Node.js for full-stack development.

## Technologies Used
- MongoDB
- Express.js
- React
- Node.js

## Installation
1. Clone this repository to your local machine.
2. Navigate to the project directory: `cd mern-notebook-app`.
3. Install dependencies for the client and server:
   - Client: `cd client && npm install` or `cd client && yarn install`
   - Server: `cd server && npm install` or `cd server && yarn install`
4. Configure your MongoDB connection URI in the server `.env` file.

## Usage
1. Start the server: `cd server && npm start` or `cd server && yarn start`.
2. Start the client: `cd client && npm start` or `cd client && yarn start`.
3. Access the application in your web browser at `http://localhost:3000`.
4. Register a new user account or login with existing credentials.
5. Create, view, update, and delete notes as an authenticated user.
6. Logout to securely end the session.

## Folder Structure
- `client/` - Contains the source code for the React client application.
- `server/` - Contains the source code for the Node.js/Express server application.
  - `config/` - Configuration files for MongoDB connection and authentication.
  - `controllers/` - Controllers for handling user authentication and note operations.
  - `middlewares/` - Middleware functions to restrict unauthenticated access to notes.
  - `models/` - MongoDB schema models for users and notes.
  - `routes/` - API routes for user authentication and note CRUD operations.

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request with your enhancements or bug fixes.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgements
- MongoDB Documentation: [docs.mongodb.com](https://docs.mongodb.com/)
- Express.js Documentation: [expressjs.com](https://expressjs.com/)
- React Documentation: [reactjs.org](https://reactjs.org/docs/getting-started.html)
- Node.js Documentation: [nodejs.org](https://nodejs.org/en/docs/)

## Contact
For any inquiries or issues, please contact Kamrul Islam Nayeem at kamrulnayeem019@gmail.com
