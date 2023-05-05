const searchName = (value: string | null) => {
  if (value === null) {
    console.log("There is nothing");
  } else {
    console.log("Searching");
  }
};

searchName(null);

const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertedSpeed = (speed * 1000) / 3600;
    console.log(convertedSpeed);
    }
    if (typeof speed==="string") {
        const [value,unit] = speed.split(" ");

        const convertedSpeed = (parseInt(value) * 1000) / 3600;
        console.log(convertedSpeed);
        
    }
};
// getMyCarSpeed(10);
// getMyCarSpeed("10 km^-1");
// getMyCarSpeed(true);

function throwError(message:string):never {
    throw new Error(message);
}

// throwError("Error hoise");

function generateAdder(a: number): (b: number) => number {
  return function (b: number) {
    return a + b;
  };
}

const addTwo = generateAdder(2);

console.log(addTwo(3));

console.log(addTwo(5));