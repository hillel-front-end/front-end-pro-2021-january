/*
     Разсортировать положительные и отрицательные числа по разным массивам. 
   *   30 случайных чисел в деапазоне от -5 до 5 разсортировать по массивам А и В, где А - массив положительных чисел, 
        В - отрицательных.
       Если число равно нуля, то игнорируем его.
   *   В массиве A найти min - значение, и max - значение. Min - max поменять местами.

*/

var min = -5,
  max = 5;

var foo = [];

var a = [],
  b = [];

for (var i = 0, maxCount = 30; i < maxCount; i++) {
  var random = Math.round(Math.random() * (max - min) + min);
  foo[foo.length] = random;

  // console.log(random, "random");
  if (random > 0) {
    a[a.length] = random;
  } else {
    b[b.length] = random;
  }
}

console.log(foo, "foo");
console.log(a, "array -> pos");
console.log(b, "array -> neg");

var maxValue = a[0];
var minValue = a[0];

var minPos = 0;
var maxPos = 0;

for (var j = 1; j < a.length; j++) {
  // console.log(a[j]);
  if (a[j] >= maxValue) {
    maxValue = a[j];
    maxPos = j;
  }

  if (a[j] <= minValue) {
    minValue = a[j];
    minPos = j;
  }
}

console.log(maxValue, "maxValue");
console.log(minValue, "minValue");

console.log(maxPos, "maxPos");
console.log(minPos, "minPos");

debugger;
var swap = a[maxPos];
a[maxPos] = a[minPos];
a[minPos] = swap;

console.log(a, "a");
