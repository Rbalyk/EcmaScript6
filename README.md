<h3><b>Змінна Let</b></h3>
<hr>
<b>Let</b> має блочну область видимості, для прикладу
<pre> 
if(true){
 var name = 'Roman Balyk'
}
console.log(name) - 'Roman Balyk'
</pre>


<pre>
if(true){
  let name2 = 'Roman Balyk'
}
console.log(name) - 'undefined'
</pre>



Також змінна <b>Let</b> не може бути викликана до її обявлення ,навідмінно від var який дасть хочаб undefined;