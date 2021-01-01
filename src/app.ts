// unknown type

let variable: unknown;
variable = "bye";
variable = 9;

let newvariable: string;

// newvariable = variable ; // Not allowed since newvariable cannot guarentee to be a string

let anyvariable: any;

newvariable = anyvariable; // ok since Typescript gives the any (normaly implicit) the chance to become  string at some point

function generateError(): never {
  throw console.error();
}

generateError();
