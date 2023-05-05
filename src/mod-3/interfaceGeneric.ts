// generic interface

interface CupleInterface<T> {
  wife: string;
  husband: T;
}

const cuple1: CupleInterface<string> = {
  wife: "Manus",
  husband: "Fanus",
};

const cuple2: CupleInterface<boolean> = {
  wife: "Nazma",
  husband: true,
};

// use direct object not good practice
const cuple3: CupleInterface<object> = {
  wife: "Monira Khan",
  husband: { name: "Manis", age: 22 },
};
// use this way
interface IHusband {
  name: string;
  age: number;
}

const cuple3Correct: CupleInterface<IHusband> = {
  wife: "Sonia",
  husband: { name: "Imran", age: 23 },
};

// generic interface with optional
interface GenericTeam<T, U = null> {
  //as like function default parameter
  name: string;
  members: T;
  wins?: U; //here wins is optional
}

const team1: GenericTeam<number> = {
  name: "Tb squad",
  members: 5,
};
const team2: GenericTeam<number, number> = {
  name: "Tb squad",
  members: 5,
  wins: 2,
};
const team3: GenericTeam<number, boolean> = {
  name: "Tb squad",
  members: 5,
  wins: true,
};


