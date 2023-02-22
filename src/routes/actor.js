const express = require('express');
const actorSchema = require("../models/actor")

const router = express.Router(); 



//CREATE ACTOR
router.post('/actor', (req, res) => {
    const actor = actorSchema(req.body);
    actor
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//GET MOVIES ALL ACTORS
router.get('/actor', (req, res) => {
    actorSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})


//GET MOVIE By ID
router.get('/actor/:id', (req, res) => {
    const { id } = req.params;
    actorSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//UPDATE A MOVIE 
router.put('/actor/:id', (req, res) => {
    const { id } = req.params;
    const { act_id, act_fname, act_lname, act_gender } = req.body;
    actorSchema
        .updateOne({_id: id}, {$set: {act_id, act_fname, act_lname, act_gender} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//DELETE A MOVIE 
router.delete('/actor/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const result = await actorSchema.deleteOne({ _id: id });
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