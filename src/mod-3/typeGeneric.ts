const rollArray: number[] = [12, 15, 36];
// we can also use angle bracket for type declaration
// const rollArray2: Array<number> = [12, 15, 36];
// const rollArray3: Array<string> = ["12"," 36"];

// normal array object
const userNameAndRoll: Array<{ name: string; roll: number }> = [
  {
    name: "Sabbir",
    roll: 12,
  },
  {
    name: "Zihad",
    roll: 15,
  },
];

// now make a alias type which we can use
type ArrayType = Array<number>;
const numArr: ArrayType = [1, 2, 3, 4];
type ArrType2 = Array<string>;
const stringArr: ArrType2 = ["sabbir", "Hossain"];
/*  
here we see that for every type of data we need make new type of alias than we can make that 
so we need something that can take every kind of data 

    Now come to generic type syntax which is very popular and important topic in typescript

*/

type GenericArrayType<T> = Array<T>; //we can write anything in the angel bracket but using capital t is convention where t=type

const geneNumArr: GenericArrayType<number> = [10, 20, 320];
const geneStrArr: GenericArrayType<string> = ["sabbir", "Hossain"];
const geneBoolArr: GenericArrayType<boolean> = [true, false, true];

/* ==== Now we can use single type alias to handle many type ===>this is called generic type  */

// use generic type in tuple

type GenericTuple<X, Y> = [X, Y];
const infoUserString: GenericTuple<string, string> = ["Sabbir", "DIU"];
const infoUserNumberAndBool: GenericTuple<number, boolean> = [1021, true];

// normal

/*  ==========  this is not good practice that use direct object as a type 

const infoObjAndString: GenericTuple<object, string> = [
  { name: "Sabbir", roll: 12 },
  "Daffodil",
];

=================> we should make another type alias of interface for that object than use that
*/       //this is the correct and good practice
type UserInfoType = {
  name: string;
  roll: number;
};
const infoObjAndString: GenericTuple<UserInfoType, string> = [
  { name: "Sabbir", roll: 12 },
  "Daffodil",
];
/* 
==================================================
        now we use Interface 
===================================================
*/

type IUserInfo = {
  name: string;
  roll: number;
};
const infoObjAndString2: GenericTuple<IUserInfo, string> = [
  { name: "Sabbir", roll: 12 },
  "Daffodil",
];