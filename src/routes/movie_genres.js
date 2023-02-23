const express = require('express');
const movie_genresSchema = require("../models/movie_genres")

const router = express.Router(); 


//CREATE MOVIE_DIRECTION
router.post('/mgenres', (req, res) => {
    const movie_genres = movie_genresSchema(req.body);
    movie_genres
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})


//GET MOVIES ALL MOVIES
router.get('/mgenres', (req, res) => {
    movie_genresSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})


//GET MOVIEdirection By ID
router.get('/mgenres/:id', (req, res) => {
    const { id } = req.params;
    movie_genresSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//UPDATE A MOVIE direction 
router.put('/mgenres/:id', (req, res) => {
    const { id } = req.params;
    const { mov_id, gen_id  } = req.body;
    movie_genresSchema
        .updateOne({_id: id}, {$set: {mov_id, gen_id} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//DELETE A MOVIE 
router.delete('/mgenres/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const result = await movie_genresSchema.deleteOne({ _id: id });
      if (result.deletedCount === 0) {
        res.status(404).json({ message: 'No se encontró el usuario' });
      } else {
        res.status(200).json({ message: 'El usuario ha sido eliminado' });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });

  module.exports = router;
