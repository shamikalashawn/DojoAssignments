var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
  var file;
  var picFile;
  picFile = "." + request.url;
  console.log(picFile);
  if (request.url.slice(-3) === 'jpg') {
    console.log('picture');
    fs.readFile(picFile, function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
  }
  else{
    switch (request.url) {
      case '/cars':
        file = './views/cars.html';
        break;
      case '/cats':
        file = './views/cats.html';
        break;
      case '/cars/new':
        file = './views/new.html';
        break;
      case '/stylesheets/style.css':
        file = './stylesheets/style.css';
        break;
      default:
        file = null;
        break;
    }

    if (file == './stylesheets/style.css'){
      fs.readFile(file, 'utf8', function (errors, contents) {
        response.writeHead(200, {'Content-Type': 'text/css'});
        response.write(contents);
        response.end();
      });
    }
    else if (file !== null) {
      fs.readFile(file, 'utf8', function (errors, contents) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(contents);
        response.end();
      });
    }
    else{
      response.writeHead(404);
      response.end('Requested URL not available.')
    }
  }
});
  server.listen(7077);
  console.log('Running in localhost at port 7077');
