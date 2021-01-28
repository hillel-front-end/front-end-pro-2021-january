/*
  Lection 4 - Array
    * Двумерные массивы
    * Зубчатые массива\ Ступенчатые массивы
*/

var rowFirst = [1, 2, 3];
var rowSecond = [4, 5, 6];

// var twoDem = [
//   rowFirst,
//   rowSecond
// ];

var twoDem = [
  [1, 2, 3],
  [4, 5, 6]
];

/*
    [
      [1, 2, 3], 
      [4, 5, 6]
    ]

*/

console.log(twoDem, 'twoDem');
// var row = 0;
// var column = 0;
// console.log(twoDem[row][column], '0')
// console.log(twoDem[1][2], 'row = 1, column = 2')

// for(var i = 0, sizeI = twoDem.length; i < sizeI; i++) {
//     // console.log(twoDem[i], 'i == ' + i);
//     var innerArray = twoDem[i];

//     for(var j = 0, sizeJ = innerArray.length; j < sizeJ; j++) {
    
//       console.log(innerArray[j], 'row => ' + i + ' ' + "column => " + j)
//     }


// }

var size = 5;
var mass = [];

mass.length = size;


for(var row = 0; row < mass.length; row++) {
  mass[row] = [];
  mass[row].length = size;


  for(var column = 0; column < mass[row].length; column++) {
      // console.log(mass[row][column], 'row | column');
      mass[row][column] = Math.round(Math.random() * 60);
  }
}


console.log(mass, 'mass');