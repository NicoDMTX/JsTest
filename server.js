const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/css'));

app.get('/index', (req,res) => {
    res.render('pages/index');
})


app.listen(3000, () => console.log('Server started'))