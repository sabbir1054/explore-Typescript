// by abstraction we can hide data but give them access
// we can make abstraction by two way

// interface
/* interface IVehicle {
  name: string;
  model: string;
}

const vehicle: IVehicle = {
  name: "Car",
  model: "2000",
}; */

interface IVehicle {
  startEngine(): void;
  stopEngine(): void;
  move?(): void;
}

class Vehicle implements IVehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}

  startEngine(): void {
    console.log("I am starting");
  }

  stopEngine(): void {
    console.log("I am stopping");
  }
}

const vehicle1 = new Vehicle("Car", "Toyota", 200);

// abstract class

abstract class Vehicle12 {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  abstract startEngine1(): void;
  abstract stopEngine2(): void;
  move(): void {
    console.log(" I am syopping engine");
  }
}

class Cars22 extends Vehicle12 {
  startEngine1(): void {
    console.log("Start ");
  }
  stopEngine2(): void {
    console.log("Stooping ");
  }
}

const car121 = new Cars22("Car", "Honda", 20157);
