interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

const product1: Product = {
  id: "fhjkasdhf",
  name: "Headphone",
  price: 1200,
  category: "Gadget",
};
const product2: Product = {
  id: "fhjkasdhf",
  name: "Keyboard",
  price: 300,
  category: "Gadget",
};
const product3: Product = {
  id: "15ds",
  name: "Mobile",
  price: 300,
  category: "Gadget",
};

const arrFilter = <T extends keyof Product>(
  products: Product[],
  key: T,
  value: Product[T]
): Product[] => {
  return products.filter((product) => product[key] === value);
};

const myRes1 = arrFilter([product1, product2, product3], "id", "15ds");

console.log(myRes1);



// my practice

