const c = "const";
var v = "var";
let l = "let";

console.log(c + " 0");
console.log(v + " 0");
console.log(l + " 0");

function functionName() {
  console.log(c + " 1");
  console.log(v + " 1");
  console.log(l + " 1");
  if (true) {
    console.log(c + " 2");
    console.log(v + " 2");
    console.log(l + " 2"); // Cannot access 'l' before initialization
    let l = "let"; // Cannot access 'l' before initialization
    console.log(l);
    const c = "const"; // Cannot access 'l' before initialization
    console.log(c); // Cannot access 'l' before initialization
    let la = "lat"; // Uncaught ReferenceError: la is not defined
  }
  console.log(la); // Uncaught ReferenceError: la is not defined
}
functionName()
