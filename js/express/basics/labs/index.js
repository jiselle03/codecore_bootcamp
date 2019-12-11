const express = require('express');
const app = express();
const logger = require('morgan');

const PORT = 4000;
const DOMAIN = 'localhost';

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));

app.get('/car_status', (request, response) => {
    const year = request.query.year;

    response.render('car_status', {
        year: year
    })
});

app.get('/random_person', (request, response) => {
    let names = request.query.names;
    if (typeof names === 'undefined') {
        names = '';
    }

    response.render('random_person', {
        names: names
    })
});

app.get('/fizz_buzz', (request, response) => {
    const number1 = request.query.number1;
    const number2 = request.query.number2;

    response.render('fizz_buzz', {
        number1: number1,
        number2: number2
    })
});

app.listen(PORT, DOMAIN, () => {
    console.log(`Express listening on ${DOMAIN}: ${PORT}.`);
});