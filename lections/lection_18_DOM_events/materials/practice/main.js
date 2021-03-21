const blocks = document.querySelectorAll('.block');

// block.classList.add('block'); 

// document.onmousemove = ({ clientX, clientY }) => {
//     // block.style.left = `${clientX}px`;
//     // block.style.top = `${clientY}px`;
// };


function onDragAndDrop(block) {
    const coords = {
        shiftX: 0,
        shiftY: 0,
    };
    
    function save(x, y) {
        this.shiftX = x;
        this.shiftY = y;
    }
    
    const onDrag = ({ offsetX, offsetY }) => {
        save.call(coords, offsetX, offsetY);
        document.onmousemove = onMove;
    };
    
    
    const onDrop = () => {
        document.onmousemove = null;
        console.log('drop');
    };
    
    const onMove = ({ clientX, clientY }) => {
        const { shiftX, shiftY } = coords;
    
        block.style.left = `${clientX - shiftX}px`;
        block.style.top = `${clientY - shiftY}px`;
    };
    
    
    block.onmousedown = onDrag;
    block.onmouseup = onDrop;
    
}


for(let i = 0; i < blocks.length; i++) {
    onDragAndDrop(blocks[i]);
}