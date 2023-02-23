const express = require('express');
const directorSchema = require("../models/director")

const router = express.Router(); 



//CREATE DIRECTOR
router.post('/director', (req, res) => {
    const director = directorSchema(req.body);
    director
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//GET MOVIES ALL DIRECTOR
router.get('/director', (req, res) => {
    directorSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})


//GET MOVIE By ID
router.get('/director/:id', (req, res) => {
    const { id } = req.params;
    directorSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//UPDATE A DIRECTOR
router.put('/director/:id', (req, res) => {
    const { id } = req.params;
    const { dir_id, dir_fname, dir_lname } = req.body;
    directorSchema
        .updateOne({_id: id}, {$set: { dir_id, dir_fname, dir_lname } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//DELETE A MOVIE 
router.delete('/director/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const result = await directorSchema.deleteOne({ _id: id });
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