// const actions = {
//  	actionAdd() {
//          console.log('add..')
//      },
//  	actionSaveAs() {
//         console.log('save..')
//      },
//  	actionExit() { 
//          console.log('ActionExit')
//     },
//      actionUpdate(){
//         console.log('update..')
//      }
//  };

// const data = { 
//     name: 'menu', 
//     type: 'row', 
//     items: [ 
//         { title: 'title 1', handler: 'actionAdd' }, 
//         { title: 'title 2', handler: 'actionSaveAs' }, 
//         { title: 'title 3', handler: 'actionExit' },
//         { title: 'title 5', handler: 'actionUpdate' } , 

//     ] 
// };
// //  actions[ 'ActionAdd']
// 1)Создать вертикальное или горизонтальное (в зависимости от свойства type) меню, в котором будут элементы из свойства items.

// hander - хранит название функции, которая выполнится при нажатии на пункт меню.

// function makeMenu(model) {
//     const items = model.items;
//     const ul = document.createElement('ul');

//     ul.classList.add(model.type, 'navigation');

//     for(let i = 0; i < items.length; i++) {
//         const li = document.createElement('li');
//         const { handler, title} = items[i];
//         li.addEventListener('click', actions[handler]);

//         // li.dataset.operation = handler;

//         li.classList.add('navigation__item');
//         li.innerHTML = `<span class="navigation__button">${title}</span>`

//         ul.append(li);
//     }

//     document.body.append(ul);

// }



// makeMenu(data);

const actions = {
    actionAdd() {
        console.log('add..')
    },
    actionSaveAs() {
       console.log('save..')
    },
    actionExit() { 
        console.log('ActionExit')
   },
    actionUpdate(){
       console.log('update..')
    }
};

const data = { 
   name: 'menu', 
   type: 'row', 
   items: [ 
       { title: 'title 1', handler: 'actionAdd' }, 
       { title: 'title 2', handler: 'actionSaveAs' }, 
       { title: 'title 3', handler: 'actionExit' },
       { title: 'title 5', handler: 'actionUpdate' } , 

   ] 
};


function MenuComponent(model = {}, actions = {}) {
    this.model = model;
    this.actions = actions;
}


MenuComponent.prototype.makeContainer = function() {
    const ul = document.createElement('ul');
    ul.classList.add(this.model.type, 'navigation');

    return ul;
};


MenuComponent.prototype.makeButtons = function() {
    const { items } = this.model;
    const fragment = document.createDocumentFragment();

    for(let i = 0; i < items.length; i++) {
        const li = document.createElement('li');
        const { handler, title} = items[i];

        li.addEventListener('click', actions[handler]);
        li.classList.add('navigation__item', 'navigation__button');
        li.innerHTML = title;

        fragment.append(li);
    }

    return fragment;
};


MenuComponent.prototype.makeMenu = function() {
    const container = this.makeContainer();
    const menuButtons = this.makeButtons();

    container.append(menuButtons);

    document.body.append(container);
}


const menu = new MenuComponent(data, actions);

console.log(menu, 'menu');

menu.makeMenu();
