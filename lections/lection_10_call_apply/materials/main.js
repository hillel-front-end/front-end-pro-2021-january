/*  --- RECURSIVE ADDITIONAL --- */

var arr = [
    1, 
    2, 
    3,
    4,
    [
        2.5, 2.6, [3.7, 3.8, 3.9]
    ],
    [
        [
            3.10, 3.11 , 3.12, [4.13, 4.14, 4.15, [5.16, 5.17, 5.18, [6.1, 6.2, 6.3]]]
        ]
    ]
];


// function foo() {
//     // LE = {a : undef}
//     var a = 12;
// }

// obj.method()


// for(var i = 0; i < arr.length; i++) {
//      var v = arr[i];

//      if (Array.isArray(v)) {
//         for(var j = 0; j < v.length; j++) {
//             var z = v[j];

//             if (Array.isArray(z)) {
//                 for(var k = 0; k < z.length; k++) {
//                     console.log(z[k], '3')
//                 }

//                 console.log(z, ' 2 is array');
//                 continue;
//              }

//              console.log(z, '2 is not array');

//         }

//         console.log(v, 'v is array');
//         continue;
//      }

//      console.log(v, 'v is not array');
// }


var arr = new Array(
    new Array(
        new Array(13), 
        new Array(5)
    ), 
    new Array(
        new Array(
            new Array(
                new Array(5),
                new Array(
                    new Array(
                        new Array(5)
                    ),
                    new Array(5)
                )
            ),
            new Array(5)
        ),
        new Array(6)
    )
);


// console.log(arr, 'arr');


function arrayDeepFiller(arr) {
    arr = arr || new Array(3);

    for(var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) { 
            arrayDeepFiller(arr[i]);
            continue;
        }

        arr[i] = Math.ceil(Math.random() * 30);
    }
}

arrayDeepFiller(arr)

// console.log(arr, 'arr');

/*

Cоздать конвертер-функцию которая получает на вход массив вида: 

mass = [
    [1,2,3, [3.1] ], 4, [ 5, 6, [7, 8, [9, 10, 15]]]
]; 

а на выходе получим переобразованый массив: [1 ,2, 3, 3.1, 4, 5, 6, 7, 8, 9, 10, 15]
*/


/*  --- This ADDITIONAL (call, apply, bind) --- */

// CRUD
var crud = {
    create: function(){},
    reade: function(){},
    update: function(){},
    delete: function(){}
}

// crud.create().reade().update().delete()

// crud
//     .create()
//     .reade()
//     .update()
//     .delete()
//     .update();


// var a = crud.reade();
// var b = a.delete();
// var c = b.update();
// var g = c.create();


var map1 = {
    x: 100,
    y: 200
};

var map2 = {
    x: 12,
    y: 33
};

var x = 222;
var y = 333;

function getCoords() {
    return 'x == ' + this.x + ' ' + ' y == ' + this.y; 
}



// map1.getCoords = getCoords;// (1)
// map2.getCoords = getCoords;


// console.log(map1, map2);


// console.log(getCoords(), 'from window');

// console.log(map1.getCoords(), 'from map1'); // (2)
// delete map1.getCoords; // (3)

// console.log(map2.getCoords(), 'from map2');
// delete map2.getCoords;

// console.log(map1, map2);


//  ---------- call, apply ---------

var person = {
    name: 'Valera'
}

function foo(a1, a2, a3) { 
    console.log(this, 'this in foo');
    console.log(arguments, 'arg in foo');
    console.log(a1, a2, a3, 'a1, a2, a3');
}

// func.call(context, params1, params2, ... , paramsN) === context.func(params1, params2, ... , paramsN)


// foo.call(person, 1, 2, 3, 4); //person.foo(1, 2, 3)

// console.log(person, 'person');



console.log(getCoords.call(map1), 'getCoords.call(map1)');
console.log(getCoords.call(map2), 'getCoords.call(map2)');


console.log(map1, map2);

//  --------- apply ---

// func.apply(context, [ params1, params2, ... , paramsN ]) === context.func(params1, params2, ... , paramsN)

function foo2(a1, a2, a3, a4) {
    console.log(this, 'this in foo2');
    console.log(arguments, 'arg in foo2');
    console.log(a1, a2, a3, a4, 'a1, a2, a3, a4');
}

var mass =  ['aaa', 'bbb', 'ccc'];

// mass.push('hhhh');
// mass.splice(0, 1);


foo2.apply(person, mass); // person.foo2('aaa', 'bbb', 'ccc');
