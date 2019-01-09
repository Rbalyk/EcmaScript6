<h3><b>В даному репозиторії я зберігаю все що я вивчаю по ES6, уроки в гілках</b></h3>
<hr>

<h4><b>створення package.json</b></h4>
<p>npm init -y </p>

<hr>
<h4><b>створення node_modules і установка babel</b></h4>
<p>npm install babel-cli  babel-core babel-preset-es2015 --save-dev </p>
<p>cli-command line interface(дозволить використовувати команди babel в терміналі)</p>
<p>babel-core - основний модуль babel</p>
<p>babel-preset-es2015 - необхідно для транспіляції ES6 </p>
<p>--save -dev - для добалення необхідних модолів у package.json</p>

<hr>
<h4><b>Створюємо папку src і dist</b></h4>
<p>src - ісходний код </p>
<p>dist - конечний код</p>

<hr>
<h4><b>Створюємо index.html src/main.js</b></h4>

<hr>
<h4><b>Видалити з package.json test і замінити на наступний код:</b></h4>
<p>"build": "babel src -d dist --presets es2015" </p>
<p>"watch": "babel src -d dist --presets es2015 -w" </p>
<p><b>написали скріпт build </b></p>
<p>1).даний скріпт використовує команду babel </p>
<p>2). вказуємо папку src де знаходиться ісходний код</p>
<p>3). -d вказує куда помістити кінцевий код відповідно в dist</p>
<p>4). --presets вказує шо ми транспіліруємо код в ES6</p>

<hr>
<h4><b>Запуск</b></h4>
<p>npm run build - для одноразового білда</p>
<p>npm run watch - для постійного білда</p>
