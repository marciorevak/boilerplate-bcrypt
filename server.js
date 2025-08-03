'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const app = express();
let bcrypt = require('bcrypt');

fccTesting(app);

const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log(hash);
    
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
        console.log(res);
    });
});