﻿# Изучить материал

* https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
* https://myrusakov.ru/javascript-closures.html
* https://learn.javascript.ru/closures

#Практика

1)Задан обьект с любым количеством свойств. Одно из свойств является функция `renderObject()`, которая описана в window.
При вызове метода `obj.renderObject()` -> выводит в document всё содержимое объекта, кроме самого метода `renderObject`


        obj => { x:10, y: 20 }
        obj.renderObject() -> x:10, y: 20

2) Реализовать объект с методами m1(), m2(), m3(). Должна быть возможность выполнять подобный код:

        obj.m1().m2().m3();
        obj.m2().m1().m3();
        obj.m2().m1().m3().m1().m1();
        ...

3) в обьекте `data` существует метод `addRecord`, который аргументами получает любой набор объектов. Метод `addRecord` добавляет все свойства переданных объектов в `data`.


        data = {
            addRecord: function(){},
            p: 600,
            str: 'hello',
            y: -50
        }
        data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
        data.x // 50
        data.y // 20
        data.z // 30
        data.p // 600
        data.str // 'hello'

4) В метод `addRecord` добавляется последний необязательный аргумент `flag`, который указывает приоритет присвоения свойств с одинаковым названием.
Если `true` - берется свойство из первоначального объекта `this`, если `false` - берется свойство из `arguments`.  По умолчанию `flag = false;`

