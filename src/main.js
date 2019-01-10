function greet(name) {
    console.log(`Hello ${name}`.toLocaleUpperCase());
}

greet('Roman');


//Example 1
function greatEmail(to,from,subject,message) {
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
       
    `);
}

greatEmail('rbalik341@gmai.com','emili@gmail.com','Hello','How are you doing');

//Result:
// To: rbalik341@gmai.com
// From: emili@gmail.com
// Subject: Hello
// Message: How are you doing


//Example 2
//Lets make ONE second word to uppercase
let name = 'Bill';
console.log(upperName`Hello ${name}`);//call func upperName without ()!!!

function upperName(literals,value) {
    return literals[0] + value.toUpperCase();
    //literals[0] - gave first value from math(Hello)
    //value - gave value name
    //But if we have a lot of value ${name},let's see solution in the next example
}

//Example 3
//Lets make ONE second word to uppercase
let girlName = 'Emili';
let girlSecondName = 'Balyk';
let girlEmail = 'mysja05@gmail.co';
console.log(upperGirlName`Hello ${girlName} + ${girlSecondName} + ${girlEmail}`);

function upperGirlName(literals2,...values) { // Spread operator can show infinity arguments like math, don't depend
    return literals2[0] + values.toUpperCase();
}




