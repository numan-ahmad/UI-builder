const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const pagesRoutes = require('./api/routes/pages')

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("DB connected")
})

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(cors())


app.use('/page', pagesRoutes);

app.use((req, res, next) =>{
    const error = new Error('not found');
    error.status = 404;
    next(error)
})


app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})



module.exports = app;