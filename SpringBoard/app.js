/*
 * Write a function called countdown that accepts a number as a parameter 
 * and every 1000 milliseconds decrements the value and console.logs it. 
 * Once the value is 0 it should log “DONE!” and stop.
 */

function countdown(num) {
    var buffer = 0;
    while(num > 0) {
        setTimeout(console.log("// " + num), 1000 + buffer)
        num--;
        buffer += 1000;
    }
    console.log("// DONE!");
}

function countDown(num) {
    let timer = setInterval(function() {
        if(num > 0) {
            console.log("// " + num);
            num--
        } else {
            clearInterval(timer);
            console.log("// DONE");
        }
    }, 1000);
}

/*
 * Write a function called randomGame that selects a random number 
 * between 0 and 1 every 1000 milliseconds and each time that a random 
 * number is picked, add 1 to a counter. If the number is greater than .75,
 * stop the timer and console.log the number of tries it took before 
 * we found a number greater than .75.
 */
function randomGame() {
    var counter = 0;
    let timer = setInterval(function() {
        counter++;
        let rand = Math.random();
        console.log("Random number generated: " + rand);
        if(rand > 0.75) {
            clearInterval(timer);
            console.log("Number of tries: " + counter);
        }
    }, 1000);
}
