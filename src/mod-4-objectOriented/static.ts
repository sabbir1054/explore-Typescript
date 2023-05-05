// normal syntax
/* class Counter {
  counter: number;

  constructor(counter: number) {
    this.counter = counter;
  }

  increment() {
    return this.counter = this.counter + 1;
  }
  decrement() {
    return this.counter = this.counter - 1;
  }
}

const c1 = new Counter(0); // here we should initial value manually
console.log(c1.increment());
 */

// but when we use static than we use this syntax
class Counter {
  static counter: number = 0;

  static increment() {
    return (Counter.counter = Counter.counter + 1);
  }
  static decrement() {
    return (Counter.counter = Counter.counter - 1);
  }
}

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
