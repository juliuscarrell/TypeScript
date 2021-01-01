// Normal Typing

function combines1(num1: number, num2: number) {
  let result = num1 + num2;
  console.log(result);

  return result;
}

const resultNums = combines1(20, 31);

const resultStrings = combines1("twenty", "thirty-one"); // Not Allowed as we know

//Using Union Types

function combines2(num1: number | string, num2: number | string) {
  let result = num1 + num2;

  console.log(result);

  return result;
}

function combines3(num1: number | string, num2: number | string) {
  let result;

  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;
  } else result = num1.toString() + num2.toString();

  console.log(result);

  return result;
}

// Using Literal Types

function combines4(
  num1: number | string,
  num2: number | string,
  outputType: "as-num" | "as-string"
) {
  let result;

  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;
  } else result = num1.toString() + num2.toString();

  console.log(result);

  return result;
}

// const newNum = combines4(5, 6, "Jules");

const newNum2 = combines4(5, 6, "as-num");

// Alias Type

type myAliasType = number | "Hello";

function newCombine(item: myAliasType) {
  console.log(item);
}

newCombine(5); //Able to invoke

newCombine("Hello"); //Able to invoke

newCombine("Goodbye"); // NOT able to invoke

