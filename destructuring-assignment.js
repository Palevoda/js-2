//Array

let arr = ["Ilya", "Kantor"]

let [firstName, surname] = arr;

console.log(firstName);
console.log(surname);

// Skipping
let [a1, , b1] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( b1 );

//Objects
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

console.log(title);
console.log(width);
console.log(height);

// With set 
let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);

