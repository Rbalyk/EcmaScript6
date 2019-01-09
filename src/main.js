if (true) {
    var name = 'Roman Balyk'
}
console.log(name);


if (true) {
    let name2 = 'Roman Balyk'
}
console.log(name2);


var buttons = document.querySelectorAll("button");


for (let i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.innerText = i;
    button.onclick = function (e) {
        console.log(i)
    }
}