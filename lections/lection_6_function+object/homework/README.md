﻿
﻿# Изучить материал

* https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects
* https://learn.javascript.ru/object
* https://learn.javascript.ru/object-for-in
* https://learn.javascript.ru/object-reference
* https://drive.google.com/open?id=0B121aJ52ADuLNzhLM09ZeXR2aUk (страницы 37-39, 45-47, 78-85)

# Практика

1) Сделайте функцию inArray('hello', ['svnj', 'hello', 'cvpoq']), которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать
текст элемента, а вторым - массив, в котором делается поиск. Функция должна
возвращать true или false.

2) Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 обьекта и возвращает новый, который состоит из свойство обоих обьектов (склеить). Если свойство повторяется, то взять значение второго обьекта

3) В задачу п.2  добавить 3ий аргумента flag, который является boolean. Если флаг true, тогда при наличии свойства в обоих объектов в результат пойдет значение из первого обьекта, false - из второго.
```
assignObjects({...}, {...}, false);
```

4) В задачу п.3, сделать параметр flag не обязательный, если параметр не передать - устанавливать значение false.

5) Адаптировать функцию assignObjects() под неопределенное количество объектов. assignObjects(obj1, obj2, ....., objn);

