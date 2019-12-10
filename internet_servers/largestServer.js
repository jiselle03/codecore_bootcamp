const net = require('net');

const server = net.createServer(
    (socket) => {
        console.log("-= OPENED =-");

        socket.on('data', (data) => {
            console.log("Server received:", data);
            let dataArr = data.toString().split(',')
            let largest = Math.max(...dataArr);
            socket.write(largest.toString());
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