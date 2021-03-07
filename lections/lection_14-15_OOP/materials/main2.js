function HTMLElement(tagName) {}

    
HTMLElement.prototype.render = function() {
    console.log('rendering HTMLElement', this.tagName);
};

HTMLElement.prototype.swim = function() {
    console.log('swimming');
}


function HTMLAnchorElement(href) {
    this.href = href;
}

HTMLAnchorElement.prototype = Object.create(HTMLElement.prototype);
/*
{     
    constructor: HTMLAnchorElement
    __proto__: HTMLElement
}
*/
HTMLAnchorElement.prototype.constructor = HTMLAnchorElement;

HTMLAnchorElement.prototype.redirect = function() {
    console.log('redirect to --> ', this.href);
};

HTMLAnchorElement.prototype.animationRedirect = function() {
    console.log('animation redirect to --> ', this.href);
};


// HTMLAnchorElement.prototype.render = function() {
//     console.log('my anchor render');
// };

const a1 = new HTMLAnchorElement('https://google.com');
const a2 = new HTMLAnchorElement('https://facebook.com');

console.log(a1, a2);

a1.render();


function Slider(pictures) {
    let count = pictures.length;

    const currentPicture = 0;

    this.nextPicture = function(){
        if (count < currentPicture) {
            currentPicture++;   
        }
    };

    this.previousPicture = function(){
        if (currentPicture != 0) {
            currentPicture--;
        }
    }
}


const sliderAnimal = new Slider(['animal1.jpg', 'animal2.jpg']);

console.log(sliderAnimal, 'sliderAnimal');

sliderAnimal.currentPicture = 12;




