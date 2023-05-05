function add(num1:number, num2:number):number {
    return num1 + num2;
}

const addArrow = (num1: number, num2: number):number=>{
    return num1 + num2;
}


/* spread operator */
const myFriends: string[] = ["Shakil", "Zihad", "Milon"];
const newFriends: string[] = ["Siam", "Mashrafi"];

myFriends.push(...newFriends);

// console.log(myFriends);

/* rst parameters */
// const greetFriends = (friend1: string, friend2: string, friend3: string): void => {
//     console.log(`My friends ${friend1+" "+friend2+" "+friend3}`);
    
// }
const greetFriends = (...friends:string[]): void => {
    console.log(friends);
    
}

// greetFriends("Shakil", "Zihad", "Milon");



/* 
===============================
array and object de
==============================

*/