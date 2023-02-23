const express = require('express');
const movie_directionSchema = require("../models/movie_direction")

const router = express.Router(); 


//CREATE MOVIE_DIRECTION
router.post('/mdirection', (req, res) => {
    const movie_direction = movie_directionSchema(req.body);
    movie_direction
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})


//GET MOVIES ALL MOVIES
router.get('/mdirection', (req, res) => {
    movie_directionSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})


//GET MOVIEdirection By ID
router.get('/mdirection/:id', (req, res) => {
    const { id } = req.params;
    movie_directionSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//UPDATE A MOVIE direction 
router.put('/mdirection/:id', (req, res) => {
    const { id } = req.params;
    const { dir_id, mov_id } = req.body;
    movie_directionSchema
        .updateOne({_id: id}, {$set: {dir_id, mov_id} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//DELETE A MOVIE 
router.delete('/mdirection/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const result = await movie_directionSchema.deleteOne({ _id: id });
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
