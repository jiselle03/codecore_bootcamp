const http = require('http');
const url = require('url');

const server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    const params = url.parse(request.url, true).query;

    if (params.score < 0 || params.score > 100) {
        grade ='Invalid grade';
    } else if (params.score >= 86) {
        grade ='A';
    } else if (params.score >= 73) {
        grade ='B';
    } else if (params.score >= 67) {
        grade ='C+';
    } else if (params.score >= 60) {
        grade ='C';
    } else if (params.score >= 50) {
        grade ='C-';
    } else {
        grade ='F';
    }
    
    response.write(`<!DOCTYPE html>
                    <html>
                    <head>
                        <title>My Grade</title>
                    </head>
                    <body>
                        <h1>Your score of ${params.score} is equivalent to a grade of ${grade}.</h1>
                    </body>
                    </html>`);
    response.end();
});

server.listen(8080);
console.log('Server is listening on port 8080');