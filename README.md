<h3><b>Цикли For...of і For...in <b></h3>
<hr>
 
<h4><b>For...in</b></h4>
Цикл перебору по ключах обєкта.<br/>
let soccerTeamPlayers = ['Roman','Bill','John','Will','Bruce'];<br/>

for(let soccerTeamPlayer in soccerTeamPlayers){ <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(soccerTeamPlayer);<br/>
}<br/>
0,1,2,3,4,5

<b>Для того шоб перепрати значення обєкта через for...in:</b><br/>
for(let index in soccerTeamPlayers){<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(soccerTeamPlayers[index]);<br/>
}<br/>
Roman,Bill,John,Will,Bruce

<hr>
<h4><b>For...of</b></h4>
Цикл перебору по значення ключів обєкта<br/>
for(let soccerTeamPlayer of soccerTeamPlayers){<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(soccerTeamPlayer)<br/>
}<br/>
Roman,Bill,John,Will,Bruce

<hr>
<h4><b>forEach</b></h4>
Метод «arr.forEach (callback [, thisArg])» використовується для перебору масиву. Він для кожного елемента масиву викликає функцію callback. Цій функції він передає три параметра callback (item, i, arr):<br/>
var arr = ["Яблоко", "Апельсин", "Груша"];<br/>

arr.forEach(function(item, i, arr) {<br/>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log( i + ": " + item + " (массив:" + arr + ")" );<br/>
});<br/>
0: Яблоко (массив:Яблоко,Апельсин,Груша)<br/>
1: Апельсин (массив:Яблоко,Апельсин,Груша)<br/>
2: Груша (массив:Яблоко,Апельсин,Груша)<br/>

<hr>
<h4><b>filter</b></h4>
Метод «arr.filter (callback [, thisArg])» використовується для фільтрації масиву через функцію. Він створює новий масив, в який увійдуть тільки ті елементи arr, для яких виклик callback (item, i, arr) поверне true.<br/>
var arr = [1, -1, 2, -2, 3];<br/>

var positiveArr = arr.filter(function(number) {<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return number > 0;<br/>
});<br/>
console.log( positiveArr ); <br/>
 1,2,3
 
 
<hr>
<h4><b>reduce/reduceRight</b></h4>
Метод «arr.reduce (callback [, initialValue])» використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату.
<br/>
<br/>
Це один з найскладніших методів для роботи з масивами. Але його варто освоїти, тому що часом з його допомогою можна в кілька рядків вирішити задачу, яка інакше зажадала б в рази більше місця і часу.
<br/>
<br/>
Метод reduce використовується для обчислення на основі масиву будь-якого єдиного значення, інакше кажуть «для згортки масиву». Трохи далі ми розберемо приклад для обчислення суми.
<br/>
<br/>
Він застосовує функцію callback по черзі до кожного елементу масиву зліва направо, зберігаючи при цьому проміжний результат.
<br/>
<br/>
Аргументи функції callback (previousValue, currentItem, index, arr):
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;previousValue - останній результат виклику функції, він же «проміжний результат».<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;currentItem - поточний елемент масиву, елементи перебираються по черзі зліва-направо.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index - номер поточного елемента.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr - оброблюваний масив.<br/><br/>

var arr = [1, 2, 3, 4, 5]<br/>
var result = arr.reduce(function(sum, current) {<br/>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return sum + current;<br/>
}, 0);<br/>
console.log( result ); <br/>
15<br/>

<table>
 <thead>
  <tr>
   <th></th>
   <th><code>sum</code></th>
   <th><code>current</code></th>
   <th>результат</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th>перший виклик</th>
   <td><code>0</code></td>
   <td><code>1</code></td>
   <td><code>1</code></td>
  </tr>
  <tr>
   <th>другий виклик</th>
   <td><code>1</code></td>
   <td><code>2</code></td>
   <td><code>3</code></td>
  </tr>
  <tr>
   <th>третій виклик</th>
   <td><code>3</code></td>
   <td><code>3</code></td>
   <td><code>6</code></td>
  </tr>
  <tr>
   <th>четвертий виклик</th>
   <td><code>6</code></td>
   <td><code>4</code></td>
   <td><code>10</code></td>
  </tr>
  <tr>
   <th>пятий виклик</th>
   <td><code>10</code></td>
   <td><code>5</code></td>
   <td><code>15</code></td>
  </tr>
 </tbody>
</table>

Якщо не вказати initialValue у виклику arr.reduce результат буде такий самий тому що при відсутності initialValue в якості першого значення береться перший елемент масиву<br/><br/>
Метод <b>arr.reduceRight</b> працює аналогічно, але йде по масиву справа-наліво.