//import modules
var http = require('http');
var httpdispatcher = require('httpdispatcher');
var dispatcher = new httpdispatcher();

//listen on port 8080:
const PORT=8080;

//Function to handle requests and send response
function handleRequest(request, response){
  try {
      //log request to console
      console.log(request.url);
      //dispatcher
      dispatcher.dispatch(request, response);
    } catch(err) {
      console.log(err);
  }
}

//create server
var server = http.createServer(handleRequest);

//startServer
server.listen(PORT, function(){
  //callback triggered when server is listening
  console.log("Server listening on: http://localhost:%s", PORT);
})

//For all your static (js/css/images/etc.) set the directory name (relative path).
dispatcher.setStaticDirname(__dirname);
dispatcher.setStatic('resources');

//A sample GET request
dispatcher.onGet("/page1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Page One');
});

//A sample POST request
dispatcher.onPost("/post1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});
