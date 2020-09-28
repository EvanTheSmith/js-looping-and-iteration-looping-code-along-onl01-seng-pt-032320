// Code your solutions in this file

function writeCards(theNames, eventName) {
    let theOutput = [];
    for (let i = 0; i < theNames.length; i++) {
        theOutput.push(`Thank you, ${theNames[i]}, for the wonderful ${eventName} gift!`);
    }
    return theOutput;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}