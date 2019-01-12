let soccerTeamPlayers = ['Roman','Bill','John','Will','Bruce'];

for(let soccerTeamPlayer in soccerTeamPlayers){
    console.log(soccerTeamPlayer);
}

//0,1,2,3,4,5

//Для того шоб перепрати значення обєкта через for...in:
for(let index in soccerTeamPlayers){
    console.log(soccerTeamPlayers[index]);
}
//Roman,Bill,John,Will,Bruce


//Перебір значень обєкта через for...of
for(let soccerTeamPlayer of soccerTeamPlayers){
    console.log(soccerTeamPlayer)
}
//Roman,Bill,John,Will,Bruce


//Метод перебору масивів forEach перебирає кожен елемент масиву окремо ветаючи callback функції
var fruits = ["Яблоко", "Апельсин", "Груша"];

fruits.forEach(function(item, i, arr) {
    console.log( i + ": " + item + " (массив:" + arr + ")" );
});


// Метод перебору масивів filter створює новий масив в який увійдуть тільки ті значення шо вернуть після callback функції true
var numbers = [1, -1, 2, -2, 3];

var positiveArr = numbers.filter(function(number) {
    return number > 0;
});

console.log( positiveArr ); // 1,2,3