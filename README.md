<h3><b>Cтрілочні функції або Arrow Function</b></h3>
<hr>

Вирази стрілочних функцій мають більш короткий синтаксис в
порівнянні з функціональними виразами і лексично прив'язані до 
значення this це два фактори вплинули на появу стрілочних функції: 
більш короткий синтаксис і лексика this.
<pre>
let sum = (x,y) => x+ y;

let circleDiameter = (radius, number = 2,) => radius * number;

let giveMeAnswer = () => 42;

let string = () => console.log('Hello World');

let multiply = (x,y) => { 
    let result = x * y;
    return result;
};
Якщо стрілочна функія складається більше ніж 2 стрічок, треба обгортати у фігурні дужки


let person = () => ({name: 'Roman'});
Якщо стрілочна ссилається на літерали обєкта, треба обгортати у фігурні дужки і у круглі

let personArguments = (name) => ({firstName: name});

console.log(sum(2,3));//5
console.log(circleDiameter(15));//30
console.log(giveMeAnswer());//42
string();//Hello World
console.log(multiply(3,7));//21
console.log(person());//{name: "Roman"}
console.log(personArguments('Roman'));//{name: "Roman"}
</pre>


<b>Стрілочна функія у вигляді IIFE-(Immediately-Invoked Function Expression)</b> - це синтаксична конструкція, що дозволяє викликати функцію зразу ж в місці її визначення
<pre>
(function () {
    console.log('Simple IIFE')
}());

(() => console.log('ArrowFunction IIFE'))();

(() => {
    console.log('ArrowFunction IIFE row 1');
    console.log('ArrowFunction IIFE row 2');
})();
</pre>


<b>Cтрілочні функції в роботі з масива</b>
<pre>
let numbers = [1,2,3,4,5,6,7,8,9,10];

let sumArray = 0;

numbers.forEach(num => sumArray += num);// Сумма елементів масиви

let squared = numbers.map(num => num*num);//Підняти кожне число масиву до квадрата

console.log(sumArray);//55
console.log(squared);//[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
</pre>


<b>Cтрілочні функції в роботі з медодами обєктів</b>
<pre>
let singer = {
    name: 'Michel Jackson',
    sing: function () {
        window.setTimeout(() =>{
            console.log(`My name is ${this.name}`);
        },1000)
    }
};
singer.sing();
</pre>


Стрілочна функія бере this з контексту,оскільки setTimeout належить до обєкта <b>window</b> без неї <b>this.name</b> буде ссилатися на обєкт <b>window</b> якшо її не використовувати то можна вище оголосити <b>let that = this</b> і тоді використовувати that.name для прикладу транспіліруваний код з стрілочною функцію так і зробив babel: 
 <pre>
 var singer = {
     name: 'Michel Jackson',
     sing: function sing() {
         var _this = this;
         window.setTimeout(function () {
             console.log('My name is ' + _this.name);
         },1000);
     }
 };
 singer.sing();//My name is Michel Jackson
 </pre>
Зробивши замикання

<b>Стрілочні функції не можна використовувати з</b>
<pre>
new,bind(),call(),apply();
</pre