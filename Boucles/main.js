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
if (true) {
  var object = ["John", "Doe", 31];
  for (var x in object) {
    console.log(x);
  }
  var object2 = {fullname:"John", lastname:"Doe", age: 31};
  for (var x in object2) {
    console.log(x);
  }
  for (var x in object2) {
    console.log(object2[x]);
  }
}
// for of //
if (true) {
  var object = ["John", "Doe", 31];
  for (var x of object) {
    console.log(x);
  }
}
