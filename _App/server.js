var http = require('http');

http.createServer(function (req, res) 
{	
	//console.log(req.url); 
	
	//Initiate the Response Body
	var responseBody = null;
	
	switch (req.url)
	{
		// control for favicon
		case '/favicon.ico':
			res.writeHead(200, {'Content-Type': 'image/x-icon'} );
			res.end();
			return;
		break;
		default:
			responseBody =  myFunction();
		break;
		
	}

	
	//Return the response
	res.writeHead(200, {'Content-Type': 'text/plain'} );
	res.write(responseBody);
	res.end();	


}).listen(8080);


//"Server Started" 
console.log("Server Started");

/////////////////////////////////// functions ////////////////////////
var myFunction =  function()
{
	console.log("in myFunction");
	return 'Hello, world!';
}
