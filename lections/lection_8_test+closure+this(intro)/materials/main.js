/*
    * test
    * closure
    * IIFE(Немедленно вызываемое функциональное выражение)
    * this

*/


// 9 ( 10)  | 2(1) | 1(undefined) | 1 false

// var foo = 1; 

// function bar() { 
//     var foo = undefined;
    
//     if (!foo) { 
//         var foo = 10; 
//     } 

//     console.log(foo);
// } 

// bar();


// 1(7) || 10(2) || ф-я(1) ||  is not defined (1) 
//
// var a = 1; 


// function b() { 
//     //    function a() {} 
//     // LE = {a: func}

//     a = 10; 
//     // LE = {a: 10, scope: window}

//     // return;
//     function a() {} 
// } 

// function b() { 
//     var a;
    
//     console.log(a); 

//      return; 
//      function a() {} 
// } 
 
// b(); 

// function b() { 
//     a = 10;
//     console.log(a); // 10

//     return; 
//     function a() {} 
// } 

// function set(g) { // g = x
//     // le = {g: 0, scope: window}
//     g = 1;
//     // le = {g: 1, scope: window}

// }

// var x = 0;
// set(x);

// console.log(x, 'x');
// console.log(g, 'g');

// function makeFruit(basket) { // basket = fruits
//     basket = [ "Apple" ];
// }

// var fruits = [];

// makeFruit(fruits);

// console.log( fruits[0] ); 

// ----------- closure -------------



// function foo() {
//     // lE = { counter: undefined }
//     var counter = 10;
//     // lE = { counter: 10 }


//     console.log(counter, 'counter');

//     counter += 20;
//     // lE = { counter: 30 }
//     // lE = null
// } 

// foo = null;

// var z = foo;


// foo();

// foo();
// foo();
// foo();
// function foo() {
//     // LE.foo = {count: undefined, scope: LE.foo}
//     var count = 0;
//     // LE.foo = {count: 0}

//     return function() {
//             // LE = {scope: LE.foo}
//         count++
//         console.log('this is function', count)
//     }

//     // LE.foo = null
// }


// var counter = foo()

// foo = null;
// console.log(counter, 'counter');

// console.log(foo, 'foo');
// console.log(counter, 'counter');


// counter();
// counter();
// counter();
// counter();
// counter();
// counter();



function slider(slides) {
    var count = 0;

    // LE.SLDIER = {count: 0, slides:[], scope: window}

    function goNext() {
        return slides[++count];
    }

    function goPrevious() {
        return slides[--count];

    }

    return {
        goNext: goNext,
        goPrevious: goPrevious
    }
}


var nav = slider(['pic1.jpg', 'pic2.jpg', 'pic3.jpg'])


// console.log(nav.goNext());
// console.log(nav.goNext());
// console.log(nav.goPrevious());


//------------ this --------------

function getFullName() {
    // console.log(this.alert, 'this'); //
    // console.log(window.foo, 'window.foo');
    // console.log(this, 'this.foo');
    console.log(this, 'this');
    console.log(this.name, 'name');
    console.log(this.lastName, 'lastName');
    this.foo = 'lololo';
}


var person = {
    name: "Valera",
    lastName: "Ternavsky",
    // getFullName: getFullName
};

var personSecond = {
    name: "Pety",
    lastName: "Petrov"
};


// function getFullName() {
//     console.log(person.name, 'name');
// }

// function getFullName(obj) {
//     console.log(obj.name);
// }


// getFullName(person);
// getFullName(personSecond);

function foo(){

}

person.getFullName = getFullName;
personSecond.getFullName = getFullName;

// console.log(person, 'person');

// getFullName();// without dot style this = window

// console.log(window, 'window'); 

person.getFullName(); // dot style this = person
personSecond.getFullName(); // this = personSecond


// console.log(person, 'person');
// console.log(personSecond, 'personSecond'); 

