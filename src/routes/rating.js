const express = require('express');
const ratingSchema = require("../models/rating")

const router = express.Router(); 



//CREATE DIRECTOR
router.post('/rating', (req, res) => {
    const rating = ratingSchema(req.body);
    rating
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//GET MOVIES ALL DIRECTOR
router.get('/rating', (req, res) => {
    ratingSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})


//GET MOVIE By ID
router.get('/rating/:id', (req, res) => {
    const { id } = req.params;
    ratingSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//UPDATE A DIRECTOR
router.put('/rating/:id', (req, res) => {
    const { id } = req.params;
    const { mov_id, rev_id, rev_stars, num_o_rating } = req.body;
    ratingSchema
        .updateOne({_id: id}, {$set: { mov_id, rev_id, rev_stars, num_o_rating  } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//DELETE A MOVIE 
router.delete('/rating/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const result = await ratingSchema.deleteOne({ _id: id });
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