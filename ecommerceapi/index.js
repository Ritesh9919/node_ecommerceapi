const express = require('express');
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const port = 8000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());


app.use('/', require('./routes/store_api'));

app.listen(port, () => {
    console.log('Server is running on port:', port);
})