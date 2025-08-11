const numbers = [6, 1, 8, 2, 3, 5];
console.log(numbers);
numbers.sort();
console.log(numbers); // output [ 1, 2, 3, 5, 6, 8 ]

const friends = ["alan", "bala", "nal", "can", "dan"];
friends.sort();
console.log(friends); // output [ 'alan', 'bala', 'can', 'dan', 'nal' ]

const ages = [1, 5, 100, 15, 8, 2, 28];
// console.log(ages);
ages.sort();
console.log(ages);

/// ascending sorting
const sorted_ages_ascending = ages.sort(function (a, b) {
  return a - b;
});
console.log(sorted_ages_ascending);

/// descending sorting
const sorted_ages_descending = ages.sort(function (a, b) {
  return b - a;
});
console.log(sorted_ages_descending);
