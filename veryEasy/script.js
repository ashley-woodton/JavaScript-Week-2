function min(x, y) {
    if (x > y) {
        return y;
    } else {
        return x;
    }
}

var num1 = prompt("Enter a number.");
var num2 = prompt("Enter another number.");

console.log(min(num1, num2));