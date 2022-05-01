const express = require('express');
const router = require('./routes/index');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/css'));

const indexRoute = require('./routes/index');
const characterRoute = require('./routes/character');

app.use('/', indexRoute);
app.use('/', characterRoute);

app.listen(3000, () => console.log('Server started'))

module.exports = router;