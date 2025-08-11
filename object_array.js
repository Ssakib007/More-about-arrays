const players = [{}, {}, {}];
const employees = [
  { name: "ash", designation: "content writer", salary: 25000 },
  { name: "cash", designation: "developer", salary: 25000 },
  { name: "abel", designation: "digital marketer", salary: 21000 },
  { name: "can", designation: "web developer", salary: 29000 },
];
employees[0].name = "cant";
console.log(employees[0].name);

console.log(employees[0].salary);
console.log(employees[2].designation);
for (const employee of employees) {
  console.log(employee.salary, employee.designation);
}

for (const emp of employees) {
  const person = emp;
  const personInfo = person.name + " " + person.salary;
  console.log(personInfo);
}
