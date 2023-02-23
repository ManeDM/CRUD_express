const express = require('express');
const reviewerSchema = require("../models/reviewer")

const router = express.Router(); 



//CREATE DIRECTOR
router.post('/reviewer', (req, res) => {
    const reviewer = reviewerSchema(req.body);
    reviewer
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//GET MOVIES ALL DIRECTOR
router.get('/reviewer', (req, res) => {
    reviewerSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})


//GET MOVIE By ID
router.get('/reviewer/:id', (req, res) => {
    const { id } = req.params;
    reviewerSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//UPDATE A DIRECTOR
router.put('/reviewer/:id', (req, res) => {
    const { id } = req.params;
    const { rev_id, rev_name } = req.body;
    reviewerSchema
        .updateOne({_id: id}, {$set: { rev_id, rev_name } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//DELETE A MOVIE 
router.delete('/reviewer/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const result = await reviewerSchema.deleteOne({ _id: id });
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