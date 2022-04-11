const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const urlEncodedParser= bodyParser.urlencoded({extended: false});

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function (request, response) {
    response.render('home', {name:'John Doe'});
});
app.get('/contacts', function (request, response) {
    response.render('contact_us');
});

app.post('/process-contacts', urlEncodedParser, function (request, response) {
    response.end('Thankyou ' + request.body.first_name+ ' ' + request.body.last_name);
});



app.listen(port);
console.log(`listening on port ${port}`);