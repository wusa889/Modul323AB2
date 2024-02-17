//a 90
//b 80
//c 70
//d 60
//f <60

const R = require("./ramda.min.js")

const studentGrades = [ 
    {name: 'Joe', grade: 88},
    {name: 'Jen', grade: 94},
    {name: 'Steph', grade: 77},
    {name: 'Allen', grade: 60},
    {name: 'Gina', grade: 54},
];

function makeSentence(student) {
    if(student.grade >= 90){
        return `Nice Job ${student.name}, you got an b`
    }
    else if(student.grade >= 80){
        return `Excelent Job ${student.name}, you got an a`
    }
    else if(student.grade >= 70){
        return `Well done ${student.name}, you got an c`
    }
    else if(student.grade >= 60){
        return `What happend ${student.name}, you got an d`
    }
    else {
        return `Not good ${student.name}, you got an f`
    }
} 

const newArray = studentGrades.map(p => makeSentence(p))
console.log(newArray)


