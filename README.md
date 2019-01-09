Змінна Let має блочну облсть видимості, для прикладу <br>
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




Також змінна Let не може бути викликана до її обявлення ,навідмінно від var який дасть хочаб undefined;
Hosting