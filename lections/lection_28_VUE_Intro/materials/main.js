console.log("Lection 28 __ VUE INTRO __");

/*
1. Instance
2. {{}} Interpolations (https://ru.vuejs.org/v2/guide/syntax.html)
3. Expression in nterpolations({{?:}})
3. directives: 
    * v-html="'String with html value'"
    * v-bind:disabled="boolean"
    * v-bind:href="url"
    * v-model
    * v-if="boolean" - v-else-if="boolean" - v-else
    * v-show="boolean"
    * v-for - loop (Work like  for-in), (value, name, index)

4. styles directives: ( HW )
   * v-bind:class="{ 'class-name as string': Boolean, 'another-class-name': Boolean variable, .., }"
   * v-bind:class="['activeClass', errorClassAsVar]"
   * v-bind:style="{ cssPropName: activeColorAsVar, fontSize: n + 'px', matgin: '10px' }"
5. v-on:click,mousenove .. (@click)

6. $set(vm.items, indexOfItem, newValue) // next lesson
*/
// console.log(Vue, 'vue');

// ----------------------------
// JQUERY

// let a = 12;

// const b = document.querySelector(".foo");
// b.append(a);

// a = 33;

// b.append(a);

/// --------------------
let a = 12;
a = 22;

// VUE

// SPA

console.log(Vue, "vue");

const model = {
  hello: "Valera",
  a: 1,
  bool: true,
  info: '<span>aaa</span>',
  link: 'https://google.com',
  isDisabled: true,
  text: '',
  products: [
    'cola',
    'sprite',
    'pepsi',
    'soda'
  ]
};

const methods = {
  toDo() {
    console.log("todo");

    return 'Hello';
  },

  onClick(product, index) {
    console.log(product, 'product');
    console.log(index, 'index');
    console.log(this.products, 'this');
    

    // console.log(this.products[index], 'this.products[index]');
    // this.products.splice(index, 1);

    // this.products[index] = this.text;
    this.$set(this.products, index, this.text); // where, key, value
  }
};

const config = {
  el: "#app",
  data: model,
  methods: methods
};

const vue = new Vue(config);
