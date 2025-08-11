///
/// 1. const --> value not going to change
///2. --> value might change
/// 3. var --> should not use ( unless exceptional cases)

const price = 500; /// number
console.log(price);

const name = "ham"; /// string
const isPoor = false; /// boolean

const friends = ["elo", "mark", "bill"]; /// array
const student = {
  nam: "tommy",
  class: 9,
  age: 17,
  address: "dhaka",
};

// condition

if (price > 1000) {
  console.log("too expensive");
} else if (price > 500) {
  console.log("maybe I can buy this");
} else {
  console.log("within my budget");
}

/// loop
let pushup = 0;
while (pushup < 10) {
  console.log("pushup");
  pushup++;
  //   pushup = pushup+1
  // pushup += 1
}

/// for

for (let i = 0; i < 10; i++) {
  console.log(i);
}
