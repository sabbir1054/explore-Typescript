// const makePromise = (): Promise<string> => {
//   return new Promise<string>((resolved, reject) => {
//     const data: string = "Data is fatched";

//     if (data) {
//       resolved(data);
//     } else {
//       reject("Failed to fetch");
//     }
//   });
// };
// const makePromiseBoolean = (): Promise<boolean> => {
//   return new Promise<boolean>((resolved, reject) => {
//     const data: boolean = true;

//     if (data) {
//       resolved(data);
//     } else {
//       reject("Failed to fetch");
//     }
//   });
// };

// type DataType = {
//   status:number;
//   data:Array<string>;
// };

// const makePromiseObject = (): Promise<DataType> => {
//   return new Promise<DataType>((resolved, reject) => {
//     const data: DataType = { status: 305, data: [""] };

//     if (data) {
//       resolved(data);
//     } else {
//       reject("Failed to fetch");
//     }
//   });
// };

// // get part
// const getPromiseBooleanData = async (): Promise<boolean> => {
//   const data = await makePromiseBoolean();
//   return data;
// };
// const getPromiseData = async (): Promise<string> => {
//   const data = await makePromise();
//   return data;
// };

const getTodo = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const res = await response.json();
  console.log(res);
};
getTodo();




