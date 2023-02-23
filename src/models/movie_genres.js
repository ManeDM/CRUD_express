const mongoose = require('mongoose');

const movie_genresSchema = mongoose.Schema({
    mov_id: {
        type: Number,
        required: true
    },
    gen_id:{
        type: Number,
        required: true
    },

});


module.exports = mongoose.model('mgenres', movie_genresSchema);