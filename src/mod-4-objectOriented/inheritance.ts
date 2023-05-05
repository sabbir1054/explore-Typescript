/* ================================================================================================================================
                Here we can use two sample syntax one is large other is short 
===================================================================================================================================*/

/* 
// large syntax

class Person {
    public name: string;
    public age: number;
    public address: string;
  constructor( name: string,  age: number,  address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hour: number): string {
    return `${this.name} will sleep for ${hour}`;
  }
} */

// short syntax
class Person {
  constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}

  makeSleep(hour: number): string {
    return `${this.name} will sleep for ${hour}`;
  }
}

//here student class inherit the Person class
class Student extends Person {
  constructor(public name: string, public age: number, public address: string) {
    super(name, age, address);
  }
}

// now teacher class also inherit the person class
class Teacher extends Person {
  // if we use this short form but not use public it can not be accessible
  constructor(
    public name: string,
    public age: number,
    public address: string,
    public designation: string
  ) {
    super(name, age, address); //here name age address are inherit from person so we should pass only this three item
  }

  takeClass(numberOfClass: number): string {
    return `Teacher name = ${this.name} take ${numberOfClass} classes per day`;
  }
}

// make student onj
const student1 = new Student("sabbir", 12, "Ash");
console.log(student1.makeSleep(5));

//make teacher object

const teacher1 = new Teacher("Salman", 12, "ASH", "Senior Teacher");
console.log(teacher1.makeSleep(10));
console.log(teacher1.takeClass(4));
