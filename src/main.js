//Параметри за замовчуванням
//Example 1
function greet(greeting, name) {
    console.log(`${greeting} ${name}`)
}

greet('Hi','Bill'); // Hi Bill
greet('Hi'); // Hi undefined
greet(); // undefined undefined
//Як бачим не дуже гарно получається, тому нище ми використаємо параметри за замовчуванням

function greet(greeting = 'Hi', name = 'Friend') {
    console.log(`${greeting} ${name}`)
}

greet('Hi','Bill'); // Hi Bill
greet('Hi'); // Hi Friend
greet(); // Hi Friend




//Example 2
//Складемо числа і початково ми не знаємо скільки буде чисел

function sum(...values) {
    console.log(values.reduce(function (previousValue,currentValue) {
        return previousValue + currentValue;
    }))
}

sum(5,6,7,8);