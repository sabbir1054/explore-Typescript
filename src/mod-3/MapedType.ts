const arrNum = [1, 2, 3]; // i want to make it string arr
const arrString = arrNum.map((num) => num.toString());
console.log(arrString);

type AreaNumber = {
  height: number;
  width: number;
};

type A = AreaNumber["height"]; //look up types
type B = keyof AreaNumber; //'width'|'height'

type AreaString = {
  height: string;
  width: string;
};

const reqArea: AreaNumber = {
  height: 10,
  width: 20,
};
// we can access
reqArea.width = 25;
// if we want to height and width are always 10 and 20
// we should make an readonly type

/* read only */

type AreaReadOnly = {
  readonly height: number;
  readonly width: number;
};

const reqArea2: AreaReadOnly = {
  height: 10,
  width: 50,
};

// reqArea2.height = 30;  here we can not  cahnge value because of readonly

/* ===================
    Mapped type
=========================== */
/*
type Area = {
  [key in "name" | "age"]: string;  //here we mapping all key and set type to string
};

type Area = {
  [key in "name" | "age"]: number;  //here here name and age is number type
};

*/

type Volume = {
  height: number;
  width: number;
  depth: number;
};

type Area = {
  [key in keyof Volume]: number;
  // we can also change this type
  // [key in keyof Volume]: boolean
};
/* 

type Area = {
  [key in keyof Volume]: Volume[key];
  
};


*/

/* ==========
Now generic this maped 
=============== */

type Area2<T> = {
  [key in keyof T]: T[key]; //we can also use readonly
};

const area5: Area2<{ name: string }> = { name: "Sabbir" }; //here we can use it as we need
