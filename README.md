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

