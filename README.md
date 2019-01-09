<h3><b>В даному репозиторії я зберігаю все що я вивчаю по ES6, уроки в гілках<b></h3>
<hr>

<h4><b>створення package.json<b></h4>
npm init -y 

<hr>
<h4><b>створення node_modules і установка babel<b></h4>
npm install babel-cli  babel-core babel-preset-es2015 --save-dev <br>
cli-command line interface(дозволить використовувати команди babel в терміналі)<br>
babel-core - основний модуль babel<br>
babel-preset-es2015 - необхідно для транспіляції ES6 <br>
--save -dev - для добалення необхідних модолів у package.json<br>

<hr>
<h4><b>Створюємо папку src і dist<b></h4>
src - ісходний код <br>
dist - конечний код

<hr>
<h4><b>Створюємо index.html src/main.js<b></h4>

<hr>
<h4><b>Видалити з package.json test і замінити на наступний код:<b></h4>
"build": "babel src -d dist --presets es2015" <br>
"watch": "babel src -d dist --presets es2015 -w" <br>
написали скріпт build <br>
1).даний скріпт використовує команду babel <br>
2). вказуємо папку src де знаходиться ісходний код<br>
3). -d вказує куда помістити кінцевий код відповідно в dist<br>
4). --presets вказує шо ми транспіліруємо код в ES6<br>

<hr>
<h4><b>Запуск<b></h4>
npm run build - для одноразового білда
npm run watch - для постійного білда
