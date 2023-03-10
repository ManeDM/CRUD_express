const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/movies');
const actorRoutes = require('./routes/actor');
const castmRoutes = require('./routes/movie_cast');
const directorRoutes = require('./routes/director');
const genresRoutes = require('./routes/genres');
const reviewerRoutes = require('./routes/reviewer');
const ratingRoutes = require('./routes/rating');
const directionmRoutes = require('./routes/movie_direction');
const genresmRoutes = require('./routes/movie_genres');



const app = express();
const port = process.env.PORT || 9000;


//MIDDLEWARE
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', actorRoutes);
app.use('/api', castmRoutes);
app.use('/api', directorRoutes);
app.use('/api', genresRoutes);
app.use('/api', reviewerRoutes);
app.use('/api', ratingRoutes);
app.use('/api', directionmRoutes);
app.use('/api', genresmRoutes)





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