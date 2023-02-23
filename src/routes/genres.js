const express = require('express');
const genresSchema = require("../models/genres")

const router = express.Router(); 


//CREATE Genres TABLE
router.post('/genres', (req, res) => {
    const genres = genresSchema(req.body);
    genres
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})


//GET 
router.get('/genres', (req, res) => {
    genresSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})


//GET MOVIE By ID
router.get('/genres/:id', (req, res) => {
    const { id } = req.params;
    genresSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//UPDATE A GENRES
router.put('/genres/:id', (req, res) => {
    const { id } = req.params;
    const { gen_id, gen_title } = req.body;
    genresSchema
        .updateOne({_id: id}, {$set: {gen_id, gen_title} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//DELETE A GENRES
router.delete('/genres/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const result = await genresSchema.deleteOne({ _id: id });
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
