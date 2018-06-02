const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const massive = require('massive');
require('dotenv').config();
const session = require('express-session');
const axios = require('axios');
const bcrypt = require('bcrypt');
const saltRounds = 12;

massive(process.env.CONNECTION_STRING).then(database => { app.set('db', database); });

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
}));
app.use(express.static(`${__dirname}/../build`));

app.post('/register', (req, res) => {
    const db = app.get('db')
    const { username, password } = req.body
    bcrypt.hash(password, saltRounds).then(hashedPassword => {
        db.create_user([username, hashedPassword]).then(() => {
            req.session.user = { username };
            res.json({ user: req.session.user })
        }).catch(error => {
            console.log('error', error);
            res.status(500).json({ message: 'Error has occured!' })
        });
    });
});

app.post('/login', (req,res) => {
    const db = app.get('db');
    const { username, password } = req.body;
    db.find_user([username]).then(users => {
        if (users.length) {
            bcrypt.compare(password, users[0].password).then(doPasswordsMatch => {
                if (doPasswordsMatch) {
                    req.session.user = { username: users[0].username };
                    res.json({ user: req.session.user });
                    console.log("I'm in!!!")
                } else {
                    res.status(403).json({ message: 'Wrong Password' });
                }
            });
        } else {
            res.status(403).json({ message: "That user is not registered" })
        }
    });
});



const PORT = 3300;
app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`)} );