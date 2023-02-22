const express = require('express');
const movie_castSchema = require("../models/movie_cast")

const router = express.Router(); 


//CREATE MOVIE
router.post('/mcast', (req, res) => {
    const movies = movie_castSchema(req.body);
    movies
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})


//GET MOVIES ALL MOVIES
router.get('/mcast', (req, res) => {
    movie_castSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})


//GET MOVIE By ID
router.get('/mcast/:id', (req, res) => {
    const { id } = req.params;
    movie_castSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//UPDATE A MOVIE 
router.put('/mcast/:id', (req, res) => {
    const { id } = req.params;
    const { act_id, mov_id, role } = req.body;
    movie_castSchema
        .updateOne({_id: id}, {$set: {act_id, mov_id, role} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//DELETE A MOVIE 
router.delete('/mcast/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const result = await movie_castSchema.deleteOne({ _id: id });
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
