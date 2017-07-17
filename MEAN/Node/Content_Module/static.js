// module.exports = function (request, response) {
//   var urlParts = request.url.split('/')
//   var type;
//   switch (urlParts[0]) {
//     case undefined:
//       file = '.views/index.html';
//       type = 'text/html';
//       break;
//     case 'stylesheets':
//       file = `.${request.url}`;
//       type = 'text/css';
//       break;
//     case 'images':
//       file = `.${request.url}`;
//       type = 'image/jpg'
//     default:
//       file = null;
// //need to figure out how to match html urls to files and if the url does not match a file then file is null
//   }
//   if (file !== null && type !== 'image/jpg') {
//     fs.readFile(file, 'utf8', function (errors, contents) {
//       response.writeHead(200, {'Content-Type': type});
//       response.write(contents);
//       response.end();
//     });
//   }
//   else if (file !== null && type == 'image/jpg') {
//     fs.readFile(file, function(errors, contents){
//         response.writeHead(200, {'Content-type': type});
//         response.write(contents);
//         response.end();
//     });
//   }
//   else{
//     response.writeHead(404);
//     response.end('Requested URL not available.')
//   }
// }

var fs = require('fs');
var path = require('path');

module.exports = function (request, response){
	fs.exists('.'+request.url, function(exists) {
		if(exists) {
			if(request.url === '/') {
				fs.readFile('./views/index.html', 'utf8', function(errors, contents) {
					response.write(contents);
					response.end();
				})
			} else {
				fs.readFile('.'+path.dirname(request.url)+'/'+path.basename(request.url), function(errors, contents) {
					response.write(contents);
					response.end();
				})
			}
		} else {
			response.end('File not Found!!!');
		}
	})
};
