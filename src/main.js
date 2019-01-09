let staticLang = ['C','C++','Java'];
let dynamicLang = ['Js','PHP','Ruby'];

//терер якшо створю ще один і я захочу добавити в нього перщих два масиви
// let lang = [staticLang,'C#','Python',dynamicLang];
//результат буде не дуже гнучким і впринципі ніяким


//Якшо використита оператор розворота
let lang = [...staticLang,'C#','Python',...dynamicLang];


//В результаті ми получемо гарний масив,цей оператор розворота теж сами шо і concat
// var lang = [].concat(staticLang, ['C#', 'Python'], dynamicLang);


///Також цей оператор можна використовувати вякості аргумента фунції
function sum(x,y,z) {
    console.log(x+y+z)
}

let numbers = [1,2,3];

sum(...numbers);