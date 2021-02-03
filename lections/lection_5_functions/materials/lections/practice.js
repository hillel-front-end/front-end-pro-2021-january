// Функция должна вернуть массив из центральных элементов переданных массивов.
// Центральный элемент, это один центральный, если массив по длине непарный [1, 2, 3, 4, 5] -> 3
// Центральный элемент, это пара центральных, если массив по длине парный: [1, 2, 3, 4, 5, 6] -> 3, 4

// var mass = [1, 2, 3, 4, 5, 6];
// var count = mass.length % 2 === 0? 2 : 1;
// var position = Math.ceil((mass.length / 2)) - 1;

// mass.splice(position, count);

// console.log(mass, 'mass');


function getCentralElements(arr1, arr2, arr3){
    //-------------------------------------------------------

    // evolution step - 1 (dity)
    // var count = arr1.length % 2 === 0? 2 : 1;
    // var position = Math.ceil((arr1.length / 2)) - 1;
    // var spliced1 = arr1.splice(position, count);

    // console.log(spliced1, 'spliced');


    // var count = arr2.length % 2 === 0? 2 : 1;
    // var position = Math.ceil((arr2.length / 2)) - 1;
    // var spliced2 = arr2.splice(position, count);

    //-------------------------------------------------------

    // evolution step - 2
    // var spliced1 = getCutElem(arr1) // вызов ф-ии getCutElem в теле ф-ии getCentralElements
    // var spliced2 = getCutElem(arr2)
    // var spliced3 = getCutElem(arr3);

    // console.log(spliced1, spliced2, spliced3, 'spliced1, spliced2, spliced3');

    //-------------------------------------------------------

    // evolution step - 3
    var mass = [];

    // console.log(arguments, 'arguments');

    // console.log(Array.isArray(arguments), 'arguments');


    for(var i = 0; i < arguments.length; i++) {
        var splicedList = getCutElem(arguments[i]);
        mass = mass.concat(splicedList);
    }

    return mass;
  
}

var res = getCentralElements([1, 2, 3, 4, 5], [12, 6, 7, 8], [8, 6, 4, 3 , 7, 8]); // [ 3, 6, 7,  4, 3]


function getCutElem(mass) {
    var count = mass.length % 2 === 0? 2 : 1;
    var position = Math.ceil((mass.length / 2)) - 1;
    var spliced = mass.splice(position, count);

    return spliced;
}