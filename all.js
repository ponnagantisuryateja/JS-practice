//1.regular function//   the can accept parameters and return values;
function regular(a,b){
  let result = a*b;
  return result; 
}
console.log(regular(9,5));
//2.arrow function//===> often used for short one-linear function.......
const arwfntn = (a,b)=> (a/b);
console.log(arwfntn(5,8));

//3.anonymous function//==> function that don't have a name and usually assigned to variable 
//often used as callback function//
var v = function(fname,lname){
  let result = fname+lname;
  return result;
};
console.log(v("surya ","teja"));
//4.immediatly invoked function?/==>used to creat private scopes and avoide polluting the global scoope....."(IIFE)
var immediate = (function(name, age,gender){
  result = name+age+gender;
  return result;
});
console.log(immediate("surya",23,"male"));
//5.named function//==>  function with a specific name that can be usefull for self-referencing and debugging.......
function addnumbers(a,b) {
  return a+b;
}
var result = addnumbers(8,9);
console.log("the sum is "+ result)
//6.generator function//==>   used to create iterators for generating a sequence of values......//
function* generator(i){
  yield i;
  yield i+10;
};
var gen1 = generator(10);
console.log(gen1.next().value);
console.log(gen1.next().value);
//7.constructer function//=>  It is a blueprint for creating multiple objects with the same structure.
function studentdetails(name,age,gender,sub) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.sub = sub; 
};
let studentdetails2 = new studentdetails("pavan",24,"male","maths");
let studentdetails3 = new studentdetails("raju",27,"male","computer science");
console.log(studentdetails2);
console.log(studentdetails3);
console.log(studentdetails2.name)

//8.Recursive function//==> this function call themselves with their own name.
//they are useful for solving problems that can be broken down into smaller,....
//program to caluclate the factorial of a number//
function factorial(n){
  if(n===0){
  return 1;
  }
  else{
      return n*factorial(n-1);
 }
}
let answer = factorial(5);
console.log("the factorial fo 5 is"+ answer);
////example 2 for Recursive function//
function square(n){
  if(n===0){
      return 0;
  }
  else if (n<0){
    n= -n;        
    return square(n);
  }
  else {
      return n+square(n-1);
  }
};
let output = square(-8);
console.log("the squar of 8 is" + output);
//map functions // it
const numbers = [1,2,3,4,5,6];
let double = numbers.map(num=>num+num);
console.log(double)