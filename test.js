const express = require('express'),
    bodyParser = require('body-parser'),
    uuid = require('uuid');

const app = express();

let students = [
    {
        id: 1,
        name: 'Jessica Drake',
        classes: {
            biology: 95,
            algebra: 92
        }
    },
    {
        id: 2,
        name: 'Ben Cohen',
        classes: {
            biology: 95,
            algebra: 92
        }
    },
    {
        id: 3,
        name: 'Lisa Downing',
        classes: {
            biology: 95,
            algebra: 92
        }
    }
];

// Gets the list of data about ALL students
app.get('/students', (req, res) => {
    res.json(students);
});

// Gets the data about ONE student
app.get('/students/:name', (req, res) => {
    res.json(students.find((student) => 
        { return student.name === req.params.name }));
});


