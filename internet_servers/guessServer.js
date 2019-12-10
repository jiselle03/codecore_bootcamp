const net = require('net');

const server = net.createServer(
    (socket) => {
        console.log("-= OPENED =-");
        const num = Math.ceil(Math.random() * 10);
        let count = 1;

        socket.on('data', (data) => {
            console.log("Server received:", data);

            if (parseInt(data) === num) {
                socket.write(`You guessed right in ${count} attempt(s).`);
            } else if (parseInt(data) > num) {
                socket.write(`Guess lower.`);
                count++;
            } else if (parseInt(data) < num) {
                socket.write(`Guess higher.`);
                count++;
            }


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