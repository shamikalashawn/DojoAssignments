var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
  console.log('client request URL', request.url);
  // if (request.url === '/') {
  //   fs.readFile('index.html', 'utf8', function (errors, contents) {
  //     response.writeHead(200, {'Content-Type': 'text/html'});
  //     response.write(contents);
  //     response.end();
  //   });
  // }
  // else if (request.url === '/ninjas') {
    // fs.readFile('ninjas.html', 'utf8', function (errors, contents) {
    //   response.writeHead(200, {'Content-Type': 'text/html'});
    //   response.write(contents);
    //   response.end();
    // });
  // }
  // else if (request.url === '/dojos/new') {
  //   fs.readFile('dojos.html', 'utf8', function (errors, contents) {
  //     response.writeHead(200, {'Content-Type': 'text/html'});
  //     response.write(contents);
  //     response.end();
  //   })
  // }

  var file;
  switch (request.url) {
    case '/':
      file = 'index.html'
      break;
    case '/ninjas':
    case '/':
      file = 'ninjas.html'
      break;
    case "/dojos/new":
      file = 'dojos.html'
      break;
    default:
      file = null;
      break;

  }

  if (file !== null){
    fs.readFile(file, 'utf8', function (errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else{
    response.writeHead(404);
    response.end('The URL requested is not available.')
  }
});
server.listen(8000)
console.log('Running in localhost at port 8000.');
