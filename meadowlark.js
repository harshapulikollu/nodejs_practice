var express = require('express');
var app = express();
var fortune = require('./lib/fortune.js');

//set up handlebars view engine
var handlebars =  require('express3-handlebars')
		.create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

//public for static resources
app.use(express.static(__dirname + '/public'));




app.get('/', function(req, res){
		//res.type('text/plain');
		//res.send('meadowlark travels');
		res.render('home');
});

app.get('/about', function(req,res){
		//res.type('text/plain');
		//res.send('about meadowlark travels');
		
		res.render('about',{ fortune: fortune.getFortune()});
});		

//custom 404 page
app.use(function(req, res){
		//res.type('text/plain');
		res.status(404);
		//res.send('404- not fund');
		res.render('404');
});

// custom 500 page
app.use(function(err, req,res,next){
		console.error(err,stack);
		//res.type('text/plain');
		res.status(500);
		//res.send('500 - server error');
		res.render('500');
});

app.listen(app.get('port'), function(){
		console.log('express started on http:loclhost:'+app.get('port')+' press ctrl-c to terminate');
});		