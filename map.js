//Инициализация

let a = new Object();
a.name = "moloko";

let map = new Map();

map.set("1", "str1");  
map.set(1, "num1"); 
map.set(true, "bool1"); 
map.set(a, "Derevo");

//Просмотр значений
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
console.log(map.get(1)); 

console.log(map.size);

console.log(map.has(1));

console.log(map.delete(1));

console.log(map.size);
