<h3><b>Оператор розворота або spread operator</b></h3>
<b>Приклад з массивами</b><br>
let staticLang = ['C','C++','Java'];<br>
let dynamicLang = ['Js','PHP','Ruby'];<br>
let lang = [staticLang,'C#','Python',dynamicLang];<br>
результат данного коду не дуже гнучкий і впринципі ніяким<br><br>
Якшо використита оператор розворота<br>
let lang = [...staticLang,'C#','Python',...dynamicLang];<br>

В результаті ми получемо гарний масив,цей оператор розворота теж сами шо і concat<br>
 var lang = [].concat(staticLang, ['C#', 'Python'], dynamicLang);<br><br><br>

<b>Приклад з передачі массива як аргумент фунції</b><br>
Також цей оператор можна використовувати вякості аргумента фунції 
function sum(x,y,z) {<br>
    console.log(x+y+z)<br>
}<br>

let numbers = [1,2,3];<br>

sum(...numbers);