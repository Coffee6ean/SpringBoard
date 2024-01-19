const fs = require('fs');
/*
// Node - Read File
fs.readFile('poem.txt', 'utf8', (err, data) => {
    if(err) {
        console.log("Error:", err);
        process.kill(1);
    }
    console.log("Data:", data);
});
*/

// Node - Overwrite file
const line = "And Eternity in an hour";
fs.writeFile('poem.txt', line ,err => {
    if(err) {
        console.log("Error:", err);
        process.kill(1);
    }
    console.log("File Successfully written");
});

// Node - Append to file
fs.writeFile('poem.txt', line, {encoding:'utf8', flag:'a'},err => {
    if(err) {
        console.log("Error:", err);
        process.kill(1);
    }
    console.log("File Successfully written");
});

fs.appendFile('poem.txt', line, {encoding:'utf8', flag:'a'},err => {
    if(err) {
        console.log("Error:", err);
        process.kill(1);
    }
    console.log("File Successfully written");
})

