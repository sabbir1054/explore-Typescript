

/* alias in object */
type BoxType = {
  name: string;
  height: number;
  width: number;
  isColored: boolean;
  company?: string;
};

const box1: BoxType = {
  name: "Box1",
  height: 14,
  width: 20,
  isColored: false,
  company: "Hameem",
};

const box2: BoxType = {
  name: "Box2",
  height: 20,
  width: 30,
  isColored: true,
};

/* 
Type alias is not only for object value it can use 
*/

/* alias in boolean */

type isBoxSafe = boolean;

const myBox1: isBoxSafe = true;


/* alias in String */

type VarsityNameType = string;

const myVarsityName: VarsityNameType = "Daffodil International University";

/* 
=========================================

Alias for function
======================================

*/

// normal callback function
/* const calculate = (num1: number, num2: number, operation:(x:number,y:number)=>number) => {
    return operation(num1,num2);
}

calculate(10, 20, (x, y) => x + y); */


/* alias type */
type operationType = (x: number, y: number) => number;

const calculate = (num1: number, num2: number, operation:operationType) => {
    return operation(num1,num2);
}

calculate(10, 20, (x, y) => x + y);