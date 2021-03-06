var restify = require('restify');
var builder = require('botbuilder');



// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3979, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,              
    appPassword: process.env.MicrosoftAppPassword,  
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());


// Create your bot with a function to receive messages from the user
var bot = new builder.UniversalBot(connector);


bot.dialog("/",[
	function(session)
	{
		var text=session.message.text;
		var length=text.length; 
		session.send("You sent A message using ngrok which was "+length +" Characters");
	}
	]);