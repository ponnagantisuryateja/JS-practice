function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function Operation(x,num1, num2) {
    return x(num1, num2);
}

const result1 = Operation(add, 5, 3);



const result2 = Operation(subtract, 10, 4);

console.log("Result of addition:", result1);    
console.log("Result of subtraction:", result2); 


// Create a constructor function
function StringAdder() {
    this.concatStrings = function(string1, string2) {
      return string1 + string2;
    };
  }
  
const stringAdder = new StringAdder();
const result = stringAdder.concatStrings("Hello", "World!");
  
  console.log(result); 

   