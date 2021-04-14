/*
    1)Async,
    2)Promise (catch) (callback hell)
    3)PromiseAll
    4)Practice
    5)async-await, generators?
*/

// ------------------- async -------------------

// setTimeout, Ajax, Event(click, mousemove)

// console.log(1);

// console.log(2);

// console.log(3);

setTimeout(() => {

}, 5000);

foo();


function foo() {
    console.log(3);
}


function sendAjax() {
    let sum = 0;

    for(let i = 0; i < 1e8; i++) {
        sum =+ i;
    }

    console.log(sum, 'sum');
}


window.onload = function() {
    document.querySelector('button').addEventListener('click', function() {
        sendAjax();
    });
}




// ------------ callback hell -------------


// function c1(callback) {
//     callback();
// }

// function c2(callback) {
//     callback();
// }

// function c3(callback) {
//     callback();
// }


// c1(function() {
//     c2(function() {
//         c3();
//     });
// });

let selfId = null;

// ajax({
//     method: 'get',
//     url: 'http://localhost:3005/login',
//     success: function(response) {
//         const parsedData = JSON.parse(response);

//         console.log(parsedData, 'id');

//         selfId = parsedData.id;
//     }
// });

// very bad
// ajax({
//     method: 'POST',
//     url: `http://localhost:3000/get-friends-by-id?id=${selfId}`,
//     success: function(response) {

//     },
//     body: {

//     }
// })

// ---- very bad --- 
// setTimeout(() => {
    // ajax({
    //     method: 'POST',
    //     url: `http://localhost:3000/get-friends-by-id?id=${selfId}`,
    //     success: function(response) {
    
    //     },
    //     body: {
    
    //     }
//     })
// }, 3000)


/// ---- bad -- (callback hell)

// ajax({
//     method: 'get',
//     url: 'http://localhost:3005/login',
//     success: function(response) {
//         const parsedData = JSON.parse(response);

//         ajax({
//             method: 'POST',
//             url: `http://localhost:3000/get-friends-by-id?id=${parsedData.id}`,
//             success: function(response) {
                
//                 ajax({
//                     method: 'POST',
//                     url: `http://localhost:3000/get-friends-by-id?id=${parsedData.id}`,
//                     success: function(response) {
//                         ajax({
//                             method: 'POST',
//                             url: `http://localhost:3000/google`,
//                             success: function(response) {
//                                 if (response.foo != 'valera') {
//                                     ajax({
//                                         method: 'POST',
//                                         url: `http://localhost:3000/get-friends-by-id?id=${parsedData.id}`,
//                                         success: function(response) {
                                    
//                                         }
//                                     });
//                                 } else {
//                                     ajax({
//                                         method: 'POST',
//                                         url: `http://localhost:3000/get-friend-not-valera?id=${parsedData.id}`,
//                                         success: function(response) {
                                    
//                                         }
//                                     });
//                                 }
//                             }
//                         });

//                     }
//                 });
//             }
//         });
//     }
// });


// ----------- Promise --------------

function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

console.log('start');

const promise = new Promise((resolve, reject) => {
    console.log(0);
    setTimeout(() => {
        const id = random(1, 100);
        console.log('call timeout', id);

        if (id % 2 === 0) {
            resolve(['a', 'b']);
        } else {
            reject({ status: 500 });
        }

        // resolve();

    }, random(1000, 2000));

});


console.log(promise, 'promise'); // state: pending, fulfilled, rejected


promise

.then((data) => {
    console.log('then 1 --> resolve', data);
    console.log(promise, 'promise');
    data.push('Valera');

    return data;
},
(error) => {
    console.log('then 1 --> reject', error);

    return Promise.reject();

})

.then((dataThen2) => {
    dataThen2.push('Aaaaaaaa')
    console.log('then 2 --> resolve', dataThen2);

    return dataThen2;
})

.then((dataThen3) => {
    console.log('then 3 --> resolve', dataThen3);
    console.log('sending request another source');
}, 
() => {
    console.log('call then - 3 --> reject');
});


// console.log(promise2, 'promise2');

console.log('end');

// next then: call reject callback 

// throw Error('error');
// return new Promise((resolve, reject) =>  reject())
// return Promise.reject()