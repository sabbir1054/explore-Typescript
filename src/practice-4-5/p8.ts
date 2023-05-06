type Color = "Red" | "Blue" | "Black";
const makePrint = (color: Color, condition?: boolean): void => {
  if (condition) {
    console.log(color.toUpperCase());
  } else {
    console.log(color.toLowerCase());
  }
};

makePrint("Red", false);
