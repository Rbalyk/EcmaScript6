<h3><b>Шаблонна стрічка (template strings)</b></h3>
<hr>

<p>Шаблонні стрічки підтримують багаторядковість,дозволяє набагато краще маніпулювати текстом за допомогою ʼʼ і $(arguments)</p>
<pre>
function greet(name) {
    console.log(`Hello ${name}`.toLocaleUpperCase());
}
greet('Roman');
</pre>

<b>Example 1</b>
<pre>
function greatEmail(to,from,subject,message) {
    console.log(`
        User is
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
       
    `);
}

greatEmail('rbalik341@gmai.com','emili@gmail.com','Hello','How are you doing');

// User is
// To: rbalik341@gmai.com
// From: emili@gmail.com
// Subject: Hello
// Message: How are you doing
</pre>

<b>Example 2</b> <br>
<pre>
let name = 'Bill';
console.log(upperName`Hello ${name}`);//викликаємо func upperName без ()!!!

function upperName(literals,value) {
    return literals[0] + value.toUpperCase();
}
</pre>
literals[0] - бере перше значення з масиву(Hello)<br>
value - бере значення name<br>
Але якшо ми маємо багато значень типу ${name} дивимися наступний приклад

<b>Example 3</b><br>
Зробимо друге слово з великих літер
<pre>
let girlName = 'Emili';
let girlSecondName = 'Balyk';
let girlEmail = 'mysja05@gmail.co';
console.log(upperGirlName`Hello ${girlName} + ${girlSecondName} + ${girlEmail}`);

function upperGirlName(literals2,...values) { // Spread operator може показувати бескінечну кількіст аргументів у приходючих массивом
    return literals2[0] + values.toUpperCase();
}
</pre>





