function sayHiBye(firstName, lastName) {

  function getFullName() {
    return firstName + " " + lastName;
  }

  console.log( "Hello, " + getFullName() );
  console.log( "Bye, " + getFullName() );

}

sayHiBye("Aliaksandr", "Palevoda");

//Интересный момент с V8 (переменная попала под оптимизацию)
// let value = "Сюрприз!";

// function f() {
//   let value = "ближайшее значение";

//   function g() {
//     debugger; // в консоли: напишите alert(value); Сюрприз!
//   }

//   return g;
// }

// let g = f();
// console.log(g());