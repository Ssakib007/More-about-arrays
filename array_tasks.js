// TASK1
// Write a JavaScript code to reverse the array colors without using the reverse method.
///Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// Output: ['orange', 'yellow', 'green', 'blue', 'red']

const colors = ["red", "blue", "green", "yellow", "orange"];
const reversed = [];
for (const color of colors) {
  reversed.unshift(color);
}
console.log(reversed);

/// TASK 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.
// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];
// Output: [12, 98, 76, 46]

const numbers = [12, 98, 5, 41, 23, 78, 46];
const even = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    even.push(numbers[i]);
  }
}
console.log(even);

// alternative solution
// const even = numbers.filter((num) => num % 2 === 0);

/// TASK 3
// Use a for...of loop to concatenate all the elements of an array into a single string.
// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// Output: 'TomTimTinTik'

var words = ["Tom", "Tim", "Tin", "Tik"];
var result = "";
for (let word of words) {
  result = result + word;
}
console.log(result);

/// TASK 4
//Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
//Input: const statement = 'I am a hard working person'
//Output:'person working hard a am I'
const statement = "I am a hard working person";
console.log(statement.split(" ").reverse().join(" "));

/// TASK 5
//Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.
//Input: [1, 2, 3]
//Expected Output: Original: [1, 2, 3] Copy: [99, 2, 3]

let original = [1, 2, 3];
console.log(original);
let copy = Array.from(original);
copy[0] = 99;
console.log(copy);

/// TASK 6
//Given an array of student objects, print each student’s name and marks.
//[{ name: "John", marks: 85 },{ name: "Alice", marks: 90 }]
//Expected output: John scored 85 Alice scored 90
let student = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];

for (const s of student) {
  console.log(s.name, "scored", s.marks);
}
//alternative solution
for (let i = 0; i < student.length; i++) {
  console.log(student[i].name, "scored", student[i].marks);
}

/// TASK 7
//Given a 2D array, update the value at second row first item to 99 and print the updated array.
//input:[[1, 2], [3, 4],  [5, 6]]
//Expected Array:[[1, 2], [99, 4],[5, 6]]

let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
arr[1][0] = 99;
console.log(arr);
