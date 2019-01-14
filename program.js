const net = require('net');
const readline = require('readline');
const bl = require('bl');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.on('line', (input)=> {
//     tcpserver.write(input);
// })


var tcpserver = net.createServer((socket) => {

    socket.write('hello');
    console.log('buffersize: ',socket.bufferSize);
    console.log('address', socket.address());
    socket.write('this is some data');
    socket.on('data', (data) => {
        console.log(data.toString());
    })
    
    // socket.pipe(rl.output);
    socket.on('timeout', ()=>{
        console.log('timeout');
    })

})


tcpserver.listen(8125,()=>{
    console.log('connection boundon:');
})

