# Movie Management API

This is a RESTful API built with Express.js for managing movies. It provides endpoints to perform CRUD operations on movies stored in a database. The API supports fetching all movies, fetching a single movie by ID, and adding a new movie.

## Features

- Fetch all movies
- Fetch a movie by ID
- Add a new movie

## Technologies Used

- Node.js
- Express.js
- Prisma (ORM)
- PostgreSQL (or your preferred database)

## Installation

1. Clone the repository:

   git clone https://github.com/nabilelmaa/movie-api-express-prisma.git

2. Install dependencies:

   npm install

3. Start the server:

   npm start

## Defining Routes:

- GET /api/v1/movies/all: Fetches all movies.
- GET /api/v1/movies/:id: Fetches a specific movie by its ID.
- POST /api/v1/movies/add: Adds a new movie.

Feel free to customize this template to fit the specifics of your project. Add any additional sections or details that you think would be helpful for users or contributors.
