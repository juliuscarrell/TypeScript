"use strict";
// unknown type
let variable;
variable = "bye";
variable = 9;
let newvariable;
// newvariable = variable ; // Not allowed since newvariable cannot guarentee to be a string
let anyvariable;
newvariable = anyvariable; // ok since Typescript gives the any (normaly implicit) the chance to become  string at some point
function generateError() {
    throw console.error();
}
generateError();
