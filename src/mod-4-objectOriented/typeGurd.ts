/* ===========================================================================================================================================
                                                Type Guard is used in function and class also
=========================================================================================================================================== */

/*
=================================================================
===============Type Guard In Function=====================
=============================================================
                                                            */

// keyof is one kind of guard

type Alphanumeric = string | number;
function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}
// console.log(add("1", 2));
// console.log(add(1, 2));

//in guard for object

type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: "Admin";
};

const normalUser1: NormalUserType = {
  name: "Sabbir",
};

const AdminUser1: AdminUserType = {
  name: "Sumit",
  role: "Admin",
};

// make guard function
type UserTypeN = NormalUserType | AdminUserType;
function getUser(user: UserTypeN): void {
  if ("role" in user) {
    console.log(" I am ", user.role);
  } else {
    console.log("I am normal user");
  }
}

// getUser(normalUser1);
// getUser(AdminUser1);

/*
=================================================================
===============Type Guard In Class and Object=====================
=============================================================
                                                            */
// use instanceof for guard
class AnimalG {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log("I am talking ");
  }
}

class Dog extends AnimalG {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log("I am barking");
  }
}

class Cat extends AnimalG {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMew() {
    console.log("I am Mew Mew");
  }
}
// by using guard we can check specific

// function getAnimal(animal: AnimalG) {
//   if (animal instanceof Dog) {
//     animal.makeBark();
//   } else if (animal instanceof Cat) {
//     animal.makeMew();
//   } else {
//     animal.makeSound();
//   }
// }
// another syntax for better practice
function isDog(animal: AnimalG): animal is Dog {
  return animal instanceof Dog;
}
function isCat(animal: AnimalG): animal is Cat {
  return animal instanceof Cat;
}
function getAnimal(animal: AnimalG) {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMew();
  } else {
    animal.makeSound();
  }
}

/* 
type alias is bad practice we should use type guard
*/