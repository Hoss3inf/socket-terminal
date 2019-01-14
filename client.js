



const bufferlist = require('bl');
const readline = require('readline');
const net = require('net');
var bl = new bufferlist();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input)=> {
     client.write(input, 'utf8');
})

const client = net.connect({port: 8125}, () => {
    console.log('clientConnected!');

}).on('data', (data) =>{
    console.log(data.toString);
})