// AJAX
setTimeout(() => {
    console.log('timeout - 1');
}, 3000);

setTimeout(() => {
    console.log('timeout - 2');
}, 0);



console.log('synnc 1');

let sum = 0;


// sendAjax();

calculateSalary();


for(let i = 0; i < 5000; i++) {
    sum += i;
}

console.log(sum, 'synnc 2');


console.log('synnc 4')


function calculateSalary() {
    for(let i = 0; i < 5000; i++) {
        sum += i;
    }
}