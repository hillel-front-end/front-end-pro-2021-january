/*
 * object methods
 * object clone ?
 * hoisting global
 * hoisting local (vars, function decl(after return))
 * Lexical Environment
 * SCOPE function global
 * SCOPE function nested
 * Closure
 * let, const ?
*/


// function foo(arr) {
//     // var copy = arr.slice(2);
//     // console.log(copy, 'copy');
//     // var index = arr.indexOf('abcb');
//     // console.log(arr[index], 'index');
// }


// var mass = [1, 'abc', 3, 4];
// foo(mass);

// var a = 12;
// var b = a;

// var a = [1 ,2 , 3, 4, 5];

// var b = a;



// ---------- Object methods ---------


// var person = {
//     name: 'Valera',
//     run: function() {
//         console.log('running');
//     }
// };

// function walk() {
//     console.log(person.name, 'walking');
// }

// person.walk = function() {
//     console.log(person.name, 'walking');
// }
// person.walk = walk;

// console.log(person, 'person')
// person.walk();

// console.log(person.name, 'name');
// console.log(person['name'], 'name');

// console.log(person.run(), 'call run');

// console.log(); // console -- object, log - function


// console.log(person, 'person');
// console.log(console, 'console');

// var box = {
//     width: 200,
//     height: 200,
//     rotate: function() {

//     },
//     calculate: function() {
//         return box.width * box.height;
//     }
// }


// console.log(box.calculate(), 'calculate');


// ------------------ hoisting global -------------



// z = undefined;
// b = undefined;
// toDo = undefined
/*

function sum(a, b) {
    console.log('call sum');
    return a + b;
}

*/


// sum(1, 2)

// console.log(z, 'z 1');

// console.log(b, 'b');

// -----  hoistiong global  -------

var z = 12;
var b = 13;

// console.log(z, 'z 2');
// console.log(b, 'b 2');



// ----- expression hoistiong -------
console.log('-----------expression----------')

// console.log(toDo, 'toDo 1');

var toDo = function() {

};

// console.log(toDo, 'toDo 2');


// ----- declaration hoistiong -------
console.log('---------declaration-------------')

// console.log(sum, 'sum 1');

function sum(a, b) {
    console.log('call sum');
    return a + b;
}

// console.log(sum, 'sum 2');



// function foo() {
//     var z = 12;
// }
// {
//     var z = 12;
// }

// console.log(z, 'z');


//z2 = undefined

// if(false) {
//     var z2 = 12;
// }

// console.log(z2, 'z2');

console.log(' -----  hoistiong local  ------   ')

function toDo2() {
    /* hoisting: 
        z = undefined
        function sum(a, b) {
            return a + b;
        }
        sum2 = undefined
    */
    console.log(z, 'z local');
    console.log(sum, 'sum local');
    console.log(sum2, 'sum2');
    console.log(i, 'i');

    var z = 12;

    // function sum() {

    // }

    console.log(sum(1, 2), 'sum(1, 2)');

    var sum2 = function() { };

    return true;

    console.log(12 + 12, 'after return');
    var i = 12

    function sum(a, b) {
        return a + b;
    }
}

// toDo2();

console.log(toDo2(), 'toDo2');
// console.log(sum2, 'sum2');

console.log('-----------Lexical Environment-------------')


// function c1() {
//     /* hoisting:
//       a1 = undefined;
//       a2 = undedined;
//       function a3(params) {
            
//       }

//     */

//     // LE = {a1: undefined, a2: undefined, a3: func()};

//     var a1 = 12;
//     var a2 = function() {};
//     function a3(params) {
        
//     }

// //   LE = {a1: 12, a2: func(), a3: func()};

//     // LE = null
// }

// c1();
// c1();


console.log('----------- Scope -------------')

var m1  = 'global var m1'; // bl

// var z1 = 13;

function b2(params) {
    // LE = {z1: undefined, scope: window}(2) after call
    var z1 = 12;// LE.z1
    // LE = {z1: 12,  scope: window}

    console.log(m1, 'm1');

    //[SCOPE] -> window (1) - init
}

function y1(params) {
    // LE.Y1 = {m1: undefined}
    var m1 = 'local var m1';
    // LE.Y1 = {m1: 'local var m1'}

    b2();
}

y1();

// LE-GLOBAL => window


// console.log(alert, 'alert')
// console.log(window.alert, 'window.alert');

// console.log(window.b1, 'b1');
// console.log(window.b2, 'b2');


console.log(window, 'window');// Globe scope




// var j = 'global';

// function n1() {
    // [[Scopes]]-> window
//     // var j = 'from LE-N1';
//     //LE-N1 = {n2: func(), scope: window}

//     function  n2() {
        // [[Scopes]]-> LE-N1

//         // var j = 'from LE-N2';
//         //LE-N2 = { n3: func(), scope: LE-N1}


//         function n3(j) {
            // [[Scopes]]-> LE-N2

//             // var j = 'from LE-N3';
//             //LE-N3 = { scope: LE-N2}

//             console.log(j, '<-----------------j------------');
//         }

//         n3();
//     }

//     n2()
// }

// n1();

// ------------------
var j = 'global';

function n2() {
    //LE-N2 = {scope:  window}

    console.log(j, '<-----------------j------------');
    // [[Scopes]]-> window
}

console.dir(n2, 'n2s')


function n3() {
    var j = 'from LE-N3';


    n2();

    
    // [[Scopes]]-> window

}

n3()



function sum (a, b) {
    /*
        a = undefined,
        b = undefined
    */

    //LE-SUM = {a: undefined, b: undefined}
    // a = 2, b = 1
    //LE-SUM  = {a: 2, b: 1}

    console.log(a, b);

    var a = 1;
    var b = 2;


    //LE-SUM  = {a: 1, b: 2, scope: window}
    console.log(a, b);


// [[Scope]] -> window
}

sum(2, 1)

// console.log(a);
