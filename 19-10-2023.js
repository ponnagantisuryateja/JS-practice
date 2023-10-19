let sumOfEven = 0;
let productOfOdd = 1;

for (let i = 1; i <= 100; i++) {
  if (i%2=== 0) {
    sumOfEven += i;
  } else {
    productOfOdd *= i;
  }
}

console.log("Sum of even numbers: " + sumOfEven);
console.log("Product of odd numbers: " + productOfOdd);

let Even = 0;
let odd = 1;
let i = 1;

do {
  if (i % 2 === 0) {
    Even += i;
  } else {
    odd *= i;
  }
  i++;
} while (i <= 100);

console.log("Sum of even numbers: " + Even);
console.log("Product of odd numbers: " + odd);