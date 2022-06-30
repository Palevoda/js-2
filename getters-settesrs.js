var user = {
  firstName: "Вася",
  surname: "Петров",

  get fullName() {
    return this.firstName + ' ' + this.surname;
  },

  set fullName(value) {
    var split = value.split(' ');
    this.firstName = split[0];
    this.surname = split[1];
  }
};

console.log( user.fullName ); 

user.fullName = "Петя Иванов";
console.log( user.firstName ); 
console.log( user.surname ); 