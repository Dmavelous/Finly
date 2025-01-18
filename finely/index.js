const express = require('express');
const morgan = require('morgan');

require('dotenv').config();
require('./libs/dbConnect');
const userRouter = require('./routes/user.route');
const app = express();
const session = require('express-session');
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(
    session({
    secret: process.env.AUTH_SECRET,
    saveUninitialized: true,
    resave: false,
    })
    );
app.get('/', (req, res) => {
    res.render('index', { message: 'Hello From Node.js' });
});
app.get('/contact', (req, res) => {
    res.render('index', { message: 'The Contact Page' });
});
app.get('/about', (req, res) => {
    res.render('index', { message: 'The About Page' });
});
app.get('*', (req, res) => {
    res.render('index', { message: 'Hello From Node.js' });
    res.status(404).render('index', { message: 'Not Found' });
    });
app.use('/users', userRouter);
const PORT = 3000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});

<button className="btn btn-primary text-white bg-blue-500 border-2">Subscribe</button>

