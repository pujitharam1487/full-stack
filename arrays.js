// 1. Creation and Basics
const colors = ['red', 'green', 'blue'];
console.log(colors[0]); // 'red'
console.log(colors.length); // 3

// 2. Modifying Elements
colors.push('purple');    // Adds to end -> ['red', 'green', 'blue', 'purple']
colors.pop();             // Removes from end -> ['red', 'green', 'blue']
colors.unshift('yellow'); // Adds to front -> ['yellow', 'red', 'green', 'blue']
colors.shift();           // Removes from front -> ['red', 'green', 'blue']

// 3. Transformation and Filtering
const numbers = [1, 2, 3, 4, 5];

// Map: Doubles each number
const doubled = numbers.map(num => num * 2); 
console.log(doubled); // [2, 4, 6, 8, 10]

// Filter: Keeps only even numbers
const evens = numbers.filter(num => num % 2 === 0); 
console.log(evens); // [2, 4]

// Reduce: Sums all numbers
const sum = numbers.reduce((total, num) => total + num, 0); 
console.log(sum); // 15
