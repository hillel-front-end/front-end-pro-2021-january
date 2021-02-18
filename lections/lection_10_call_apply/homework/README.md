# Изучить материал
* https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290 (начать с раздела - "Методы Apply и Call" можно и bind изучить, по желанию)



# Практика

1) Пусть есть объект `obj = {anonim: {say: 'Hello anonim'}, user: {say: 'Hello user'},  admin: {say: 'Hello admin'}}`, и ф-я: `function greeting(role) {}`


obj.greeting('admin'); // 'Hello admin'
obj.greeting('user'); // 'Hello user'


* при помощи метода call вызвать ф-ю greeting как метод объекта obj без записи в него, с одним из 3ьох значений "anonim, admin, user". Получить в ответ сообщение приветствия.

2) Пусть дан следующий код:


var user = {name: 'Алексей'}

function func(surname, patronymic) {
	alert('привет' + ' ' + this.name + ', ' + patronymic + ' ' + surname);
}

func(); //тут должно вывести 'привет, Алексей Алексеевич Петров'

* при помощи apply вывести сообщение 'привет, Алексей Алексеевич Петров'
'Алексеевич', 'Петров' должно быть параметрами ф-ии.

3) Cоздать конвертер-функцию которая получает на вход массив вида: 

mass = [
    [1,2,3, [3.1] ], 4, [ 5, 6, [7, 8, [9, 10, 15]]]
]; 

а на выходе получим переобразованый массив: [1 ,2, 3, 3.1, 4, 5, 6, 7, 8, 9, 10, 15]