const express = require("express");
const app = express();
app.use(express.json());
const { PrismaClient } = require("@prisma/client");

const PORT = 8080;

const BASE_URL = "http://localhost:8080/api/v1/movies";

const prisma = new PrismaClient();

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

app.get(`${BASE_URL}/all`, async (req, res) => {
  try {
    const allMovies = await prisma.movie.findMany();

    res.status(200).send({
      movies: allMovies,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Internal server error!" });
  }
});

app.get(`${BASE_URL}/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const getMovie = await prisma.movie.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!getMovie) {
      res.status(404).send({ error: "Movie not found!" });
    }
    res.status(200).send({
      movie: getMovie,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Internal server error!" });
  }
});

app.post(`${BASE_URL}/new`, async (req, res) => {
  try {
    const { name, description, year } = req.body;

    if (!name || !description || !year) {
      return res
        .status(418)
        .json({ message: "Please provide name, description, and year" });
    }

    const newMovie = await prisma.movie.create({
      data: {
        name,
        description,
        year,
      },
    });

    res.status(201).json({ movie: newMovie });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error!" });
  }
});
