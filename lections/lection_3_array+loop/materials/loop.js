// console.log(confirm("Повторить?"), "conf");

var counter = 0;
var isRepeat = true;

// while (isRepeat && counter < 3) {
//   console.log("validation login and password");

//   isRepeat = confirm("Повторить?");
//   counter++;
// }

/* 
 // for(1;2;3){
//     4
// }

1 - зона переменных
2 - зона условия выполнеия\выхода из цикла
3 - зона увеличения счетчика 
4 - зона выполнения тела цикла(если зона 2 == true)
*/

for (var counter = 1; counter < 5; counter++) {
  console.log("to-do" + counter);
}

for (var i = 0, j = 5, step = 1; 5 < 5 && j > 0; i += step, j--) {
  console.log("i", i);
  console.log("j", j);
}

// 1 -> 2 -> 3
// 4 -> 2 -> 3
// 4 -> 2 -> 3

// !4 = 1 * 2 * 3 * 4 => 24

// var factorial = 1;
// var i = 1;

// factorial = factorial * 1; // result == 1
// factorial = factorial * 2; // result == 2
// factorial = factorial * 3; // result == 6
// factorial = factorial * 4; // result == 24

// factorial = factorial * i; // result == 1
// i++;
// factorial = factorial * i; // result == 2
// i++;
// factorial = factorial * i; // result == 6
// i++;
// factorial = factorial * i; // result == 24

var value = +prompt();

for (var i = 1, factorial = 1; i <= value; i++) {
  //   factorial = factorial * i;
  factorial *= i;
}

console.log("factorial " + value + "===", factorial);
