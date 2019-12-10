const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new net.Socket();

client.on('data', (data) => {
    console.log('Server Responded: ' + data);
    if (data.toString().includes('You')) {
        client.end();
        rl.close();
    } else {
        guess();
    }

});

const PORT = 5000;
const ADDRESS = "127.0.0.1";
client.connect(PORT, ADDRESS, () => {
    guess();
});

const guess = function() {
    rl.question('Guess a number between 1 and 10.\n', data => {
        client.write(data);
        
    });
}

