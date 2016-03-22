'use strict';
const express = require('express');
const bodyParser = require('body-parser');

let app = express();
let router = new express.Router();

let models = require('./models');

app.use(bodyParser.json());

require('./routes/login.js')(router, models);

app.use(router);

app.listen(3000, () => console.log('server speaking'));
