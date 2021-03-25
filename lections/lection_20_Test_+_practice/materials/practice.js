const data = { 
    name: 'menu', 
    type: 'row', 
    items: [ 
        { title: 'title 1', handler: 'actionAdd' }, 
        { title: 'title 2', handler: 'actionSaveAs' }, 
        { title: 'title 3', handler: 'actionExit' },
        { title: 'title 5', handler: 'actionUpdate' }  ] 
};

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
 }

//  actions[ 'ActionAdd']
// 1)Создать вертикальное или горизонтальное (в зависимости от свойства type) меню, в котором будут элементы из свойства items.

// hander - хранит название функции, которая выполнится при нажатии на пункт меню.


