// Using Types

function add(num1: number, num2: number, showResult: boolean) {
  if (showResult) {
    let g = 5;

    console.log(num1 + num2);
  } else {
    return num1 + num2;
  }
}

const number3 = 24;
const number4 = 3;
const shows = true;

let result = "hello";

result = 0;

add(number3, number4, shows);

function subtract(a: number, b: number = 5): number {
  return a + b;
}
