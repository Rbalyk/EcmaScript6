<h3><b>Змінна Let</b></h3>
<hr>
<b>Let має блочну область видимості, для прикладу</b> <br>
var <br>
if(true){<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; var name = 'Roman Balyk'<br>
}<br>
console.log(name) - 'Roman Balyk'



let<br>
if(true){<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; let name2 = 'Roman Balyk'<br>
}<br>
console.log(name) - 'undefined'




<b>Також змінна Let не може бути викликана до її обявлення ,навідмінно від var який дасть хочаб undefined;
</b>