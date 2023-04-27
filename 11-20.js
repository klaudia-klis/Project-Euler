// Problem 12
// What is the value of the first triangle number to have over five hundred divisors?

function p12() {
 let number=0;
 let n=1;
 while (number === 0) {
   var count = 0;
   var formula = (n*(n+1))/2;
   
   for(let i =1; i<Math.sqrt(formula); i++) {
     if ( formula % i === 0) {
       count += 2;
     }
   }
   if (count > 500) {
     number = formula;
     break;
   }
   n+=1;
 }
 console.log(number);

}

//p12();

// Problem 13
// Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
function p13(filename) {
  const {readFileSync, promises: fsPromises} = require('fs');
  const data = readFileSync(filename, 'utf-8');
  const array_of_data = data.split(/\r?\n/);
  
  const array_of_integers = [];
  for(let i=0; i<array_of_data.length; i++) {
    array_of_integers.push(BigInt(parseInt(array_of_data[i])));
  }
  let sum = array_of_integers.reduce((a,b)=>a+b)
  
  console.log(sum.toString().split('').slice(0,10).join(''));
}
//p13('/Users/klaudiaklis/Sites/Project-Euler/inc/problem13data.txt');

// Problem 14
// Which starting number, under one million, produces the longest chain? (Collatz Problem)


function p14(number) {
 let some_arr = [number];
 while ( number > 1) {
   if (number % 2 === 0 ) {
     number = number/2;
     some_arr.push(number);
   } else if ( number % 2 !== 0 ) {
     number = 3*number + 1;
     some_arr.push(number);
   }
 }
  return some_arr.length;
}

function findTheLargest() {
  let result = [];
  for (let i = 0; i < 1000000; i++) {
    result.push(p14(i));
  }
  
  let theLargest = result.sort((a,b) => b-a)[0];
  
  let whatNumber = [];
  for (let j = 0; j < 1000000; j++) {
    whatNumber.push([j, p14(j)]);
  }
  
  let answer = [];
  for ( let i = 0; i<whatNumber.length; i++) {
    if ( whatNumber[i][1] === theLargest) {
      return whatNumber[i][0]
    }
  }
}

// console.log(findTheLargest());

// Problem 15
// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner. How many such routes are there through a 20×20 grid?


// Problem 16
// What is the sum of the digits of the number 21000?

function p16() {
  let int = BigInt(2 ** 1000);
  let arrayOfDigits = Array.from(String(int), Number);
  return arrayOfDigits.reduce((a,b) => a+b);
}

// console.log(p16())