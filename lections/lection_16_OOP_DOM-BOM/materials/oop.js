// index = 0; very bad

function Slider(pictures) {
    const _size = pictures.length; // private size
    let _index = 0; // private

    this.getterIndex = function() {
        return _index;
    };

    
    this.setterIndex = function(value) {

        if (isNaN(value)) return;

        if (value >= 0 && value <= _size) {
            _index = value;
        }
    };


    // this.next = function() {
    //     console.log(pictures[this.getterIndex()])
    //     this.setterIndex(++_index)
    // };
    

    // this.size = size;// public
    // this.index = index;// public

}

Slider.prototype.next = function() {
    let index = this.getterIndex();
    console.log(index, 'index');
    this.setterIndex(++index);
};

// Slider.prototype.previous = function() {
//     index--;
// };



const slider = new Slider(
    [
        'picture1.jpg',
        'picture2.jpg',
        'picture3.jpg'
    ]
);

const slider2 = new Slider(
    [
        'picture1.jpg',
        'picture2.jpg',
        'picture3.jpg'
    ]
);

// console.log(slider.getterIndex(), 'slider');
// console.log(slider2.getterIndex(), 'slider2');

// const a = slider2.getterIndex();

// slider.index = 10; bad  --> index is private

slider.next();
slider.next();
slider.next();

const i = getAnotherCode(slider.getterIndex());

slider2.setterIndex(i);

console.log(slider.getterIndex());

console.log(slider.setterIndex(5))
// slider.index = 12;


function getAnotherCode() {
    return 100;
}

