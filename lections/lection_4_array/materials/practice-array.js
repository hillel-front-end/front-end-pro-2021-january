
// ------ practice (two-dimensional array) ------ 


/*

1)  В двумерном массиве A размером n(рядов) на m(столбцов). Заполнить случайными числами.
    1. Найти ряд, где сумма элементов наименьшая
    2. Найти ряд, где сумма элементов найбольшая
    3. Поменять ряды местами (1 и 2 пункт)

*/
var size = 5;
var mass = [];
mass.length = 5;

for(var row = 0; row < mass.length; row++) {
    mass[row] = [];
    mass[row].length = size;
  
    for(var column = 0; column < mass[row].length; column++) {
        mass[row][column] = Math.round(Math.random() * 60);
    }
}

console.log(mass, 'mass');

var minRow;
var maxRow;

var minRowI;
var maxRowI;

for (var i = 0; i < mass.length; i++) {
    for(var j = 0, sum = 0; j < mass[i].length; j++) {
        sum += mass[i][j]; 
    }
    console.log(i + ' row => ' + sum)

    if (i === 0) {
        minRow = sum;
        maxRow = sum;
        // continue;
    }

    //afte 
    if (sum >= maxRow) {
        maxRow = sum;
        maxRowI = i;
    }

    if (minRow >= sum) {
        minRow = sum;
        minRowI = i;
    } 

}


console.log(minRow, maxRow, 'minRow, maxRow');
console.log(minRowI, maxRowI, 'minRowI, maxRowI');

var swap = mass[minRowI];
mass[minRowI] = mass[maxRowI];
mass[maxRowI] = swap;

console.log(mass, 'mass after');