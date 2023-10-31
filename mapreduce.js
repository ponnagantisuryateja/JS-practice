const arr=[7,8,4,2,1,0,8,7,7,9];
function double(x){
    return x*2
}
const output = arr.map(double);
console.log(output);



///reduce///
const numbers = [1, 2, 3,4,5];
console.log(numbers.reduce(a=>a+a));


// Using reduce to calculate the sum of all elements
const sum = numbers.reduce(function (surya, teja) {
    return surya * teja;
}, 1); // The '0' is the initial value of the accumulator

console.log(sum);


function emp(empname,num,salary) {
    this.empname =empname;
    this.num =num;
    this.salary=salary;
    
}

// Call the function and store the result in a variable
let emp1 = new emp("surya",123456,150000);
let emp2 = new emp("nani",12345,15000);
console.log(emp1,emp2); 

function add(a,b){
    let c=(a+b);
    return(c)
}

function sub(x,y){
    let d=(x-y);
    return(d)
}
function combine(add,sub){
    console.log (add(5,6));
    console.log (sub(100,50));
    return(combine);
}
let myname =[1,3,4,5,67,77];
console.log(myname.map(l=>l-2))