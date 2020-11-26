var http = require("http");
//(req,res)=> is a call back function
http.createServer( (req, res)=> {

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("what up fox, server is running? \n")
    res.end();
}).listen(3000);

// Console will print the message
console.log('Server running at http://127.0.0.1:3000/');