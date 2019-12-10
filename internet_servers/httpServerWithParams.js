const http= require('http');
const url = require('url');

const server = http.createServer(
    (request,response)=>{
        response.writeHead(200, {'Content-Type': 'text/html'});
        // http://localhost:4000/?name=jiselle&age=29
                    //  |     |     |              
             // URL/Address  PORT  Params
        const params= url.parse(request.url , true).query;
        // param ->{name: jiselle , age:29}
        response.write(
            `<!DOCTYPE html>
            <html>
            <head>
            <title>My First Web Server</title>
            </head>
            <body>
            <h1> Hello World!</h1>
            <h2> Welcome ${params.name}! to my first node.js HTML Page</h2>
            <h3>${params.age}</h3>
            </body>
            </html>
            `
        );
        response.end();
    }
);

server.listen(4000);
console.log( ' Server is listening on Port 4000');
