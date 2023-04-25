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
p13('/Users/klaudiaklis/Sites/Project-Euler/inc/problem13data.txt');