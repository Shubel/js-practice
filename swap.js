var a = 5;
var b = 7;
//console.log("before swap a =", a, "b =", b);
var temp = a;
a = b;
b = temp;
//console.log("after swap a =", a, "b =", b);

var p = 5;
var q = 7;
console.log("before swap p =", p, "q =", q);
[p,q] = [q,p];
console.log("after swap p =", p, "q =", q);