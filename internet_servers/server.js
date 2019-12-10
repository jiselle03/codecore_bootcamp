const net = require('net');


const server = net.createServer(
    (socket) => {
        console.log("-= OPENED =-");
        // socket.on(<socket-event>, <callback>)
        // This method is called an event listener. We can use
        // it to react when things happen to the socket such as receiving data.
        // - The first argument is a string named after an event.
        //   For a list of socket events, go to:
        //   https://nodejs.org/api/net.html#net_event_close_1
        // - The second argument is a callback that will be called when
        //   the event is triggered.

        socket.on('data', (data) => {
            // The "data" event is triggered whenever a client writes
            // (i.e. socket.write("some data")) to the socket.
            console.log("Server received:", data.toString());
            socket.write('Roger,' + data)
            // Use the method .on() with the `socket`
            // to call code when certain events occur on the socket.
            // In this case, the callback will be called when a connection
            // with a client is closed for any reason. The name of this
            // event is "end"
            socket.on("end", () => {
                console.log("-= CLOSED =-");
            });
        });
    });

const PORT = 5000;
const ADDRESS = "127.0.0.1";
server.listen(PORT, ADDRESS, () => {
    console.log(`Server is listening at ${ADDRESS}:${PORT}`);
    // 127.0.0.1:5000
});