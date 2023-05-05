type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newType = "name" | "age" | "address";
// we can also use persons key using keyof

type newTypeUsingkeyof = keyof PersonType;

// both are similar
const a: newType = "age";
const b: newTypeUsingkeyof = "address";

// we also make it its working Y= "name"|"age"
function getyProperty<X, Y extends keyof X>(obj: X, key: Y) {
  obj[key];
}
const property =getyProperty({name:"MR Alam",age:100},"age")//here we can pass only first parameter object key in second parameter