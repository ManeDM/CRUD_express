const mongoose = require('mongoose');

const ratingSchema = mongoose.Schema({
    
    mov_id:{
        type: Number,
        required: true
    },
    rev_id:{
        type: Number,
        required: true
    },
    
    rev_stars: {
        type: Number,
        required: true
    },

    num_o_rating: {
        type: Number,
        required: true
    }

    
});

module.exports = mongoose.model('rating',ratingSchema)