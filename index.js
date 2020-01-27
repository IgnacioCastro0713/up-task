import express from 'express';
import path from 'path';
import HomeRoutes from './src/routes/HomeRoutes';
import morgan from 'morgan';

const app = express();
// Template engine
app.set('view engine', 'pug');

// static assets
app.use(express.static('public'));

// Path views
app.set('views', path.join(__dirname, './src/views'));

// middleware's
app.use(morgan('tiny'));

// Routes
app.use(HomeRoutes);

// serve
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('Example app listening on port ' + app.get('port'));
});

//Run app, then load http://localhost:3000 in a browser
