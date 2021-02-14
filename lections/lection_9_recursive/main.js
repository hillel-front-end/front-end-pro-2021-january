/*
  recursive
*/

// function foo(index) {
//     console.log(index, 'index')

//     foo(++index);
// }

// foo(0);


// do {
//     var value = prompt();
// } while(isNaN(value))


// function getNumber() {
//     var value = prompt();

//     if (!isNaN(value)) {
//       return value;
//     }

//     var result  = getNumber();

//     return result;
// }

// console.log(+getNumber());


// var mass = ['a', 'b', 'c', 'd', 'e'];

// function loop(arr, i) {
//     if (i === arr.length) { // basic
//         return;
//     }
//     // console.log(arr[i], 'arr[i]');//этап погружения р-и



//     loop(arr, i + 1); // recursive
//     // console.log('flag - 2');

//     console.log(arr[i], 'arr[i]');// схлопование р-и
// }

// loop(mass, 0);
// console.log('flag - 1');

// var mass = [1, 2 , 3];

// function sumArr(arr) {
//     if (arr.length == 1) {
//         return arr[0];
//     }

//     var last = arr.pop();
//     var res = last + sumArr(arr);

//     return res;

// }


// var sum = sumArr(mass.slice()); // 6

// console.log(sum, 'sum');

for(var i = 0; ; i++) {
    
}