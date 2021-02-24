/* Call Apply Bind */

// function foo() {
//     // this = person
// }

// var person = {};

// foo.call(person, 'value')

function mySlice() {
    var arr = [];
    debugger;
    
    for(var i = 0; i < this.length; i++) {
        arr.push(this[i]);
    } 


    return arr;
}

function sum() {
    
    // console.log([].__proto__, '__proto__');
    // console.dir(Array.prototype, 'array');
    // console.log([].__proto__.slice === Array.prototype.slice);

    // var slice = Array.prototype.slice;
    // var push = Array.prototype.push

    // console.log(slice, 'slice');

    // var argAsArray = mySlice.apply(arguments);//arguments.slice = slice; => arguments.slice()
    // console.log(argAsArray, 'argAsArray');

    [].__proto__.push.call(arguments, 'a6'); // arguments.push = push => arguments.push('a6');

    console.log(arguments, 'argum');
    

    // arguments.pop();
}


var mass = [1, 2, 3, 4];

// mySlice.call(mass);


sum('a1', 'a2', 'a3', 'a4', 'a5');


//----------------- bind -----------------

// function greeting() {
//     console.log('Hello');
// }


var person = {
    firstName: 'Valera',
    run: function() {
        console.log(this, 'this');
        console.log(this.firstName, 'runnning...');
    }
};



// console.log(person.run(), 'run');
// console.log(person.run, 'run');

// person.run();

// setTimeout(function() {
//     return person.run();
// }, 5000);


// function foo() {
//     person.run();
// }

// setTimeout(foo, 3000);

var person = {
    firstName: 'Valera',
    run: function() {
        console.log(this, 'this');
        console.log(this.firstName, 'runnning...');
    }
};

// function contextBindHelper(context, method) {

//     return function() {
//         method.apply(context);
//     }
// }



// foo.call(obj)
// run.call(obj);

// foo.call(obj)
// foo.call(obj)
// foo.call(obj)

function contextBindHelper(context) {
    var method = this;

    return function() {
        method.apply(context);
    }
}

Function.prototype.contextBindHelper = contextBindHelper;

var map = {
    x: 12,
    y: 12
};

// --- bad ----
// foo.call(map) == callFooInMap()
// foo.call(map) == callFooInMap()
// foo.call(map) == callFooInMap()


// run.call(map) == callRunInMap()
// run.call(map) == callRunInMap()




function foo() {
    console.log(this, 'in foo');
    console.log(this.x, 'this from foo');
}

function run() {
    console.log(this, 'in run');
    console.log(this.y, 'this from run');
}


var callRunInMap = run.contextBindHelper(map);
var callFooInMap = foo.contextBindHelper(map);



callRunInMap();
callFooInMap();


// setTimeout(callRunInMap, 3000);

// ------------>  bind  <---------------

var person = {
    firstName: 'Valera',
    run: function() {
        console.log(this, 'this');
        console.log(this.firstName, 'runnning...');
    }
};


// function contextBindHelper(context) {
//     var method = this;

//     return function() {
//         method.apply(context);
//     }
// }

var run = person.run.bind(person);

console.log(run, 'run');

// run();
// run();
// run();


// setTimeout(run, 3000);
// setTimeout(person.run.bind(person), 3000);


var operation = {
    a: 1,
    b: 2,
    mul: function() {
        console.log(this, 'this');
        this.a * this.b;
    }
}

function toDo(action) { // action = operation.mul 
    action()
}


toDo(operation.mul.bind(operation));


// function setTimeout(callback, ms) { // callback = function()
//     callback(); // call ms
// };


var z = 13;

function foo(value) {
    // LE = {value: 12, a: undef}
    var a = 12;
    // LE = {value: 12, a: 12, scope: window}

    // foo.[[Scope]] -> window

    // this = obj || window

    console.log('this -->', this);
}


// obj.foo(12);
// foo();


var obj = {hello: 'world'};

// foo.call(obj);

var foo2 = foo.bind(obj);

// foo.call(obj);
// foo.apply(obj);


var person = {
    name: "Valera"
}

var foo3 = foo.bind(person);

foo2();
foo3();

console.log(foo2, 'foo ----------------- function');


// foo();
// foo();


// setTimeout(foo, 4000);

// function setTimeout(callback, ms) { // callback = function()
//     callback(); // call ms
// };


// -------- partilce bind ----------


function ajax(url, payload) {
    console.log('sending ... ');
}


// ----- bad -----
// ajax('/auth', {
//     login: 'Valera',
//     password: 'qwerty123'
// });


// ajax('/auth', {
//     login: 'Pety',
//     password: 'zxcvb5555'
// });

// ajax('/auth', {
//     login: 'Alex',
//     password: 'hhhhhffff33333'
// });


// ----- good -----

/// config -> ajax('/auth')


// function ajax(url) {
//     return function(payload) {
//         console.log('sending ...', url, ' with payload = ', payload);
//     }
// }

// var ajaxAuth = ajax('/auth');

function ajax(url, payload) {
    debugger;
    console.log('sending ...', url, ' with payload = ', payload);
}


var ajaxAuth = ajax.bind(null, '/auth')

ajaxAuth({
    login: 'Valera',
    password: 'qwerty123'
});


ajaxAuth({
    login: 'Pety',
    password: 'zxcvb5555'
});

ajaxAuth({
    login: 'Alex',
    password: 'hhhhhffff33333'
});
