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


module.exports = router;