var animal = {
  eats: true,
  run: true
};
var rabbit = {
  eats: false
};

rabbit.__proto__ = animal;

console.log( rabbit.eats, ' ', rabbit.run ); 

console.log('eats ', rabbit.hasOwnProperty('eats'));
console.log('run ',rabbit.hasOwnProperty('run'));


var data = Object.create(null);
data.text = "Привет";

console.log(data.text);
console.log(data.toString);