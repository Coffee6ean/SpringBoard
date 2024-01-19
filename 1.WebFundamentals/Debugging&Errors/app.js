let grades = [99,98,76,54,66,90,81];

function sumArr(x) {
    var sum = 0;
    for(let i = 0; i < x.length; i++) {
        sum += x[i];
    }

    return sum;
}

let avg = sumArr(grades) / grades.length; 


try{
    functionThatDoesNotExist();
} catch(error) {
    //console.log("something went wrong", error);
    console.log("something went wrong");
}

function displayInitials(user) {
    let firstNameLetter;
    let lastNameLetter;
    try{
        firstNameLetter = user.firstName[0].toUpperCase();
        lastNameLetter = user.lastName[0].toUpperCase();
    } catch(err) {
        return "Invalid input: " + err;
    } finally {
        console.log("Process terminated");
    }
    return `Hello ${firstNameLetter}.${lastNameLetter}`;
}

displayInitials({firstName: "Jason", lastName: "Mamoa"});

console.log("An error is coming...");
try {
    throw "Error.";
} catch(e) {
    console.log("There was an error: ", e);
}

try {
    throw new Error("New Error.");
} catch(e) {
    console.log("There was an error: ", e);
    console.log("What kind of error? ", e.name);
    console.log("What is the error message? ", e.message);
    console.log("Where did it happen? ", e.stack);

    console.dir(e);
}

function DateError(msg) {
    this.message = msg;
    this.name = "DateError";
}
function getMonthName(num) {
    if(typeof num !== "number") {
        throw new DateError("Input must be a 'number' type value");
    }
    num = num - 1;
    const months = [
        "JAN", "FEB", "MAR", "APR",
        "MAY", "JUN", "JUL", "AUG", 
        "SEP", "OCT", "NOV", "DEC"
    ];
    
    if(months[num]) {
        return months[num];
    } else {
        throw new DateError("Given number is out of bounds");
    }
}

console.log("End of program");