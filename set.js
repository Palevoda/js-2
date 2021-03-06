// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.

let set = new Set();

let john = { name: "John" };
let pete = { name: true };
let mary = { name: "Mary" };


set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set.has(mary));

set.delete( mary)

console.log(set.size);

for (let user of set) {
  console.log(user.name);
}

set.clear()

console.log(set.size);
