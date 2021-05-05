function getArraySum(numbers) {
    var sum = 0;
    for(var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [62, 90, 34, 11, 98, 20];
var result = getArraySum(numbers);
console.log("The sum of the array: ", result);

var total = getArraySum([20, 30, 40, 50, 60, 70]);
console.log("The sum of the array: ", total);