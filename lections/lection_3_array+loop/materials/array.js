/*
  1. Math
  Math​.round() - возвращает число, округлённое к ближайшему целом
  Math.floor() - возвращает целое число, которое меньше или равно данному 
  Math.ceil() - округляет аргумент до ближайшего большего целого.
  Math.random() - получени случайного числа от 0 - 1
  Форумула получени случайного числа в диапазоне от min (включительно) до max (не включительно):
  Math.random() * (max - min) + min;

*/

// console.log('12')

Math.round(1.5); // 2
Math.round(1.4); // 1

var foo = Math.round(1.5);
console.log(foo, "round");

foo = Math.floor(1.7);
console.log(foo, " 1.7 -> floor");

foo = Math.ceil(1.3);
console.log(foo, "1.3 -> ceil");

var min = 10,
  max = 20;

var random = Math.random() * (max - min) + min;

console.log(Math.round(random), "random");

/*
Lection 3 - Array
 * Math
 * [], [].length
 * Доступ по индексу
 * Обращение к первому/последнему элементу массива
 * Добавление элемента в массив
 * [].length = 20 || data[30] = 'foo'
 * Заполнения массива случайными числами
 * Пример - перебор
 * new Array()
 * 
 * Практика:
  - min, max (10 - 20),
*/
// var user1 = "a",
//   user2 = "b",
//   user3 = "c";

var team = ["Valera", "a", "b"];

console.log(team, "team");

// --------- read  -------------// i++
// console.log(team[0], "first");
// console.log(team[1], "team[1]");
// console.log(team[2], "team[2]");
// console.log(team.length, "length before write");

// --------- write  -------------
team[3] = "Pety";

console.log(team, "team before");

team[3] = "Alex";
team[4] = "bbb";
// console.log(team, "team after");
// var foo = [true, false, "12", 111, null];

// console.log(foo, "foo");
// console.log(team, "team");
// console.log(team.length, "length after");

// team[4] = "Aaaaa";

// [a, b, c, d, e]
console.log(team.length, "length"); // == 5 - 1 => 4

// console.log(team, "team");

// team[team.length] = "Zzzz"; // add last
// console.log(team[team.length - 1], "always last");
// team.length - 1

// ---- array + loop ----

// for (var i = 0; i < team.length; i++) {
//   console.log(team[i], i, "team");
// }

var users = [];
users.length = 3;

console.log(users, "users");

for (var j = 0, size = users.length; j <= size; j++) {
  // console.log(users[j], "users");
  users[j] = prompt("Inmput user name");
}

console.log(users, "users");
