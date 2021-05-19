// |||||| LEARNING - FONCTIONS |||||| //
// function "normale" //
if (true) {
  let c = "result : ";
  function functionName(a, b) {
    // Instructions
    return c + a * b;
  }
  console.log(functionName(31, 66));
}
// function "avec variable" //
if (true) {
  let c = "result : ";
  let functionName = function(a, b) {
    // Instructions
    return c + a * b;
  }
  console.log(functionName(31, 66));
}
// function "flèchée" //
if (true) {
  let c = "result : ";
  let functionName = (a, b) => {
    // Instructions
    return c + a * b;
  };
  console.log(functionName(31, 66));
}
