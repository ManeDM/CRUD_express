const mongoose = require('mongoose');

const moviesSchema = mongoose.Schema({
    mov_id:{
        type: Number,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    year: {
        type: Number,
        required: true
    },

    mov_time: {
        type: Number,
        required: true
    },

    mov_lang:{
        type: String,
        required: true
    },

    mov_dt_rel:{
        type: String,
        required: true
    },

    mov_rel_country:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('movies', moviesSchema);
