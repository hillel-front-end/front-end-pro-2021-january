function set(y) { // y = x => y = 1
    y = 1;
}

var x = 0;

set(x);


console.log(x); 


var x = 0;

var y = x;

y = 2;

// -----------------------------------

function addFruit(basket) { //basket = fruits
    basket[0] = "Apple";
}

var fruits = [];

addFruit(fruits);

console.log( fruits[0] )


// -----------------------------------

function makeFruit(basket) { // basket = fruits
    basket = [ "Apple" ]; // basket = ["Apple"]
    console.log(basket, 'basket');
}
var fruits = new Array(10);

makeFruit(fruits);

console.log( fruits[0] );



var foo = 1; 

function bar() { 

    if (!foo) { 
        var foo = 10; 
    } 

    console.log(foo); 

} 


bar();

// --------------------------------------


var user = {
    firstName: "Вася",
    sayHi: function() {
        console.log( this.firstName );
    }
  };


//   setTimeout(user.sayHi, 1000);

function foo2(sayHi) {
    sayHi();
}

console.log(user.sayHi.bind(user));

foo2(user.sayHi.bind(user))
  