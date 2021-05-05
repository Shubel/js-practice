/* Max value
var num = Math.max(4,58,1,3);
console.log(num);
*/

//largest number of array
var num = [4,5,1,3];
console.log(Math.max.apply(null, num));

//Another option:
var num = Math.max.apply(null, [2,3,4,5,6,7,8,9]);
console.log(num);

//Another option:
var arrayMax = [20,44,78,95,23,43,11,90,54,01,60,6,78,9,56];
var large = arrayMax[0];
for(var i = 0; i < arrayMax.length; i++) {
    var element = arrayMax[i];
    if(element > large) {
        large = element;
    }
}
console.log("Highest value is", large);