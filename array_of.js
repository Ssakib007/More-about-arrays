const number = [1, 2, 5, 4, 6];
const tournament_runs = [[], [], []];
const exam_marks = [
  [98, 87, 45, 12, 63],
  [54, 89, 74, 23, 11],
  [45, 87, 12, 56, 45],
  [78, 65, 32, 87, 54],
];

console.log(number[0]); /// output 1
console.log(exam_marks[0][0]); /// output 98
// or
const first_marks = exam_marks[0];
console.log(first_marks[0]); /// output 98

console.log(exam_marks);
exam_marks[0][1] = 66;
console.log(exam_marks);
exam_marks[1].pop();
console.log(exam_marks);
exam_marks[1].push(44);
console.log(exam_marks);

for (const marks of exam_marks) {
  console.log(marks);
}
