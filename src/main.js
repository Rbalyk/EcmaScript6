let sum = (x,y) => x+ y;

let circleDiameter = (radius, number = 2,) => radius * number;

let giveMeAnswer = () => 42;

let string = () => console.log('Hello World');

let multiply = (x,y) => {
    let result = x * y;
    return result;
};
//Якшо стрілочна функія складається більше ніж 2 стрічок, треба обгортати у фігурні дужки


let person = () => ({name: 'Roman'});
//Якшо стрілочна ссилається на літерали обєкта, треба обгортати у фігурні дужки і у круглі

let personArguments = (name) => ({firstName: name});

console.log(sum(2,3));//5
console.log(circleDiameter(15));//30
console.log(giveMeAnswer());//42
string();//Hello World
console.log(multiply(3,7));//21
console.log(person());//{name: "Roman"}
console.log(personArguments('Roman'));//{name: "Roman"}



//Стрілочна функія у вигляді IIFE-(Immediately-Invoked Function Expression) - це синтаксична конструкція, що дозволяє викликати функцію зразу ж в місці її визначення
(function () {
    console.log('Simple IIFE')
}());

(() => console.log('ArrowFunction IIFE'))();

(() => {
    console.log('ArrowFunction IIFE row 1');
    console.log('ArrowFunction IIFE row 2');
})();


//Cтрілочні функції в роботі з масива
let numbers = [1,2,3,4,5,6,7,8,9,10];

let sumArray = 0;

numbers.forEach(num => sumArray += num);// Сумма елементів масиви

let squared = numbers.map(num => num*num);//Підняти кожне число масиву до квадрата

console.log(sumArray);
console.log(squared);



//Cтрілочні функції в роботі з медодами обєктів

let singer = {
    name: 'Michel Jackson',
    sing: function () {
        window.setTimeout(() =>{
            console.log(`My name is ${this.name}`);
        },1000)
    }
};
singer.sing();


//Стрілочна функія бере this з контексту,оскільки setTimeout
//належить до обєкта window без неї this.name буде ссилатися на обєкт window
//якшо її не використовувати то можна вище оголосити let that = this і тоді використовувати
//that.name для прикладу транспіліруваний код з стрілочною функцію так і зробив babel:
// var singer = {
//     name: 'Michel Jackson',
//     sing: function sing() {
//         var _this = this;
//
//         window.setTimeout(function () {
//             console.log('My name is ' + _this.name);
//         },1000);
//     }
// };
// singer.sing();
//Зробивши замикання

//Стрілочні функції не можна використовувати з new,bind(),call(),apply();
