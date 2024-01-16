process.on('exit', function(code) {
    console.log(`Exiting with code: ${code}`);
});

for(let arg of process.argv) {
    console.log(arg);
}

setInterval(function() {
    console.log('Hello World');
}, 1000);

setInterval(function() {
    process.exit(2);
}, 6000);