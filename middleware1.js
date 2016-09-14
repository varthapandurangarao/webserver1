var express = require('express');
var app = express();

var PORT = 8080;

var middleware = {
	requireAuthentication : function(req , res ,next){
		console.log('private route hit');
		next();
	}

};

app.use( middleware.requireAuthentication);

app.get('/about',function(req , res){
	res.send('<h2>about us<h2>');

});

app.get('/pandu' , function(req , res){
	res.send('<h3>MY HISTORY<h3>');

});
app.use(express.static(__dirname + "/public"));
app.listen(PORT , function(){
	console.log('express server started ' + PORT + '!');
});