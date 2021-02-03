
//  ------------------------- Object --------------------------

// ------------ Типы Прим-е и Ссыл-е --------------------

// Прим-е: String, Number, Boolean, undefined, null
// Ссыл-е: Array, Func, Object

var a = 12;
var b = a;

b = 20;

c = b;


// ----------- links ---------

var h = ['c1', 'c2'];// link

var i = h;

console.log(i, 'i before');
console.log(h, 'h before');

i.push('c3');

console.log(i, 'i after mutation');
console.log(h, 'h after mutation i');

var c = i;

c.push('c5');

console.log(h, 'h after mutation c');

var arr = [];

function arrFill(mass) { // mass = arr
    mass.push('valera');
}

arrFill(arr)

console.log(arr, 'arr');



// ----- in, for..in, Object.keys, Object.values,  ----


// ----- Object ---------

// 0 - name
// 1 - lasNamt
// 2 - age
// var person = [
//     'Valera',
//     'Ternavsky',
//     25
// ];

/*
  var person = {
        property: value,
        color: 'red',

    }

*/

/*
CSS
    .box {
        color: red;
    }

    .box {
        color: blue;
    }
*/

var box = {
    width: '200px',
    height: '300px',
    color: 'red'
}

var peron = {
    name: 'Valera',
    age: 12,
    isMarried: false,
    isMarried: true
}


console.log(peron, 'peron');


// get value object.property


console.log(peron.age, 'peron.age');

// write value object.property = value

peron.age = 22;

console.log(peron, 'person.age');


var teams = new Array(3);


function getUser() {
    var user = {
        name: prompt('Input name'),
        lasName: prompt('Input lastName'),
        age: +prompt('Input age')
    }


    return user;
}

// for(var i = 0, size = teams.length; i < size; i++) {
//     var currentUser = getUser();
//     teams[i] = currentUser;
// }


// console.log(teams, 'teams');

// var user = {
//     name: prompt('Input name'),
//     lasName: prompt('Input lastName'),
//     age: +prompt('Input lastName')
// }

// ----------- loop -------

var person = {
    name: 'Valera',
    lastName: 'Petrov',
    age: 12,
    isMarried: false,
    children: [
        {
            name: 'Pety'
        }
    ]
}


console.log(person.name, 'name');

var keyName = 'children';

console.log(person[keyName], 'name with var keyName');

// for (var ket in object) {}

for(var key in person) {
    // console.log(key, '------> from person');
    console.log(key, person[key], '--------> value from person')

}



// add key --> in object

// person.color = 'blue';
// person['color'] = 'blue';
var key = 'color';
person[key] = 'blue';

console.log(person, 'person');


// delete key ===> from object

delete person.age;

console.log(person, 'person');


// console.log(user, 'user');