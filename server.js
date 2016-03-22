'use strict';
const express = require('express');
const bodyParser = require('body-parser');

let app = express();
let router = new express.Router();

app.use(bodyParser.json());



app.listen(3000, () => console.log('server speaking'));
