// at first we see how many way we can write class in type script

/* /////////////// sample 01
class Animal {
  name: string;
  color: string;
  weight: number;
  isTalking: boolean;

  constructor(name: string, color: string, weight: number, isTalking: boolean) {
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.isTalking = isTalking;
  }
}
 */
/* 
// ///////////////    sample 02

class Animal {
  private name: string;
  public color: string;
  public weight: number;
  public isTalking: boolean;

  constructor( name: string, color: string, weight: number, isTalking: boolean) {
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.isTalking = isTalking;
  }
}
 */

// sample 03
// the most clean and small syntax
class Animal1 {
  constructor(
    private name: string,
    public color: string,
    public weight: number,
    public isTalking: boolean
  ) {}
}

// practice class constructor method with video

class Animal {
  name: string;
  species: string;
  sound: string;
  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

// make object from class
const dog = new Animal("Sher Khan", "Dog", "Gheu Gheu");
dog.makeSound()

const biral = new Animal("Tom", "Cat", "Mew Mew");
biral.makeSound()