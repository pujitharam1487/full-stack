let colors = ["Red", "Green", "Blue"];
console.log(colors);

var fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

var fruits = ["Apple", "Banana", "Mango"];
fruits[1] = "Orange";
console.log(fruits);


let marks = [85, 90, 78, 95];
console.log("marks:",marks);


//array metods
let numbers = [10, 20, 30];
numbers.push(40);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.unshift(5);
console.log(numbers);
numbers.shift();
console.log(numbers);


let numb = [10, 20, 30, 40];
console.log("array length:",numb.length);



let number = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < number.length; i++) {
    sum += number[i];
}
console.log("Sum =", sum);

//witout parameters
function greet(){
    console.log("Welcome to JavaScript");
}
greet();



// Function to add two numbers
function add(a, b) {
    return a + b;
}
// Function call
let result = add(10, 20);
console.log("Sum =", result);


// finding largest number
function largest(a,b){
    if (a>b){
        return a;
    } else {
        return b;
    }
}
console.log(largest(15,25));


// Function to calculate sum and average
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let num = [10, 20, 30, 40, 50];
let total = calculateSum(num);
let average = total / num.length;
console.log("Array:", num);
console.log("Sum =", total);
console.log("Average =", average);
