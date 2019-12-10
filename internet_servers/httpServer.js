const http = require('http');

const server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`<!DOCTYPE html>
                    <html>
                    <head>
                        <title> My first web server</title>
                    </head>
                    <body>
                        <h1>Hello World!</h1>
                    </body>
                    </html>`);
    response.end();
});

server.listen(4000);
console.log('Server is listening on port 4000');