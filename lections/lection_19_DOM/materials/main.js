/*
   1.
   2. createElement
   3. append
   4. Fragment
   4. Навесить событие на дин. элем.
   5. cycles event
   6. insertAdjacentHTML // HW
   7. replaceWith(node) // hw
*/


window.onload = function() {
    // ----------------------- move nodes ----------------------



    const navigation = document.querySelector('.navigation');
    const aside = document.querySelector('.aside');

    // const elenets = document.querySelectorAll('.foo, .container, #element')
    // setTimeout(() => {

    //     // aside.append(navigation);
    //     // aside.prepend(navigation);
    //     // aside.after(navigation);
    //     // aside.before(navigation);
        
    // }, 5000);

    
    // --------------- remove node --------------------

    // setTimeout(() => {
    //     navigation.hidden = true;
    // }, 2000);


    // ---------------- create element --------------

    const element = document.createElement('div');

    // bad append
    // setTimeout(() => {
    //     document.body.append(element);
    // }, 2000);

    // console.log(navigation, 'navigation');
    // console.log(element, 'element');

    // element.classList.add('box');
    // element.style.color = 'red';

    // element.innerHTML = 'New Node appended'


    // // good append
    // setTimeout(() => {
    //     document.body.append(element);
    // }, 2000);
};




