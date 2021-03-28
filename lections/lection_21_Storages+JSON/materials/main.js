console.log("Lection_21");

window.onload = function () {

//document

//localStorege



// localStorage.foo = 'Valera';

console.log(localStorage, 'localStorege');

// document.body.innerHTML = localStorage.foo2;


// setItem, getItem

// const input = document.querySelector('input[type=text]');

// input.value = localStorage[input.name];// getItem(key)

// input.oninput = function() {
//   const key = this.name || 'unnamed-key';
//   localStorage.setItem(key, this.value); //setItem(key, value)
// };

localStorage.setItem('value', 123123123);

console.log(typeof 123123123);
console.log(typeof localStorage.getItem('value'));


const goods = {
  id: 252457441,
  parent_id: 132896,
  section_href: "https://rozetka.com.ua/jogway_tj532c/p252457441/",
  viewed: 1616917090258,
};

const goodID = `goods_${252457441}`;

// localStorage.setItem(`goods_${goods.id}`, goods);

// console.log(localStorage.getItem(goodID))

// ---------

// --------- Serialase JSON -----------


// JSON.parse(), JSON.stringify() 

// const goodsJSON = JSON.stringify(goods);


// console.log(goodsJSON, 'goodsJSON');

// localStorage.setItem(goodID, goodsJSON);


// JSON поддерживает следующие типы данных:
//     Объекты { ... }
//     Массивы [ ... ]
//     Примитивы:
//     строки,
//     числа,
//     логические значения true/false,
//     null.


// {
//   "name": "Valera",
//   "children": []
// }

let personFirst = {
  name: 'Valera',

}

let personSecond = {
  name: 'Valera',
}

// personFirst.friend = personSecond; --> error
// personSecond.friend = personFirst; --> error

// console.log(JSON.stringify(personFirst))

  console.log(localStorage.getItem(goodID))

  let jsonData = localStorage.getItem(goodID);

  console.log(jsonData, 'jsonData');

  let parsedData = JSON.parse(jsonData);

  console.log(parsedData, 'parsedData');

}


//-------------------------------


