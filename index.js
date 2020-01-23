const express = require('express');
const app = express();
const path  = require('path');
const HomeRoutes = require('./src/routes/HomeRoutes');

// Template engine
app.set('view engine', 'pug');

// static assets
app.use(express.static('public'))

// Path views
app.set('views', path.join(__dirname, './src/views'));

// Routes
app.use(HomeRoutes);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

//Run app, then load http://localhost:3000 in a browser
