const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');
const fs = require('fs/promises');

const app = express();


app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));
app.use(express.static(path.join(__dirname, 'static')));
app.engine('.hbs', engine({defaultLayout: false}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const users = [{
    firstName: 'Igor',
    lastName: 'Fqwegqegq',
    email: 'gqeeqgeeqgk@gmail.com',
    password: 'igor',
    age: '27',
    city: 'Lviv'
}, {
    firstName: 'Andrii',
    lastName: 'Gmvbmllwmwh',
    email: 'jjtjyypjty@gmail.com',
    password: 'andrii',
    age: '16',
    city: 'Dnipro'
}, {
    firstName: 'Alina',
    lastName: 'Wggyqryyqr',
    email: 'qtgqgyq@gmail.com',
    password: 'fff34',
    age: '45',
    city: 'Odessa'
}];


app.get('/login', ((req, res) => {
    res.render('login');
}));

app.get('/error', ((req, res) => {
    res.render('error');
}));

app.post('/login', (req, res) => {
    const email = users.find(user => user.email === req.body.email);
    if (email) {
        res.redirect('/error');
    }
    users.push(req.body);

    res.redirect('/users');
});

app.get('/users', (req, res) => {
    if (req.query) {
        let arr = [...users];
        const {age, city} = req.query;
        if (city) {
            arr = arr.filter(user => user.city === city);
        }
        if (age) {
            arr = arr.filter(user => user.age === age);
        }

        res.render('users', {users: arr});
        return;
    }
    res.render('users', {users});
});

app.get('/users/:userId', (req, res) => {
    const {userId} = req.params;
    const user = users[userId - 1];
    res.render('userById', {user});
});


app.use(((req, res) => {
    res.render('notFound');
}));


app.listen(5100, () => {
    console.log('App listen 5100');
});