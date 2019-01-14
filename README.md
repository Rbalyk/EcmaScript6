<h3><b>Цикли For...of і For...in, Filter, ForEach, Reduce) </b></h3>
<hr>
 
<h4><b>For...in</b></h4>
Цикл перебору по ключах обєкта.
<pre>
let soccerTeamPlayers = ['Roman','Bill','John','Will','Bruce'];

for(let soccerTeamPlayer in soccerTeamPlayers){
    console.log(soccerTeamPlayer);
}
0,1,2,3,4,5
</pre>

<b>Для того шоб перебрати значення обєкта через for...in:</b>
<pre>
for(let index in soccerTeamPlayers){
   console.log(soccerTeamPlayers[index]);
}
Roman,Bill,John,Will,Bruce
</pre>

<h4><b>For...of</b></h4>
Цикл перебору по значення ключів обєкта
<pre>
for(let soccerTeamPlayer of soccerTeamPlayers){
    console.log(soccerTeamPlayer)
}
Roman,Bill,John,Will,Bruce
</pre>

<h4><b>forEach</b></h4>
Метод <b>«arr.forEach (callback [, thisArg])»</b> використовується для перебору масиву. Він для кожного елемента масиву викликає функцію <b>callback</b>. Цій функції він передає три параметра callback (item, i, arr):
<pre>
var arr = ["Яблоко", "Апельсин", "Груша"];

arr.forEach(function(item, i, arr) {
   console.log( i + ": " + item + " (массив:" + arr + ")" );
});
0: Яблоко (массив:Яблоко,Апельсин,Груша)
1: Апельсин (массив:Яблоко,Апельсин,Груша)
2: Груша (массив:Яблоко,Апельсин,Груша)
</pre>

<h4><b>filter</b></h4>
Метод <b>«arr.filter (callback [, thisArg])»</b> використовується для фільтрації масиву через функцію. Він створює новий масив, в який увійдуть тільки ті елементи arr, для яких виклик <b>callback (item, i, arr)</b> поверне <b>true</b>.
<pre>
var arr = [1, -1, 2, -2, 3];

var positiveArr = arr.filter(function(number) {
  return number > 0;
});
console.log( positiveArr ); 
 1,2,3
 </pre>
 
<h4><b>reduce/reduceRight</b></h4>
Метод <b>«arr.reduce (callback [, initialValue])»</b> використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату.
<br>
Це один з найскладніших методів для роботи з масивами. Але його варто освоїти, тому що часом з його допомогою можна в кілька рядків вирішити задачу, яка інакше зажадала б в рази більше місця і часу.
<br>
Метод <b>reduce</b> використовується для обчислення на основі масиву будь-якого єдиного значення, інакше кажуть «для згортки масиву». Трохи далі ми розберемо приклад для обчислення суми.
<br>
Він застосовує функцію <b>callback</b> по черзі до кожного елементу масиву зліва направо, зберігаючи при цьому проміжний результат.
<br>
Аргументи функції <b>callback (previousValue, currentItem, index, arr):</b><br>

<b>previousValue</b> - останній результат виклику функції, він же «проміжний результат».<br>
<b>currentItem</b> - поточний елемент масиву, елементи перебираються по черзі зліва-направо.<br>
<b>index</b> - номер поточного елемента.<br>
<b>arr</b> - оброблюваний масив.
<pre>
var arr = [1, 2, 3, 4, 5]
var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);
console.log( result ); 
15
</pre>
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

Якщо не вказати initialValue у виклику arr.reduce результат буде такий самий тому що при відсутності initialValue в якості першого значення береться перший елемент масиву<br>
Метод <b>arr.reduceRight</b> працює аналогічно, але йде по масиву справа-наліво.