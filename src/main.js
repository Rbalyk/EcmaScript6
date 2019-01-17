//Class -це форма або шаблон по якому створюються обєкти, він визначає свойства обєкта і методи,тобто шо цей обєкт буде робити
//Обєкт це є представник класу або його екземпляр для його створення використовується ключуве слово new
var roodDocument = document.getElementById('root')
class Task {
    constructor(){
        this.title = `Вивчити Ember.js`;
        roodDocument.innerHTML = `Задачі`
        console.log(`Створення `);
    }

}
let task = new Task();
console.log(task.title);// Cтворення задачі Вивчити Ember.js




class Work {
    constructor(title = ''){
        this.title = title;
        console.log(`Створення роботи`);
    }

}
let work = new Work('Створити сайт на Ember.js');
console.log(work.title);






console.log(typeof Task); // function
