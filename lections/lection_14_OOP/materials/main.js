// OOP

const obj = {
    a1: 1,
    hello: 'world',
    name: 'object-1',
    run() {
        console.log('running', this);
    }
};


const obj2 = {
    a2: 2,
    name: 'object-2',
    __proto__: obj
};

const obj3 = Object.create(obj2);// {__proto__: obj2}

console.log(obj, 'obj');

console.log(obj2, 'obj2');

console.log(obj3, 'obj3');

console.log(obj3.a1, 'a1');
console.log(obj3.foo, 'foo');

obj3.name = 'object - 3';
obj3.run(); // this ????


// console.log(obj2.hello, 'key --> hello');

// console.log([], 'array');

// console.dir(function(){})


let array = new Array();
let array2 = new Array();


 // let array  = [];
let obj4 = new Object();//  let object = {};
let func = new Function();
let str = new String();

console.log(array, 'array');
console.log(obj4, 'object');

// let c1 = {};
// let c2 = new Object();

function User() {
    // console.log(this, 'this');
    // console.log(arguments, 'arg');

    this.login = 'Valera';
    this.password = 'aaabbb112122';
    this.arr = [];

    this.run = function() {

    }
    // return [];
}


const user1 = new User();
// const obj5 = new Object();

console.log(user1, 'user1');

console.dir(User.prototype, 'Prototype');
// console.log(obj5, 'obj5');

/*
1) new - > ({}) создает пустой объект (*) 
2) User() - > вызов ф-ии конструктор класса User
3) this --> вунтри User -> this = (*)
4) __proto__ = User.prototype
*/

// console.log(user, 'user');


function HTMLElement(tagName) {
    this.tagName = tagName;

    if (tagName == 'a') {
        this.redirect = function(url) {
            console.log('redirect to --> ', url);
        }
    } else if (tagName == 'img') {
        this.showPicture = function(url) {
            console.log('redirect to --> ', url);
        }
    }

    // ---- bad ---
    // this.render = function() {
    //     console.log('rendering ', this.tagName);
    // }
}

    
HTMLElement.prototype.render = function() {
    console.log('rendering ', this.tagName);
}

const anchor = new HTMLElement('a');
const img = new HTMLElement('img');
const span = new HTMLElement('span');

// HTMLElement.prototype.version = '1.0.0';

// console.log(HTMLElement.prototype, 'HTMLElement.prototype');
// console.log(anchor, 'anchor');
// console.log(img, 'img');
// console.log(span, 'span');

// console.log(anchor.__proto__ === HTMLElement.prototype);// 
// console.log(img.__proto__ === HTMLElement.prototype);// 
// console.log(span.__proto__ === HTMLElement.prototype);// 

anchor.render();