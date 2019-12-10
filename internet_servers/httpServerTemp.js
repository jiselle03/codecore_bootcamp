const http = require('http');
const url = require('url');

const server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    const params = url.parse(request.url, true).query;
    
    response.write(`<!DOCTYPE html>
                    <html>
                    <head>
                        <title>My Temperature Converter</title>
                    </head>
                    <body>
                        <h1>Hello!</h1>
                        <h2>${params.temp}F = ${((params.temp - 32) * (5/9)).toFixed(1)}C</h2>
                    </body>
                    </html>`);
    response.end();
});

server.listen(8080);
console.log('Server is listening on port 8080');