type GenericProductsTuple<X, Y, Z> = [X, Y, Z];


const headphone: GenericProductsTuple<string, number, number> = [
  "Headphone",
  1200,
  3,
];
const laptop: GenericProductsTuple<string, number, number> = [
  "Laptop",
  1023549,
  5,
];
const keyboard: GenericProductsTuple<string, number, number> = [
  "Keyboard",
  1023,
  50,
];


type ProductsArr = Array<GenericProductsTuple<string, number, number>>;

const calculateTotalCost = (products: ProductsArr): number => {
  let total: number = 0;

  products.map((product) => {
    total = total + product[1] * product[2];
  });

  return total;
};

console.log(calculateTotalCost([laptop, headphone, keyboard]));
