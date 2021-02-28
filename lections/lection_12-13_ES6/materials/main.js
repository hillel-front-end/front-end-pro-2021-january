var goods = [
    { name: 'juice', price: 100, bought: false },
    { name: 'cola', price: 82, bought: true },
    { name: 'pepsi', price: 50, bought: false },
    { name: 'sprite', price: 30, bought: true },
    { name: 'fanta', price: 70, bought: true }
];



// ----------- let, const -------------
// console.log(foo2, 'foo2');

// console.log(foo, 'foo'); error 


let foo;

var foo2;

// console.log(foo, 'foo');


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
    // console.log(i, 'i');
    //BlOCk_SCOPE - N

    setTimeout(function () {
        // debugger;
        //LE ={ scope: BlOCk_SCOPE-3 }
        // console.log(i, 'i');
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


// console.log(person, 'person');

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
    // console.log(a1, a2, a3);

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

// console.log(counter(), 'counter');
// console.log(counter(), 'counter');

// console.log(counter(), 'counter');

// -------------------- Lesson - 13 ----------------

function foo4() {
    const c2 = () => {
        console.log(arguments, 'arguments from foo4 function');

        console.log(this, 'this in arrow');
    };

    console.log(this, 'this');

    c2();
}


const c2Global = () => {
    // console.log(arguments, 'arguments');

    console.log(this, 'this in arrow c2Global');
};

// console.log(this, 'c2 global')

c2Global();

let person2 = {
    name: 'Valera'
}

foo4.call(person2, 'a1', 'a2', 'a3');


// ------- object ---------


let property = 'animal';
let property2 = 'name';

//dictionary
let key2 = 'animal_name_2';
let key3 = 'valera';
let key4 = 'key_4';

//------


// -----

const animal = {
    // name: 'Sharik',
    // run: function() {
    // },
    [key3]: 'fooo',
    [key2]: 'Sharik',
    // [property + property2]: 'Sharik',
     run() {
         console.log(this, 'this');
         console.log(arguments, 'arguments');
     }
};



let amimal2 = {
    [key3]: 'fooo'
};

console.log(animal, 'animal');

console.log(animal[key2], 'animal[key2]');
console.log(animal[key2], 'animal[key2]');
console.log(animal[key2], 'animal[key2]');


console.log(amimal2[key3], 'key');

// console.log(animal, 'animal');
// animal.run(1, 23);


// animal.foo = 'aaa';

// var key = 'foo';

// animal[key] = 'bbb';

// const sum = (a, b) => {
//     a = a || 0;
//     b = b || 0;

//     return a + b;
// };


// ------------- default params ---------------

const sum = (a = 0, b = 0) => a + b;

console.log(sum(1, 2), 'sum');



// --------- tamplate string -------------

// let foo = 12 + ' ' + 'str';



/*
<div class="goods-container">
 <div class="goods__item">
    <div class="goods__item goods__item--bought">juice, 100грн</item>
    <div class="goods__item">cola, 82грн</item>
    <div class="goods__item">sprite 30грн</item>
 </div>
</div> 
*/
const goods2 = [
    { name: 'juice', price: 100, bought: false },
    { name: 'cola', price: 82, bought: true },
    { name: 'pepsi', price: 50, bought: true },
    { name: 'sprite', price: 30, bought: true },
    { name: 'milk', price: 70, bought: true }
];



// let a = goods2.map((good) => { // => [ '<div class="goods_item">' + juice+ '</div>', ... ,n]
//     return '<div class="goods_item">' + good.name + '</div>';
// })

// let markup = 
// '<ul class="goods-container"> ' + 
//     (goods2.map((good) => {
//         return '<li class="goods__item ' + ((good.bought)? 'goods__item--bought' : '') + '">'+  good.name + ' ' + good.price + '</li>'
//     })).join('')
// + '</ul>'

// 'goods__item'

// const str = 'hello' +
// const li = '<li class="goods__item"><li>'
// 'world';

const z5 = 3.14;

// const str = `hello 
//     ${z5}
// world`;
const greeting = (name) => `${name}`; // => name


const str = `hello ${greeting('Valera')}`;


console.log(str, 'str');

const getGoodTemplateBody = (name, price) => `${name}, ${price}`;
const getGoodTemplate = ({ bought, name, price }) => `<section class="goods__item ${bought? 'goods__item--bought' : ''}">${getGoodTemplateBody(name, price)}</section>`;

const markup = `
<div class="goods-container">
  ${goods2.map(good => getGoodTemplate(good)).join('')}
</div>
`;

console.log(markup, 'markup');

document.write(markup);

//  ============ Destructuring objects ============

const good = { name: 'juice', price: 100, bought: false, sell: 11111 };
// const foo = good.name;
// const price = good.price;
// const bought = good.bought;

// let | const  { key1, key2, ..., keyN } = obj
// let key1 = obj.ke1

const { name, price, bought, sell } = good;


console.log(name, 'name');
console.log(price, 'price');
console.log(bought, 'bought');
console.log(sell, 'sell');


let array = ['a1', 'a2', 'a3'];

// const fitst = array[0];
//const last = array[2];

// let [ a, b, c ] = array;
let [ a, , c] = array;

console.log(a, c, 'a , c');


function foo5({ flag, a1, a2, a3 }) { //  const { a1, a2, a3, flag } = params;
    // a1, flag, a2, a3
    // const { a1, a2, a3, flag } = params;
    console.log(a1, a2, a3, flag, 'a1, a2, a3, flag')
}

let params = {
    a1: 'aaa',
    a2: 'bbb',
    a3: 'cc',
    flag: true,
};

foo5(params)