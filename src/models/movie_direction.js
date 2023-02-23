const mongoose = require('mongoose');

const movie_directionSchema = mongoose.Schema({
    dir_id:{
        type: Number,
        required: true
    },

    mov_id: {
        type: Number,
        required: true
    },

});


module.exports = mongoose.model('mdirection', movie_directionSchema);