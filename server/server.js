const path = require('path'); //netreba instalovat
const http = require('http'); //netreba instalovat
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');

const {elo, match, organizatorslist,Player,playerslist,roundslist,sport,tournament} = require('../models/index.js');


const publicPath = path.join(__dirname, '../public' );
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);

app.set('views',path.join(__dirname,'../public'))
app.set("view engine", 'hbs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicPath));

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/registrate', (req, res) => {
	res.render('registrate');
});

app.post('/registrate', (req, res) => {
	console.log(req.body)
	Player.create(req.body)
		.then(player => {
			console.log("Player> ", player.dataValues);
			res.render('confirmation',player.dataValues);
		})
		.catch(error => {
			console.log("error> ", error);
		})
	console.log(req.body);
});

app.post('/registrate/:id', (req, res) => {
	console.log(req.body)
	Player.update(req.body, {
			returning: true,
			where:{
				id: req.params.id
			}
	})
	.then(player => {
		console.log("Potvrdeny ", player.dataValues);
		res.redirect('http://localhost:3000/')
		// res.render('index', {id: req.params.id});
	})
	.catch(error => {
		console.log("error> ", error);
	})
	console.log(req.body);
});

app.get('/registrate', (req, res) => {
  res.send('Hello World!');
});

app.get('/registrate', (req, res) => {
  res.send('Hello World!');
});

app.get('/registrate', (req, res) => {
  res.send('Hello World!');
});

server.listen(port, () => {
	console.log(`App je na porte ${port}`);
});




