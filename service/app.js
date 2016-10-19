var express = require('express');
var bodyParser  = require('body-parser');

var bdd = require('./bdd');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// dès qu'une requête de type options est envoyé à une url de l'api
// le serveur répond qu'il accepte les méthodes GET, PUT, POST, DELETE et OPTIONS
app.options('/api/*', function (request, response, next) {
    response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    response.send();
});


app.get('/internoffer', bdd.findAllInternOffer);
app.post('/internoffer', bdd.addInternOffer);

app.get('/criteriafav', bdd.findAllCriteriaFav);
app.post('/criteriafav', bdd.addCriteriaFav);

app.get('/newsletterfilter', bdd.findAllnewsletterFilter);
app.post('/newsletterfilter', bdd.addnewsletterFilter);


app.get('/newsletterfilter', bdd.findAllnewsletterFilter);
app.post('/newsletterfilter', bdd.addnewsletterFilter);

app.listen(3000);
console.log('Listening on port 3000...');