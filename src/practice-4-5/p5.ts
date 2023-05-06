const numArr11: number[] = [1, 2, 6, 4, 5, 6, 8, 5, 6, 8];

const isEven = (num: number): boolean => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const makeTotal = (numArr: Array<number>): number => {
  let total: number = 0;
  numArr.map((num) => {
    if (isEven(num)) {
      total += num;
    }
  });
  return total;
};

console.log(makeTotal(numArr11));
