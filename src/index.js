const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/movies');
const actorRoutes = require('./routes/actor');
const castmRoutes = require('./routes/movie_cast')


const app = express();
const port = process.env.PORT || 9000;


//MIDDLEWARE
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', actorRoutes);
app.use('/api', castmRoutes)



//ROUTES
app.get('/', ( req, res) => {
    res.send('Welcome to my API')
})

//MongoDB CONECTION
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() =>  console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error))

app.listen(port, () => console.log('server listening on port', port));