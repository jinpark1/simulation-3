const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();

massive(process.env.CONNECTION_STRING).then(database => { app.set('db', database); });

const PORT = 3300;
app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`)} );