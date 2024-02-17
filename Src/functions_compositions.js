const R = require('./ramda.min.js')

const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

const splitString = sentence.split('');

console.log(splitString)

const counter = 0;

function inc (counter){
    return counter + 1
}

const numbers = splitString