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