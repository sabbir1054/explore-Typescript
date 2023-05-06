type ArrType = Array<number>;

const getMatchArr = (arr1: ArrType, arr2: ArrType): ArrType => {
  const resArr: ArrType = [];

  arr1.map((i) => {
    arr2.map((j) => {
      if (i === j) {
        resArr.push(i);
      }
    });
  });

  return resArr;
};

const resultArr: ArrType = getMatchArr([1, 2, 3, 4, 5], [2, 4, 6, 8]);

console.log(resultArr);
