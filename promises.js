// import fetch from "node-fetch";

// //Основы
// let promise1 = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve("done"), 1000);
// });

// // let promise2 = new Promise(function(resolve, reject) {
// //   setTimeout(() => reject(new Error("Whoops!")), 1000);
// // });

// // let promise3 = new Promise(function(resolve, reject) {
// //   setTimeout(() => reject(new Error("Whoops!")), 1000);
// // });


// promise1.then(
//     result => console.log(result),
//     exception => console.log(exception)
// )

// // promise2.then(
// //     result => console.log(result),
// //     exception => console.log(exception)
// // )

// // promise3.catch(e => console.log(e)).finally(() => console.log("moloko"));;

// //Пробрасывание ошибок
// new Promise((resolve, reject) => {

//   throw new Error("Ошибка!");

// }).catch(function(error) {

//  console.log("Ошибка обработана, продолжить работу");

// }).then(() => console.log("Управление перейдёт в следующий then"));

// // Promise.All
// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://api.github.com/users/jeresig'
// ];

// // Преобразуем каждый URL в промис, возвращённый fetch
// let requests = urls.map(url => fetch(url));

// // Promise.all будет ожидать выполнения всех промисов
// Promise.all(requests)
//   .then(responses => responses.forEach(
//     response => console.log(`${response.url}: ${response.status}`)
//   ));


// // Promise.allSettled будет ожидать выполнения всех промисов
// let urls1 = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://no-such-url'
// ];
// Promise.allSettled(urls1.map(url => fetch(url)))
//   .then(results => { // (*)
//     results.forEach((result, num) => {
//       if (result.status == "fulfilled") {
//         console.log(`${urls1[num]}: ${result.value.status}`);
//       }
//       if (result.status == "rejected") {
//         console.log(`${urls1[num]}: ${result.reason}`);
//       }
//     });
//   });
// // Promise.race будет ожидать выполнения всех промисов

//   Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then(console.log); 

//async await
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000)
  });

  let result = await promise; // будет ждать, пока промис не выполнится (*)

  console.log(result); // "готово!"
}

f();