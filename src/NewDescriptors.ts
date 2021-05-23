function testDec(
  target: any,
  methodname: string,
  description: PropertyDescriptor
) {
  console.log(`${methodname}`);
  console.log(`${description}`);
}

class testDesc {
  themessage: string = "The message has been spoken";

  @testDec
  showMessage() {
    console.log(this.themessage);
  }
}

const theobjof = {
  name: "Jules"
};

console.log(Object.getOwnPropertyDescriptor(theobjof, "name"));
