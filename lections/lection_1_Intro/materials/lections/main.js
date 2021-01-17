/*
Lection 1 - JavaScript Intro
  * JS Введение
  * Подключение скриптов
  * Скрипты в отдельных файлах
  * Именование переменных
  * Переменные + типы(String, Number),  NaN,
  * Операторы
  * Приведение типов(явное, неявное)
  * Консоль разработчика
  * debugger
  * ? Операторы (+= \ ++)
*/

/*
  # 1. JS Введение
   * LiveScript - JavaScript;
   * JavaScript — это язык программирования, который даёт возможность реализовывать сложное 
     поведение веб-страницы. Является интерпретируемым языком.
   * Интерпретация – это когда исходный код программы получает другой инструмент, который называют «интерпретатор», 
     выполняет его «как есть». При этом распространяется именно сам исходный код (скрипт). 
     Этот подход применяется в браузерах для JavaScript. 
*/

// -----------Types -------------/
// Java  > Integer age = 12; Float a = 12.4;
// JavaScript => number

age = 12;

//age=12

a = 20.6;

// String
// Java => String name = 'valera'

name = 'Valera';
login = "Valera";


age = 20;
login = 'Pety';

// -- MAth ------

h = 10;
i = 3;

result = h + i;
console.log(result, '+');

result = h - i;
console.log(result, '-');

result = h * i;
console.log(result, '*');

result = h / i;
console.log(result, '/');

result = h % i;
console.log(result, '%');


// ----- Приведение типов(явное, неявное) ------

str1 = 'Valera';
str2 = 'Ternavsky';

// result = str1 + str2;
result = str1 + ' ' + str2; // 'Valera' +  ' ' + 'Ternavsky' => 'Valera Ternavsky'

console.log(result, 'result');


result = str1 + 18; //'Valera' + 18 => string + number => string + string => string
//'Valera' + 18 => 'Valera' + '18' => 'Valera18'


result = '12' * 2; // string * number => number * number => number
console.log(result, 'result');


result = '12' * '10'; //string * string => number * number => number
console.log(result, 'result');

result = 'abc' / '10'; // string / string =>  / number => NaN 

//'abc' => NaN
console.log(result, 'result NaN');

// ------------- явно ---------

j = 'abc';

// g = +'123';
g = +'123a';


console.log(g, 'g');

//parseInt()

// g = parseInt('123a555'); //123
g = parseInt('a123555'); //NaN

console.log(g, 'g');

//typeof

// console.log(typeof g, 'g');
// console.log(typeof j, 'j');










