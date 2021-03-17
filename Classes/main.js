//Ex6.1 
// class Person{
//     constructor(){
//         this.name = 'Ivan';
//         this.surname = 'Ivanov';
//     }
// }

// const worker = new Person();

// console.log(worker.name);
// console.log(worker.surname);

//Ex6.2
// class Person {
//     constructor(name, surname){
//         this._name = name;
//         this._surname = surname;
//     }

//     getName(){
//         return this._name;
//     }

//     getSurname(){
//         return this._surname;
//     }

//     setSurname(surname){
//         this._surname = surname;
//     }
// }

// const worker = new Person('Ivan', 'Ivanov');

// console.log(worker.getName());
// console.log(worker.getSurname());

// worker.setSurname('Petrov'); 

// console.log(worker.setSurname());
// console.log(worker.getSurname());

//Ex6.4
// class Validator {
  
//     isEmail(email) {
//       let pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
//           return pattern.test(email);
//     }
  
//     isDomain(domain) {
//       let pattern = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/;
//           return pattern.test(domain);
//     }
    
//     isDate(date) {
//       let pattern = /(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4}|\d{2})/;
//           return pattern.test(date);
//     }
  
//     isPhone(phone) {
//       let pattern = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
//           return pattern.test(phone);
//     }
  
//   }
  
//   var validator = new Validator();
  
//   console.log(validator.isEmail('phphtml@mail.ru'));
//   console.log(validator.isDomain('businessbooks.com'));
//   console.log(validator.isDate('12.05.2020'));
//   console.log(validator.isPhone('1-415-444-1122'));
  
//Ex6.5
class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return this.name + ' ' + this.surname;
    }

}

class Student extends User {
    constructor(name, surname, year) {
        super();
        this.name = name;
        this.surname = surname;
        this.year = year;
    }

    getCourse() {
        return currentYear - this.year;
    }
}

var student = new Student('Ivan', 'Ivanov', 2018);
var now = new Date();
var currentYear = now.getFullYear();

console.log(student.name);
console.log(student.surname);
console.log(student.getFullName());
console.log(student.year);
console.log(student.getCourse());
