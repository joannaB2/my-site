const express = require('express');
const app = express();
const { port } = require('./config');
const cors = require('cors');

require('./db/mongoose');

//fix cors 
app.use(cors());

//routes
const apiRouter = require('./routes/api');

//app.use('/', apiRouter);

app.listen(port, () => {
    console.log('słucha')
});