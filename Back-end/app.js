const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv/config');


app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

// ------------ Cnx ------------

mongoose.connect(

    process.env.DB_CONNECTION,
    (err) =>{
        if (err) {
            console.log(err);
        }
        console.log('data base well connected');
    }

);

// ------------------ Appointments ------------------

const Rdv = require('./routes/Appointment');

app.use('/api/appointment',Rdv);

// ------------------ Manager ------------------

const Manager = require('./routes/Manager');

app.use('/api/manager', Manager)


// ------------------ admin ------------------

const admin = require('./routes/admin');

app.use('/api/admin', admin)

app.listen(4001);