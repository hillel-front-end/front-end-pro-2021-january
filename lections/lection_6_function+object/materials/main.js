 /*
  Lection 6 - Functions
  * scope (local, global) + mutation global
  * nested function
  * return callback
  * IIFE(Немедленно вызываемое функциональное выражение)
  * Object + links type
*/

// 12 < 13  => fal

//  operand1 && operanda2

//  operand1 || operanda2

// 'valera' == 'valera'

// == ===

//arguments => 

// function sum(a, b, c, d, e) {
//   console.log(arguments, 'arg');
// }

// sum(1, 2, 3, 4, 5, 6, 7, 8)
// -------------- области видимости  ------------
var b = 10;

var globalHundred = 100;

function sum() {
  var a = 12; // local var a
  // var res

  // globalHundred = a + b; // global mutation => dirty function

  return a + b; // global var b
}

// var res = sum(); good
globalHundred = sum();


console.log(globalHundred, 'globalHundred');


function mull(v1, v2) { // good // v1, v2) --local
  return v1 * v2;
}

// console.log(v1, 'v1');


function valuePlusHundred(value, hundred) {
  return value + hundred;
}

var res2 = valuePlusHundred(10, globalHundred); //10, 100 => 110

console.log(res2, ' < ======== res2');

// console.log(a, 'a');// Global var a => Error
// var h = 0; // 0 => 12
// var h = 12

function c1() {
  // var h;
  h = 12; //without var || let || const => global var h
}

c1();

// console.log(h, 'h');



function c2() {

  // console.log(g, 'g');

  
}

PI = 3.14;


// var g = 'global';

function c3(value) {
  var g = 'local_c3';

  function c4() {

    console.log(g, 'g --- from C4');

  }

  c2();
  c4();
}


// c4(); //global call c4 => Error
c3(PI);

// console.log(g,' g')


// function factoryToDo(action) {
//   if (action === 'sum') {
//     return function(a, b) {
//         console.log(a + b);
//     }
//   } else if (action === 'mull') {
//     return function(a, b) {
//       console.log(a * b);
//     }
//   }
// }

function factoryToDo(action) {
  var sum = function (a, b) {};

  // return sum
  return function(a, b) {};
}


var actionSum = factoryToDo()

console.log(actionSum(1, 2), ' ------ actionSum --------');
actionSum(1, 2)
actionSum(1, 2)

// // var g = 12;

// function c1() {
//   // console.log(g, 'g');
//   // g = 14
//   // valera = 'valera'
  
// }

// function c2() {
//   var g = 13;

//   c1();
// }

// c2();


