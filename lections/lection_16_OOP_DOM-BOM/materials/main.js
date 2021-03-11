// + Глобальные обьекты Window
//
// ================ Browser object model(BOM) =======================
/*
  + window innerH\W 
  + navigator
  + location
  + screen
  + Спецификация HTML
 */

// navigator.getBattery().then((l) => {console.log(l, 'l'); })
// console.log(navigator.userAgent, 'navigator.userAgent');
// console.log(navigator.platform)

// console.log(location, 'location');
//+ setTimeout,  setInterval, alert, confirm
//NodeJS


// console.log(window.innerHeight, window.innerWidth, 'w\h');
//================== Document Object Model(DOM) ======================

/*
+ Глобальные обьект Document
+ (CDT), $0, $1
+ DOM иерархия 
+ JS обращение в html, closest, match, contain
+ html коллекция
+ html элемент
+ Обьекты classList, className, innerText
+ Style
*/


const body = document.body;
const html = document.documentElement;

// console.dir(body, 'body');
// body.id = 'container';
// console.dir(body, 'body');

// const collectionDivs = document.getElementsByTagName('div');

// console.log(collectionDivs, 'collectionDivs');

// for(let i = 0; i < collectionDivs.length; i++) {
//   console.log(collectionDivs[i], 'collection2[i]');
// }

// const collection2 = document.getElementsByClassName('block');

// console.log(collection2, 'collection2');




// const id = document.getElementById('foo')

// console.dir(id, 'id');


// const element = document.querySelector('.box');

// console.dir(element, 'element');

// console.log(element.innerHTML, 'innerHtML');

// setTimeout(() => {
//   // element.innerHTML = 'Hello Front end Pro';
//   // element.align = 'center';
//   // element.className = 'box';

//   element.style.backgroundColor = 'red';
//   element.style.fontSize = 25 + 'px';

//   element.style.left = '100px';
//   element.style.top = '100px';

// }, 4000)

const elements = document.querySelectorAll('.box');

// elements.style.left = '100px'; exception
// elements.style.top = '100px';

const getRandom = (min, max) => Math.round(Math.random() * (max - min) + min);
const getRGB = (min, max) => `rgb(${getRandom(min, max)}, ${getRandom(min, max)}, ${getRandom(min, max)})`
// console.log(getRGB(1, 155), 'getRGB');

setInterval(() => {
  for(let i = 0; i < elements.length; i++) {
    elements[i].style.left = `${getRandom(100, 500)}px`;
    elements[i].style.top = `${getRandom(100, 500)}px`;
    elements[i].style.backgroundColor = getRGB(1, 155);
    elements[i].style.width = `${getRandom(100, 500)}px`;
    elements[i].style.height = `${getRandom(100, 500)}px`;
    elements[i].innerHTML = i;
  }
}, 2000);





// ========= styles =========
