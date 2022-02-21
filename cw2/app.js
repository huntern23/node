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


app.get('/error', ((req, res) => {
    res.render('error');
}));


app.get('/login', ((req, res) => {
    res.render('login');
}));

app.post('/login', (req, res) => {
    const email = users.find(user => user.email === req.body.email);
    if (email) {
        res.render('error', {errorMessage: "User with this email address already exists"});
        return;
    }
    users.push({...req.body, id: users.length + 1});

    res.redirect('/users');
});


app.get('/register', ((req, res) => {
    res.render('register');
}));

app.post('/register', ((req, res) => {
    const {email, password} = req.body;
    const user = users.find(user => user.email === email);

    if (!user || user.password !== password) {
        res.render('error', {errorMessage: "Password is wrong!"});
        return;
    }
    res.redirect(`/users/${user.id}`);
}));


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
    res.render('userById', {user, userId});

});

app.post('/users/:userId', (req, res) => {
    const {userId} = req.params;
    let user = users.find(user => +userId === user.id);
    // console.log(user);
    // console.log(users);

    if (user) {
        users.splice(userId - 1, 1);
        // console.log(users);
        res.redirect('/users');
        return;
    }

});

app.use(((req, res) => {
    res.render('notFound');
}));


app.listen(5100, () => {
    console.log('App listen 5100');
});
