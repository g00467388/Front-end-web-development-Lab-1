// Function that takes in string and prints it's value
function addition(value: string) {
    console.log("Value is: " + value);
}

let firstVal: number = 42;
let secondVal: number = 1;
let sumOfVals: string = (firstVal + secondVal).toLocaleString();
// 42 + 1 = Value is: 43
addition(sumOfVals)