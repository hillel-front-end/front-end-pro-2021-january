# Изучить материал
* https://learn.javascript.ru/call-apply
* https://learn.javascript.ru/bind
* https://learn.javascript.ru/closure

# Практика

* Cоздать глобальную ф-ю greeting которая каждые 5000ms смотри в тег input с id='name' 
 (получить при помощи document.querySelector('input[id="name"]')) берет значение по ключу value и выводит сообщение преведствия из глобальной переменной greetingMessage.

 alrt(greetingMessage + input.value)

 <input type="text" id="name">


* Написать методы push, join, reverse самостоятельно.
  Их функциональность должна соответствовать стандартным методам массивов.

    list.myPush();
    list.myJoin();
    list.myReverse();

Например:
var list = [1, 2, 3];

function myPush() {
    ...
}

list.myPush = myPush; 

list.myPush();