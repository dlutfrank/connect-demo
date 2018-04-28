const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('view options', {
    layout: false
})
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/register', (req, res, next) => {
    res.render('normal', {
        name: req.body.name
    });
})

app.get('/api/check', (req, res) => {
    res.json({
        retcode: 200,
        retdesc: 'success'
    });
});
app.use((err, req, res, next) => {
    console.log(err);
});
app.listen(8080);