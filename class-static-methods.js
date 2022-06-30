class User {

  name;

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }

  static staticMethod() {
    return 'Вызван статический метод';
  }

}

// Использование:
let user = new User("Иван");
user.sayHi();

console.log(User.staticMethod());

class Admin extends User {
  static staticMethod() {
    return super.staticMethod() + " Admin";
  }
}

console.log(Admin.staticMethod());
