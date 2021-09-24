const { urlencoded } = require('express');
const express = require('express');
const app = express();

app.use(express.static('public'))
app.use(express.urlencoded({ extended:true }))

//View Engine
app.set('view engine', 'ejs')

// Import Route
const payRoute = require('./routes/pay');

//Middleware Route
app.use('/',payRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`This app is listening on port ${PORT}`));

