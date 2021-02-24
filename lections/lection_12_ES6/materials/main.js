var goods = [
    { name: 'juice', price: 100, bought: false },
    { name: 'cola', price: 82, bought: true },
    { name: 'pepsi', price: 50, bought: false },
    { name: 'sprite', price: 30, bought: true },
    { name: 'fanta', price: 70, bought: true }
];



// ----------- let, const -------------
console.log(foo2, 'foo2');

// console.log(foo, 'foo'); error 


let foo;

var foo2;

console.log(foo, 'foo');


function toDo() {
    var c1 = 123;
}


// if (true) {
//     // IFFI
//     (function () {
//         var c2 = 13;
//     })()
// }


if (true) {
    let c2 = 13;
}

// if (false) {
//     var c3 = 13;
// }

// console.log(c3, 'c3');

// console.log(c2, 'c2');


for(let i = 0; 3 < 3; i++) {
    console.log(i, 'i');
    //BlOCk_SCOPE - N

    setTimeout(function () {
        // debugger;
        //LE ={ scope: BlOCk_SCOPE-3 }
        console.log(i, 'i');
    }, 5000);
}


let c3 = 3;

// let c3 = 4; //bad

c3 = 4;
// console.log(i, 'i outer');




// ----------- const -----------

var COUNT = 3;
var ERROR_CODE = 500;

ERROR_CODE = 501;

// console.log(ERROR_CODE, 'ERROR_CODE');

const PI = 3.14;

// PI = 5.15; --> bad


// const person = {
//     name: 'Valera'
// };

// person.name = 'Pety';


// person = {
//     name: "Alex"
// };

const person = Object.freeze({
    name: 'Valera'
});

person.name = 'Pety';


console.log(person, 'person');

// ---------- arrow -------


function procces() {

}

let expressionFunction = function() {

};

let expressionFunctionNamed = function someName() {
    // if (true) {
    //     someName();
    // }
}

// expressionFunctionNamed();



let arrow = (a1, a2, a3) => {
    console.log(a1, a2, a3);

    // console.log(arguments, 'arg'); error arguments is not defined
};



// arrow(1, 2, 3);

// let sumPlusOne = (a) => {
//     return a + 1;
// };

// function sum() {
//     return a + 1;
// }

let sumPlusOne = a => a + 1;


function makeCounter(start) {
    let count = start || 0;

    return () => {
        // console.log()
        count++;
    }
     
}


const counter = makeCounter(3);

console.log(counter(), 'counter');
console.log(counter(), 'counter');

console.log(counter(), 'counter');


function foo4() {

    const c2 = () => {
        console.log(arguments, 'arguments from foo4 function');
    };

    c2();
}

foo4('a1', 'a2', 'a3');