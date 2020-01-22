const express = require('express');
const app = express();
const path  = require('path');
const routes = require('./routes')

// Template engine
app.set('view engine', 'pug');

// Path views
app.set('views', path.join(__dirname, './views'));

// Routes
app.use(routes);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

//Run app, then load http://localhost:3000 in a browser