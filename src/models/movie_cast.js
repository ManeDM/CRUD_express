const mongoose = require('mongoose');

const movie_castSchema = mongoose.Schema({
    act_id:{
        type: Number,
        required: true
    },

    mov_id: {
        type: Number,
        required: true
    },

    role: {
        type: String,
        required: true
    },


});


module.exports = mongoose.model('mcast', movie_castSchema);