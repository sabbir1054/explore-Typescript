// inter face works almost like type alias

// type alias

type UserType = {
  name: string;
  age: number;
};
// almost similar type interface

interface UserInterface {
  name: string;
  age: number;
}

//( can say convention) we should use interface only object type data and type alias should use all primitive types data

/* example  */

const UserWithAlias: UserType = {
  name: "Sabbir",
  age: 20,
};

const UserWithInterface: UserInterface = {
  name: "Sabbir Hossain",
  age: 21,
};

// interface has a advantage that is we can extends it

/* example */
interface IExtendedUser extends UserInterface {
  varsity: string;
}

const myUserExtend: IExtendedUser = {
  name: "Sabbir Khan",
  age: 22,
  varsity: "DIU",
};

/* we can use extend feature in alias that is almost like union and intersection */
type rollNumber = number;
type extendUser = UserType & {
  roll: rollNumber;
};
const myUser2: extendUser = {
  name: "Sabbir Muhammad",
  age: 2000,
  roll: 20,
};

/* in javascript function and array is one kind of array so we can make those by type alias and interface */

/*
    //   Normally   ==>   function
const addNumbers = (num1: number, num2: number): number => {
    return num1 + num2;
} 

*/

/* make upper function by type alias */

type addNumbersType = (num1: number, num2: number) => number;

const addNumbers: addNumbersType = (num1, num2) => {
  return num1 + num2;
};

/* we can also make that function using inter face */

interface IAddNumbers {
  (num1: number, num2: number): number;
}
const addNumbers2: IAddNumbers = (num1, num2) => {
  return num1 + num2;
};

/* 
    Here we see we can make function type using type alias and interface both 
    but we should use type alias to make function type for better readable syntax
*/

/* ===== Now make array with type alias and interface */

// normal array
const rollNumbersArr: number[] = [1, 2, 3]; // also we can use number[] ==> Array<number>

// array by alias
type RollNumbersType = number[];
const rollNumberArr2: RollNumbersType = [1, 2, 3, 4];

// interface array

interface IRollNumbers {
  [index: number]: number;
}
const rollNumbersArr3: IRollNumbers = [1, 2, 3, 4];
