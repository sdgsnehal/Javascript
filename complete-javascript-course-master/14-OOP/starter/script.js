'use strict';
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never to this
  //   this.calcAge = function(){
  //     console.log(2037 - this.birthYear);
  //   }
};
const jonas = new Person('Jonas', 1991);
console.log(jonas);
// 1. new{} is created
//2. funtion is called, this ={}
//3.{} linked to protype
//4.function automatically  return {}
const matilda = new Person('Matilda', 2017);
const jack = new Person('jack', 1975);
console.log(matilda, jack);
console.log(jonas instanceof Person);
//Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge();
matilda.calcAge();
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));
// .prototype of linked objects
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
console.log(jonas.__proto__);
// object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__);
console.dir(Person.prototype.constructor);
const arr = [3, 6, 4, 5, 6, 9, 3]; //new array ===[]
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);
// Array.prototype.unique = function () {
//   return [...new set(this)];
// };
// console.log(arr.unique());
const h1 = document.querySelector('h1');
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  console.log(this.speed + 10);
};
Car.prototype.brake = function () {
  console.log(this.speed - 5);
};
const BMW = new Car('BMW', 120);
console.log(BMW);
const Mercedes = new Car('Mercedes', 95);
console.log(Mercedes);
BMW.accelerate();
//class expression
// const PresonCl = class{}

//class declaration
class PresonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`hey ${this.firstName}`);
  }
  static hey() {
    console.log('hey there');
    console.log(this);
  }
}
const jessica = new PresonCl('jessica', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PresonCl.prototype);
// PresonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();
// 1.classes are not hoisted
//2. classes are first-classes citizen
//3.classes are executed in strict mode
const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
  get age() {
    return 2037 - this.birthYear;
  },
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  },
  get fullName() {
    return this._fullName;
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);
account.fullName = 'jessica davis';
console.log(account.fullName);
const walter = new PresonCl('walter white', 1965);
console.log(walter);
// Static method for constructor
Person.hey = function () {
  console.log('hey there ');
  console.log(this);
};
Person.hey();
PresonCl.hey();
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstname, birthYear) {
//     this.firstName = firstname;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();
// console.log(steven.__proto__ === PersonProto);
// const sarah = Object.create(PersonProto);
// sarah.init('sarah', 1979);
// sarah.calcAge();
class carCl {
  constructor(make, speed) {
    (this.make = make), (this.speed = speed);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed * 1.6;
  }
}
// const ford = new carCl('ford', 120);
// console.log(ford.speedUS);
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and i study${this.course}`);
// };
// const mike = new Student('mike', 2020, 'computer science');
// mike.introduce();
// mike.calcAge();
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// codeing challenge 3

const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
Ev.prototype = Object.create(Car.prototype);
const tesla = new Ev('Tesla', 120, 23);
Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h with a charge of ${this.charge}`
  );
};
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
////////////////////////////////////////
// Inheritance between "classes:ES6 Classes"
class StudentCl extends PresonCl {
  constructor(fullName, birthYear, course) {
    //always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.firstName} and i study${this.course}`);
  }
  calcAge() {
    console.log(
      `I am ${2037 - this.birthYear}years old but as student i feel more like${
        2037 - this.birthYear + 10
      }`
    );
  }
}
const martha = new StudentCl('martha', 2012, 'computer science');
martha.introduce();
martha.calcAge();
//////////////////////////////////////
const PersonProto = {
  calcAge() {
    console.log();
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
//const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`my name is${this.fullName}and i study${this.course}`);
};
const jay = Object.create(StudentProto);
jay.init('jay', 2010, 'Computer science');
jay.introduce();
jay.calcAge();
//////////////////////////////////////////
//Another class Example
class Account {
  //(1)punlic fields(instances)
  locale = navigator.language;

  //(2)Private Fields
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //Protected
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account,${owner}`);
  }
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }
  //4)private methods
  // #approveLaon(val) {
  //   return true;
  // }
  static helper() {
    return true;
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);

acc1.requestLoan(1000);
// acc1.approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);
// console.log(acc1.#movements);
//Encapsulation : protected properties and methods
// public fields
//private fields
//public methods
//private methods
//(there is also the static methods)
//chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(5000);
//coding Challenge 3
class EVCL extends carCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h with a charge of ${
        this.#charge
      }`
    );
  }
  chargeBattery(chargeTo) {
    this.charge = chargeTo;
  }
  brake() {
    console.log(this.speed - 5);
  }
}
const Tesla = new EVCL('Tesla', 120, 23);
Tesla.accelerate();
