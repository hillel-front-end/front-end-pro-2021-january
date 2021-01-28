// Массив [1, 2, 3, 4, 5] вывести на экран через разделитель ‘_’

var foo = [1, 2, 3, 4, 5];
console.log(foo.join('_'), '<---- join')

document.write(foo.join('_'));

// рганизовать вывод массива [6,7,2,3,5,7] в виде списка, при помощи тегов ul-li

var arr = [6,7];

// document.write('<ul>');
// for(var i = 0; i < arr.length; i++) {
//   document.write('<li>' + arr[i] + '</li>')
// }
// document.write('</ul>')


`<ul>
  <li>6</li>
  <li>7</li>
  <li>2</li>
  <li>3</li>
  <li>5</li>
  <li>7</li>
</ul>`

//<ul><li> 6</li><li> 7 </li></ul>

document.write('<ul><li>');
document.write(arr.join('</li><li>'));
document.write('</li></ul>');


// В массиве [1,2,3,4,5,6] вырезать центральный элемент, если длина массива парная 
// – вырезать два элемента, которые можно считать центральными


var mass = [1, 2, 3, 4, 5, 6];
var count = mass.length % 2 === 0? 2 : 1;
var position = Math.ceil((mass.length / 2)) - 1;

mass.splice(position, count);

console.log(mass, 'mass');