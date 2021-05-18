// |||||| LEARNING - BOUCLES |||||| //
// while //
if (true) {
  let a = 0;
  let arr = [];
  while (a <= 100) {
    console.log("Adding : " + a);
    if (a > 0) { arr.push(a); }
    a+=3;
    console.log(arr);
  }
}
// do while //
if (true) {
  let a = 0;
  let arr = [];
  do {
    console.log("Adding : " + a);
    if (a > 0) { arr.push(a); }
    a+=3;
    console.log(arr);
  } while (a <= 100);
}
// for //
if (true) {
  let arr = [];
  for (var i = 0; ; i+=3) {
   if (i > 0) { arr.push(i); }
   console.log(i);
   console.log(arr);
   if (i >= 99) break;
 }
}
// for in //

// for of //
