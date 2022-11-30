// Задайте правильні ts типи для класичних js;
var age;
age = 50;
var namee;
namee = 'Max';
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback = function (a) {
  return number;
};
callback = function (a) {
  return 100 + a;
};

const value = callback(99);
console.log(value);
// Задайте тип для змінної, в яку можна зберегти будь-яке значення.
var enything;
enything = -20;
enything = 'Text';
enything = {};
// Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
var some;
some = 'Text';
var str;
if (typeof some === 'string') str = some;
// Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
var person;
person = ['Max', 21];
// Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
var Load;
(function (Load) {
  Load[(Load['LOADING'] = 0)] = 'LOADING';
  Load[(Load['READY'] = 1)] = 'READY';
})(Load || (Load = {}));
var page = {
  load: Load.LOADING,
};
console.log(page);
if (page.load === Load.LOADING) {
  console.log('Сторінка завантажується');
}
page.load = Load.READY;
console.log(page);
if (page.load === Load.READY) {
  console.log('Сторінка завантажена');
}

// Зробіть змінну, яка може приймати або рядок, або число.
var union;
// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
var literal;
// Вкажіть типи для наступних функцій
function showMessage(message) {
  console.log(message);
}
function calc(num1, num2) {
  return num1 + num2;
}
function customError() {
  throw new Error('Error');
}
var page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  },
};
var page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};
