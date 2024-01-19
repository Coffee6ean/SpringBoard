const students = [
    {name: "Drake", gpa: 4.6},
    {name: "Henrietta", gpa: 4.4},
    {name: "Tung", gpa: 4.0},
    {name: "Harry", gpa: 3.8},
    {name: "Ant", gpa: 3.2}
]
//Variable creation based on array position 
const [topStudent, secondBest, ,fourth] = students;
const [first, ...losers] = students;