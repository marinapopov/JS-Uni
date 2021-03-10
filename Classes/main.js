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
class Person {
    constructor(name, surname){
        this._name = name;
        this._surname = surname;
    }

    getName(){
        return this._name;
    }

    getSurname(){
        return this._surname;
    }

    setSurname(surname){
        this._surname = surname;
    }
}

const worker = new Person('Ivan', 'Ivanov');

console.log(worker.getName());
console.log(worker.getSurname());

worker.setSurname('Petrov'); 

console.log(worker.setSurname());
console.log(worker.getSurname());

//Ex6.4
// class Validator {
//     static isDomain() {

//     }
// }

// let validator = new Validator();