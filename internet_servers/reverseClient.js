const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new net.Socket();

client.on('data', (data) => {
    console.log('Server Responded: ' + data);
});

const PORT = 5000;
const ADDRESS = "127.0.0.1";
client.connect(PORT, ADDRESS, () => {
    rl.question('Enter a string to reverse.\n', enterStr);
});


const enterStr = data => {
    if (data == 'exit') {
        rl.close();
        client.end();
    } else {
        client.write(data);
        rl.question('Enter a string to reverse.\n', enterStr);
    }
}

