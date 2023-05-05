// normal function
const createArr = (param: string): string[] => {
  return [param];
};

// generic type function

const genericCreateArr = <T>(param: T): T[] => {
  return [param];
};

const res1 = genericCreateArr<string>("Bangladesh");
const res2 = genericCreateArr<boolean>(true);

type User = {
  name: string;
  age: number;
};

const res3 = genericCreateArr<User>({ name: "Sabbir", age: 20 });

// now function return tuple
const createTupleGeneric = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

const geneTuple1 = createTupleGeneric<string, string>("Sabbir", "Diu");
const geneTuple2 = createTupleGeneric<boolean, number>(true, 21);

type InfoTypeUse = {
  name: string;
  roll: number;
  old: boolean;
};

const geneTuple3 = createTupleGeneric<InfoTypeUse, InfoTypeUse>(
  { name: "Sabbir", roll: 15, old: true },
  { name: "Sakir", roll: 15, old: true }
);
