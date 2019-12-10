const net = require('net');

const client = new net.Socket();

client.on('data', (data) => {
    console.log('Server Responded: ' + data);
    
    if (data.toString().includes("Roger,")) {
        // To terminate a connection between a server and a client,
        // use the .end() method on the socket.
        client.end();
    }
});

const PORT = 5000;
const ADDRESS = "127.0.0.1";
client.connect(PORT, ADDRESS, () => {
    // To send data through the socket connection, use the method
    // .write() with one argument which is the value holding the data.
    client.write('Jiselle');
});