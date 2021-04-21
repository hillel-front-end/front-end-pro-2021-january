/*

-----------
refactoring sendAjax + promise
promiseAll

fetch
async - await
-----------

*/


new Promise((res, rej) => {}).then(() => {}, () => {});


//

function ajax({ method, url, body = {} }) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
  
        xhr.onload = function() {
            resolve(xhr.responseText);
        };
        

        xhr.onerror = function() {
            console.log('12312312312')
            reject();
        };

        xhr.open(method, url);

        method.toLowerCase() === 'post' ?
            xhr.send(body)
            :
            xhr.send();
    });
}

// ajax({
//     url: 'http://localhost:3005/candidates',
//     method: 'get'
// })
// .then((response) => JSON.parse(response)) // Promise.resoved(JSON.parse(response))

// .then((users) => {
//     if (users.length > 0) {
//         const userName = users[0].name;

//         return ajax({
//             url: 'http://localhost:3005/google-auth?name=' + userName,
//             method: 'get'
//         })
//     } else {
//         throw Error('Юзеры не найдены');
//     }
    
// })

// .then((data) => {
//     // const userName = users[0].name;

//     return ajax({
//         url: 'http://localhost:3005/google-auth',
//         method: 'get'
//     })
// })

// .then(response => {
//     console.log(response, 'response');
//     console.log('todo with response');
// }, () => {
//     console.log('reject');
// })

// .catch((error) => {
//     console.dir(error.message, 'error');
    
//     alert(error.message);
// });


  
  // ---------------- fetch ---------------


//   fetch('http://localhost:3005/candidates')

//   .then(response => response.json())

//   .then((data) => {
//     console.log(data, 'data');
//     //filter, sorrt,
//   })

//   .then(() => {
//       return fetch()
//   })


// fetch('some/url', {
//     method: 'post',
//     body: {}
// })

// .then()

// ----------------  fetch || axios 
// ---------------- async - await ------------


console.log(1);

async function fetchData() {

   const config = await fetch('http://localhost:3005/candidates'); // Promise.resolve({})

   const users = await config.json();// Promise.resoved(response)

   console.log(users, '111111')


   const config2 = await fetch('http://localhost:3005/google-auth')
   const response = await config2.json();

   console.log(response, '22222');


   const data = await ajax({
       url: 'http://localhost:3005/auth',
       method: 'get'
   });

   console.log(data, '3333');
   


    // .then((res) => res.json())
    // .then(data => console.log(data, 'data')); //Promise.resolve(response)

    return '11111';
}

console.log(fetchData());


console.log(2);

function fetch2() {
    return new Promise((res) => {
        res([])
    });
}

console.log(fetch2(), 'fetch -- 2');

fetch2().then(data => console.log(data))