class Personp {
  takeNape(): void {
    console.log("I am sleeping 8 h");
  }
}

class StudenP extends Personp {
  takeNape(): void {
    console.log(" I am sleeping 5 h");
  }
}
class Developer extends Personp {
  takeNape(): void {
    console.log("Developer=> I am sleeping 3 h");
  }
}

const person1 = new Personp();
const student11 = new StudenP();
const developer = new Developer();
/* 
person1.takeNape();
student11.takeNape();
developer.takeNape(); */
// we can also print this by function
function getNap(user: Personp) {
  user.takeNape();
}

getNap(person1);
getNap(student11);
getNap(developer);

/*  another example */

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.height * this.width;
  }
}

const circle1 = new Circle(5);
const rect = new Rectangle(4, 5);

const res = circle1.getArea();
const resul2 = rect.getArea();

console.log(res);
console.log(resul2);
