window.onload = function() {


function renderUsers(users) {//users: Array
    const usersContainer = document.createElement('div');
    usersContainer.classList.add('users')

    users.forEach((user, index) => {
        let item = document.createElement('div');
        item.classList.add('user');
        item.innerHTML = `
        <section class="user__name">${user.firstname}</section>
        <section class="user__age">${user.age}</section>
        `
        usersContainer.append(item);
    });

    document.body.append(usersContainer)
}

const button = document.querySelector('.button');

button.addEventListener('click', function() {
    const config = {
        method: 'GET',
        url: 'http://localhost:3003/candidates',
        success: response => {
            if (response && typeof response === 'string') {
                const data = JSON.parse(response);

                renderUsers(data);

            }
        }
    };

    sendAjax(config);
})


function sendAjax({ method, url, success }) {
    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
        success(xhr.responseText);
    };

    xhr.onerror = function() {
        console.log('error');
    };

    xhr.open(method, url);// open(method, url) -> method ->> get, post, url -> http://localhost:300

    xhr.send();
}



// const users = JSON.parse(xhr.responseText);
// renderUsers(users || []);
};