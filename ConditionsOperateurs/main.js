// |||||| LEARNING - OPERATORS |||||| //
// == // (égal à)
var v = 3;
var w = "3";
if (v==w) {
  console.log("v==w");
} else {
  console.log("!v==w");
}
// === // (Strictement égal à)
var v = 3;
var w = "3";
if (v===w) {
  console.log("v===w");
} else {
  console.log("!v===w");
}
var v = 3;
var w = 3;
if (v===w) {
  console.log("v===w");
} else {
  console.log("!v===w");
}
// && ou || // Combinaison de conditions
// && (ET)
var v = 3;
var w = 3;
var x = "3";
if (v===w && w==x) { // v===w && w==x => true
  console.log("v===w && w==x => true");
} else {
  console.log("v===w && w==x => false");
}
if (v===w && !w===x) { // v===w && !w===x => false
  console.log("v===w && !w===x => true");
} else {
  console.log("v===w && !w===x => false");
}
// || (OU)
var v = 3;
var w = 3;
var x = "3";
if (v===w || w===x) { // v===w || w===x => true
  console.log("v===w || w===x => true");
} else {
  console.log("v===w || w===x => false");
}
if (!v===w || !w===x) { // !v===w || !w===x => false
  console.log("!v===w || !w===x => true");
} else {
  console.log("!v===w || !w===x => false");
}
