const numbers = [1, 2, 3, 4, 5];
const reversed = [];

// method 1
for (let i = 0; i < numbers.length; i++) {
  reversed.unshift(numbers[i]);
}
console.log(reversed);

// method 2
for (let i = numbers.length - 1; i >= 0; i--) {
  reversed.push(numbers[i]);
}
console.log(reversed);

//method 3
for (const num of numbers) {
  reversed.unshift(num);
}
console.log(reversed);

// method 4
console.log(numbers);
const result = numbers.reverse();
console.log(numbers);
console.log(result);
