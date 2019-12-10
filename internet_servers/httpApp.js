const http = require('http');
const url = require('url');

const server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
        
        const params = url.parse(request.url, true).query;
        const pathname = url.parse(request.url).pathname;
        switch(pathname) {
        case '/greeting':
                response.write(`<!DOCTYPE html>
                <html>
                <head>
                    <title>My Application</title>
                </head>
                <body>
                    <h1>Hello, ${params.name}</h1>
                </body>
                </html>`);
                response.end();
        break;

        default:
                response.write(`<!DOCTYPE html>
                <html>
                <head>
                    <title>My Application</title>
                </head>
                <body>
                    <h1>Welcome to my application</h1>
                </body>
                </html>`);
                response.end();
        break;
        }   
});

server.listen(8080);
console.log('Server is listening on port 8080');