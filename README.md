<h3><b>Оператор розворота або spread operator</b></h3>
<b>Приклад з массивами</b><br>
<pre>
let staticLang = ['C','C++','Java'];
let dynamicLang = ['Js','PHP','Ruby'];
let lang = [staticLang,'C#','Python',dynamicLang];
</pre>
результат данного коду не дуже гнучкий і впринципі ніякий<br><br>
Якшо використита оператор розворота:
<pre>
let lang = [...staticLang,'C#','Python',...dynamicLang];
</pre>
В результаті ми получемо гарний масив,цей оператор розворота теж сами шо і <b>concat</b>
<pre>
 var lang = [].concat(staticLang, ['C#', 'Python'], dynamicLang);
</pre>

<b>Приклад з передачі массива як аргумент фунції</b><br>
Також цей оператор можна використовувати вякості аргумента фунції 
<pre>
function sum(x,y,z) {
    console.log(x+y+z)
}

let numbers = [1,2,3];

sum(...numbers);
</pre>