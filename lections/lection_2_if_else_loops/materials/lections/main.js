/*
    +
    bool
    typeof
    isNaN()
    logical operators [>,<, >=, <=, ==, ====, !] 
    if else
    logical and or, 
    if else else if // at home
    тернарный оператор ? // at home
    циклы основы
    while () {}
    do {} while()
    for(){}
*/

// ------- Повторение ----------
// 1 + '2' = '12'
// '2' + '2' = '22'
// '2' * '2' = 4
// 'abc' - '12' = NaN



// Boolean [true , false]

// bool = true;
// bool = false;

/*
  *****************************************************
  ============== Важно помнить преобразования к Number =============
   +null  ->  0

   +""    ->  0      (пустая строка - 0)

   +"123" -> 123 (число в строке - число)

   +true\false -> 1\0

   +"abc" -> NaN (при ошибке результат NaN)
   
   +undefined -> NaN

  *****************************************************
*/

console.log(+"", "Emty string");
console.log(+null, "null");

// ------------- null, undefined ------------

// empty  = null;
// empty  = undefined;



// ------------ var -----------------

// console.log(foo, 'foo');

// foo = 12;

// var foo;

// console.log(foo, 'foo 2');


// ------------- smart operation  ----------
counter = 4;

// counter = counter + 1;
// counter = counter + 1;
// counter = counter + 1;

// counter = counter - 1;

// counter += 1; // counter = counter + 1;
// counter -= 1; //counter = counter - 1;

// var a = counter++; // counter += 1; => counter = counter + 1;
// counter++;

// var a = ++counter;

// console.log(a, 'a');
// console.log(counter, 'counter');

//counter--

//--counter

// ============ Boolean ===============

// true, false

// true + '' => 'true';
// console.log(true + ''); // 'true'

// console.log(true * '12'); // 1 * 12




/* 
*****************************************************
============= Важно помнить преобразования к Boolean ===============

    1) 0, null, undefined, NaN, "" -> false
    2) все остальное -> true

*****************************************************
*/

// 

// console.log(!!12, '!!12'); // true => false => true
// console.log(!!0, '!!0'); // falsse => true

// console.log(Boolean(NaN), 'boolean(NaN)')
// console.log(Boolean(0), 'boolean(0)')
// console.log(Boolean(null), 'boolean(null)')
// console.log(Boolean(undefined), 'boolean(undefined)')
// console.log(Boolean(""), 'boolean("")')

// ------------- Logical operators [>,<, >=, <=, ==, ===, !] -----------------------
 
var a = 12;
var b = 13;

// var result = a > b;
// console.log(result, 'result');

// result = a < b;
// console.log(result, 'result');

// result = a >= b;
// console.log(result, 'result');

// result = a <= b;
// console.log(result, 'result');

// result = a == b;
// console.log(result, 'result');

// console.log('12' == 12, '"12" == 12');
// console.log('12' === 12, "'12' === 12");

// ------------- Conditional -------------

/*
    if (условие) {
        тело условия if
    } 
*/



// if (role === 'admin') { // 'user' === 'admin'=> false || 'admin' === 'admin' => true
//     console.log('welcome');
// } else {
//     console.log('exit');
// }



/*
    var conditional;

    if (conditional) {
        при условие (conditional == true) => выполняеится тело if() {}
    } else {
        при условие (conditional == false) => выполняеится тело else {}
    }
*/

// var role = 'user';

// if (role === 'admin') { 
//     console.log('if --- welcome');
// } else {
//     var age = +prompt('');

//     if (age >= 18) {
//         console.log('else -- welcome');
//     } else {
//         console.log('exit');
//     }
// }










/*
    if (условие) {
       тело условия if
    } else if(условие) {
       тело условия else-if
    } else {
        тело условия else
    }
*/
// var role = 'user';

// if (role === 'admin') {
//     console.log('Hello admin');
// } else if (role === 'user') {
//     console.log('hello user');
// } else {
//     console.log('hello anonim');
// }
// var age = 10;

// // &&
// if (age >= 12 && age < 20 && role === 'admin') { 
//     console.log('welcome');
// } else {
//     console.log('exit');
// }

// if (age == 16 || age == 20) { 
//     console.log('welcome');
// } else {
//     console.log('exit');
// }


// Таблица истиности
//&&

/*
//&&
 false && false ==> false
 true && false ==> false
 false && true => false
 true && true => true

 ||

 true || false =>  true
 false || true => true
 false || false => false
 true || true => true
*/

 // ============ Loops ===============

 /* 
    while(условие) {
        блок кода
    }
*/

count = 0;

// while(count <= 5) {
//     console.log('loop');
//     count++;
// }

 /* 
    do {
        блок кода
    } while(условие)
*/


// do {
//     console.log('loop do - while');
//     count++;
// } while(count < 15)



/* 
 // for(1;2;3){
//     4
// }

1 - зона переменных
2 - зона условия выполнеия\выхода из цикла
3 - зона увеличения счетчика 
4 - зона выполнения тела цикла(если зона 2 == true)

*/