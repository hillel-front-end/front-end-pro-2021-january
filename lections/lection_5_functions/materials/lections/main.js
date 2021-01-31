// /*
//   Lection 6 - Functions
//     * examp func declaration
//     * examplele func expression
//     * use/call func
//     * use/call func without args
//     * use/call func with args
//     * arguments
//     * callback
// */


//  ---------------- DRY -----------------------

// alert(), confirm(), prompt()


console.log(alert, 'alert');

// *************** function declaration ******************
var a = 1;
var b = 2;

if (a > 0 && b > 2) {
   //scope
   // console.log(a + b);
}



function myAlert() {
   // alert();
   console.log('my alert work');
}


// myAlert();
// myAlert();
// myAlert();


for(var i = 0; i < 3; i++) {
   myAlert();
}


//  ============ args ============

// function sum() {
//    var result;
//    var a = 1;
//    var b = 2;

//    result = a + b;
// }

function sum(a, b, c) { // a = 1, b = 2
   var result = a + b + c;
   console.log(result, 'result');
}


sum(2, 2, 3);

// sum();


// alert('Hello world')


function arrayFiller(arr, sizeI, sizeY) { 
   //var sizeI = 5; var sizeY = 6



   for(var i  = 0; i < sizeI; i++) {
      arr[i] = new Array(sizeY);

      for(var j = 0; j < arr[i].length; j++) {
         arr[i][j] = Math.floor(Math.random() * 50);
      }
   }

   console.log(arr, 'arr');
}


var data = [];

// arrayFiller(data, 5, 6);


// arrayFiller([], 10, 10);


// arrayFiller();



// ====================== function expression ================

// mull(6, 6, 'before');

function mull(a, b, metka) {
   console.log(a * b, metka, 'mull declaration');
}


// mull(1, 2);

// var mull = function(a, b) {
//    console.log(a * b);
// } 

// mull(1, 2, 'after init');
// mull(2, 2, 'after init');
// mull(3, 2, 'after init');




//=============== return value =============


function greeting(name) {
   return 'Welcome ' + name
}

function sum(a, b) {
   return a + b;
}

var result = sum(1, 2);



var welcome = greeting('Valera');

function arrayFiller(arr, sizeI, sizeY) {

   var isNotArray = !Array.isArray(arr);

   if (isNotArray) {
      return [];
   }
   //var sizeI = 5; var sizeY = 6
   for(var i  = 0; i < sizeI; i++) {
      arr[i] = new Array(sizeY);

      for(var j = 0; j < arr[i].length; j++) {
         arr[i][j] = Math.floor(Math.random() * 50);
      }
   }

   
   return arr;
}



var filledArray = arrayFiller(5, 6);

console.log(filledArray, 'filledArray');


// ====================== scope ================

function foo(world) { //var b = 5 
   var hello = 12;
   
}


foo(5);

// console.log(hello); var from foo  -> Exeption 

if (true) {
   var hello2 = 13;
}

// console.log(hello2, 'hello2');


// 


// ============= callback ============


var div = function(a, b) {
   console.log('call func div');
   return a / b;
};

var mull = function(a, b) {
   return a * b;
};

var sum = function(a, b) {
   return a + b;
}
// var foo = div;

console.log(foo, 'foo');

function toDo(a, b, callback) { // func = div
   return callback(a, b);
}

// console.log(div, 'div');


toDo(1, 2, div);
toDo(1, 2, mull);
toDo(1, 2, sum);


// =========== arguments ============


var foo = function() {
   // var arguments = [1, 2, 3, 4, 5]
  console.log(arguments, 'arg');
//   arguments.push(12);
  console.log(arguments, 'arg');
};




foo(1, true, '3', div);

var mull = function() {
   for(var i = 0, result = 1; i < arguments.length; i++) {
      result *= arguments[i];
   }

   return result;
};


var a = 0;

a = mull(19, 12, 63, 44, 115);


console.log(a, 'a');