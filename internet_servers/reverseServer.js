const net = require('net');


const server = net.createServer(
    (socket) => {
        console.log("-= OPENED =-");

        socket.on('data', (data) => {
            console.log("Server received:", data.toString());
            let dataReverse = '';
            data = data.toString();
            for (let i = data.length - 1; i >= 0 ; i--) {
                dataReverse += data[i];
            }
            socket.write(dataReverse);
        });
        socket.on("end", () => {
            console.log("-= CLOSED =-");
        });
    });

const PORT = 5000;
const ADDRESS = "127.0.0.1";
server.listen(PORT, ADDRESS, () => {
    console.log(`Server is listening at ${ADDRESS}:${PORT}`);
});