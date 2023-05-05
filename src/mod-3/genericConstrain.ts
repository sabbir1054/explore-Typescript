/* // it means we force the generic type that our type would be this

const addMe = <T>(myInfo: T) => {
  const company: string = "P Hero";
  const newData = { ...myInfo, company };

  return newData;
};
type MyInfoType = {
    name: string;
    age:number
}
const myInfo:MyInfoType = {
  name: "sabbir",
  age: 20,
};

const resultAddMe = addMe<MyInfoType>(myInfo); */
// resultAddMe.

// in the top there generic type should be anything which is sometime make problem for us so
// we force that our type should be this type

// it means we force the generic type that our type would be this
//                        we can also use here alias type and interface
const addMe = <T extends { name: string; age: number }>(myInfo: T) => {
  const company: string = "P Hero";
  const newData = { ...myInfo, company };

  return newData;
};
type MyInfoType = {
  name: string;
  age: number;
  salary?: number;
};
const myInfo: MyInfoType = {
  name: "sabbir",
  age: 20,
  salary: 2000,
};

const resultAddMe = addMe<MyInfoType>(myInfo);
