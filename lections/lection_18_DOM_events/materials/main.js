/*
   1. classList , addEventListener
   2. innerHTML, innerText
   2. attrs: getAttribute, setAttribute, removeAttribute,
    dataset,
   3. behavior -- example
*/


const block = document.querySelector('.box');


// setTimeout(() => {
//    // block.className += ' box-2';
//    // block.className += ' box-3';

//    block.classList.add('box-2')

//    setTimeout(() => {
//       block.classList.remove('box-2')
//    }, 2000);
// }, 3000);


// setInterval(() => {
//    block.classList.toggle('box-2')

// }, 2000);


// block.onclick = function() {
//    block.classList.toggle('box-2');
//    console.log(block.classList.contains('box-2'));
// }

function handlerFirst(event) {
   console.log('handlerFirst', this, event);
}

function handlerSecond(event) {
   console.log('handlerSecond', this, event);
}


// block.onclick = handlerFirst;
// block.onclick = handlerSecond;

//elem.addEventListener('event', handler)

// block.addEventListener('click', handlerFirst);
// block.addEventListener('click', handlerSecond);


 // ----------- innerHTML, innerText --------




setTimeout(() => {
   // block.innerHTML = 'Hello world from innerHTML <br / > ';
   // block.innerText += ' ' +  '<br /> Hello world from innerText';
}, 2000);


// ---- getAttribute, setAttribute, removeAttribute, dataset------


// console.log(document.querySelector('span').foo, 'span href');
// console.log(document.querySelector('a').foo, 'a href');


const span = document.querySelector('span');

// span.foo --> undefined

// console.log(span.getAttribute('foo'), 'span.getAttribute(foo);'); 


// span.foo  = 'pety';

// span.setAttribute('foo', 'Pety');\


// ---------- data-* -----------

// console.log(span.dataset, 'dataset');
// console.log(span.dataset.name, 'dataset');

//data == dataset


/// ----- practice behavior ---




const buttons = document.querySelectorAll('[data-action]');


const actions = { // actions['open']
   create() {
      console.log('create document')
   },
   remove() {
      console.log('remove document')
   },
   update() {
      console.log('update document')
   },
   open() {
      console.log('open document')
   },
   close() {
      console.log('close document')
   }
};



// for(let i = 0; i < buttons.length; i++) {

//    // ----- example - 1 (very bad practice - 1)

//    // const action = buttons[i].dataset.action;

//    // if (action === 'open') {
//    //    buttons[i].addEventListener('click', open);
//    // } else if (action === 'close') {
//    //    buttons[i].addEventListener('click', close);
//    // } else if (action == 'update') {
//    //    buttons[i].addEventListener('click', update);
//    // }

//    // ---- example - 2 ( bad practice - 1)


//    buttons[i].addEventListener('click', click);


// }


// --- example - 3 (best) delegate + behavior


function click(event) {
   const button = event.target;
   const action = button.dataset.action;

   actions[action] && actions[action]();
}


const buttonGroup = document.querySelector('.buttons-group');

buttonGroup.addEventListener('click', click);
console.log(buttonGroup, 'buttonGroup');