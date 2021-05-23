interface mytest {
  talking: (number: number) => string;
}

class friend implements mytest {
  age: number;

  talking(number: number): string {
    return "my age";
  }
}
