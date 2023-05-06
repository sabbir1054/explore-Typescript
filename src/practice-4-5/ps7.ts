const ArrayOfNumber: Array<number> = [12, 15, 7, 96, 8, 785, 7];

const findMinMax = (...numbers: Array<number>): [number, number] => {
  let min: number = numbers[0];
  let max: number = numbers[0];
  let i = 0;

  /*   while (i < numbers.length) {
    if (numbers[i] < min) {
      min = numbers[i];
    }

    if (numbers[i] > max) {
      max = numbers[i];
    }
    i++;
  } */

  for (const nums of numbers) {
    if (nums < min) {
      min = nums;
    }

    if (nums > max) {
      max = nums;
    }
  }
  return [min, max];
};

const [min, max] = findMinMax(...ArrayOfNumber);
console.log(`Minimum: ${min}`);
console.log(`Maximum: ${max}`);
