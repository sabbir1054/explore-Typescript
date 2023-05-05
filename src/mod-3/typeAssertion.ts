// it means we manually set type

let emni: any;

emni = "Next level";

// ( emni as string).charAt
// (emni as number).toExponential
// <string>emni.charAt;
// type assertion in function

const makeDuble = (params: string | number): string | number|undefined => {
    if (typeof(params)==="string") {
        return params;
    }
    // else {                          /* here is a dicision  that if we use only else that funtion return type no need to use undefined  */
    //     return params * 2;
    // }
if (typeof(params)==="number") {
    return params * 2;
}
}


const result = makeDuble(2) as number;
const result2 = makeDuble(2) as string;

// we can also use this syntax
// const result2 = <string>makeDuble(2) ;
//  console.log(result);
 