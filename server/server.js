const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose')
const {Todo} = require('./model/todo');
const {User} = require('./model/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save()
        .then((doc) => {
            res.send(doc)
        })
        .catch((e) => {
            res.status(400).send(e);
        });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
