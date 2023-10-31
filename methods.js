let x=["nav","krish","vlka","surya"];
let index=x.indexOf("vlka",3);
console.log(index);

let fruits = ['apple', 'banana', 'cherry'];
fruits.splice(1, 0, 'orange','strawberry'); // Insert 'orange' at index 1
console.log(fruits); // Output: ['apple', 'orange', 'banana', 'cherry']

let fruit = ['apple', 'orange', 'banana', 'cherry'];
fruit.splice(3,1); // Remove 1 element at index 2
console.log(fruit); 

let z=[1,3,5,7,9,0];
let ind=z.indexOf(1,1);
console.log(ind);
