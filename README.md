##створення package.json
npm init -y 

##створення node_modules і установка babel
npm install babel-cli  babel-core babel-preset-es2015 --save-dev <br>
cli-command line interface(дозволить використовувати команди babel в терміналі)<br>
babel-core - основний модуль babel<br>
babel-preset-es2015 - необхідно для транспіляції ES6 <br>
--save -dev - для добалення необхідних модолів у package.json<br>

##Створюємо папку src і dist
src - ісходний код <br>
dist - конечний код

##Створюємо index.html src/lesson1-let.js
##Видалити з package.json test і замінити на наступний код
"build": "babel src -d dist --presets es2015" <br>
"watch": "babel src -d dist --presets es2015 -w" <br>
написали скріпт build <br>
1).даний скріпт використовує команду babel <br>
2). вказуємо папку src де знаходиться ісходний код<br>
3). -d вказує куда помістити кінцевий код відповідно в dist<br>
4). --presets вказує шо ми транспіліруємо код в ES6<br>


##Запуск
npm run build - для одноразового білда
npm run watch - для постійного білда
