console.log("Lection_DOM-events");

  /*
Dom navigation
  events [ 
    click, 
    mousemove, 
    mouseleave, 
    onmousedown,  
    onmouseup,
    onmouseover, 
    onmouseout,
    onmousemove,
    contextmenu 
], 
*/


const parent = document.querySelector('.parent');


// console.dir(parent, 'parent');

// console.log(parent.children, 'children');
// console.log(parent.childNodes, 'childNodes');


// nodeType: 1 --> Element (html tags)
// nodeType: 3 --> Text
// nodeType: 8 --> Comment

console.log('----------next\prev ---------------')
// console.dir(parent.previousElementSibling, '----> previousElementSibling');
// console.dir(parent.nextElementSibling, '----> nextElementSibling');


// console.dir(parent.previousSibling, '----> previousSibling');
// console.dir(parent.nextSibling, '----> nextElementSibling');


// setTimeout(() => {
//   parent.nextElementSibling.nextElementSibling.style.opacity = 0;
//   parent.previousElementSibling.style.color = 'blue';

//   parent.parentElement.style.backgroundColor = 'red';
// }, 5000);


// console.log(parent.parentNode, 'perentNode');
// console.log(parent.parentElement, 'parentElement');


// console.log(parent)
console.log('----------next\prev ---------------');


// --------------- Event ------------------


function click() {
  //cosnt data = ajaxRequest()
  // renderPayload(data)
  // playAnimation(data)
}


const button = document.querySelector('.click-button');

// console.dir(button, 'button');

// button.onclick = function() {
//   console.log('onclick');
//   this.nextElementSibling.className += ' box';
//   document.querySelector('h2').className = 'box';
// };

const box = document.querySelector('.box');

// box.onmousedown = function() {
//   console.log('onmousedown');
// };

// box.onmouseup = function() {
//   console.log('onmouseup');
// };

// box.onclick = function() {
//   console.log('onclick');
// };


// box.ondblclick = function() {
//   console.log('ondblclick');
// };

// box.oncontextmenu = function() {
//   console.log('oncontextmenu');
// }

// box.onmousemove = function() {
//   console.log('omousemove');
// };

// box.onmouseenter = function() {
//   this.classList.add('target');
//   console.log('onmouseenter');
// };

// box.onmouseleave = function() {
//   this.classList.remove('target');
//   console.log('onmouseleave');
// };



// ----- EVENT + coords ----

function eventHandler({ clientX, clientY, pageX, pageY, offsetX, offsetY }) { // event = {}
  console.log('call eventHandler', event.type);
  console.log(event, 'event');
  this.innerHTML = `
    clientX = ${clientX}, clientY = ${clientY} <br />
    pageX = ${pageX}, pageY = ${pageY} <br />
    offsetX = ${offsetX}, offsetY = ${offsetY} <br />
  `;
}

box.onclick = eventHandler;

// box.onmousemove = eventHandler;

// button.onclick()



