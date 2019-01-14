<h3><b>Function parameters</b></h3>
<hr>
<b>Example 1</b><br>
<b>Параметри за замовчуванням</b>

<pre>
function greet(greeting, name) {
    console.log(`${greeting} ${name}`)
}

greet('Hi','Bill'); // Hi Bill
greet('Hi'); // Hi undefined
greet(); // undefined undefined
</pre>
Як бачим не дуже гарно получається, тому нище ми використаємо параметри за замовчуванням

<pre>
function greet(greeting = 'Hi', name = 'Friend') {
    console.log(`${greeting} ${name}`)
}

greet('Hi','Bill'); // Hi Bill
greet('Hi'); // Hi Friend
greet(); // Hi Friend
</pre>



<b>Example 2</b><br>
<b>Складемо числа і початково ми не знаємо скільки буде чисел</b>
<pre>
function sum(...values) {
    console.log(values.reduce(function (previousValue,currentValue) {
        return previousValue + currentValue;
    }))
}

sum(5,6,7,8);
</pre>