require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');



const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use('/collection', routes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
