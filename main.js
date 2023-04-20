// Problem 1
// Find the sum of all the multiples of 3 or 5 below 1000.

function p01() {
  let array = [];
  for (let i=0; i<1000; i++) {
    if( (i % 3 == 0) || (i % 5 == 0) ) {
      array.push(i);
    }
  }
  let sum = array.reduce(function(a,b) { return a + b });
  return sum;
}

//console.log(p01());

// Problem 2
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function p02() {
  let array = [1,2];
  while (array.at(array.length - 1) < 4000000) {
    let sum = array.at(array.length - 1) + array.at(array.length - 2);
    array.push(sum);
  }
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 == 0) {
      result.push(array[i]);
    }
  }
  let sum = result.reduce(function(a,b) {return a+b});
  return sum;
}

//console.log(p02());

// Problem 3
// What is the largest prime factor of the number 600851475143?

function p03(number) {
  let i=2;
  while (i<=number) {
    if (number%i == 0) {
      number/=i;
    } else {
      i++;
    }
  }
  console.log(i);
}

// p03(600851475143);

// Problem 4
// Find the largest palindrome made from the product of two 3-digit numbers.

function is_palindrome(number) {
  const reverse_number = number.toString()
  .split("")
  .reverse()
  .join("");
  return number === parseInt(reverse_number);
}

function p04() {
  let array_of_three_int = [];
  for (let i = 100; i<=999; i++) {
    array_of_three_int.push(i);
  }
  let result = [];
  for(let i=0; i<(array_of_three_int.length - 1); i++) {
    for(let j=(i+1); j<array_of_three_int.length; j++) {
      result.push(array_of_three_int[i]*array_of_three_int[j]);
    }
  }
  let palindromes = [];
  for (let i=0; i<result.length; i++) {
    if (is_palindrome(result[i])) {
      palindromes.push(result[i]);
    }
  }
  palindromes.sort((a,b)=>b-a);
  return palindromes[0];
}

//console.log(p04());

// Problem 5
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function p05() {
  let array_of_numbers = [];
  for (let i=1; i<=20; i++) {
    array_of_numbers.push(i);
  }
  let i=20;
  while(i>=20) {
    const is_divisible = (array, number) => array.every((element) => number % element === 0);
    if (is_divisible(array_of_numbers, i)) {
      break;
    }
    i+=1;
  }
  console.log(i);
}

// p05();

// Problem 6
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function p06() {
  let array_of_numbers = [];
  for (let i=1; i <= 100; i++) {
    array_of_numbers.push(i);
  }
  let array_of_squares = [];
  for (let i=0; i<array_of_numbers.length; i++) {
    array_of_squares.push(array_of_numbers[i] ** 2);
  }
  let x = array_of_numbers.reduce((a,b) => a+b);
  let square_of_sum = (x ** 2);
  let sum_of_squares = array_of_squares.reduce((a,b) => a+b);
  return square_of_sum - sum_of_squares;
}

// console.log(p06());

// Problem 7
// What is the 10 001st prime number?
function is_prime(int) {
  if (int === 1) return false;
  var d = int-1;
  while (d > 1) {
    if ( (int%d) === 0) return false;
    d--;
  }
  return true;
}

function p07() {
  let prime_numbers = [];
  let i = 1;
  while ( i>=1 ) {
    if ( is_prime(i) ) {
      prime_numbers.push(i);
      if ( prime_numbers.length === 10001) {
        break;
      }
    }
    i+=1;
  }
  return prime_numbers.at(10000);
}

// console.log(p07());

// Problem 8
// Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?

function p08(filename) {
  const {readFileSync, promises: fsPromises} = require('fs');
  const data = readFileSync(filename, 'utf-8');
  const array_of_data = data.split('').map((item) => parseInt(item,10));

  let result = [];
  for (let i=0; i<array_of_data.length; i++) {
    result.push(array_of_data.slice(i,i+13));
  }
  let products = [];
  for(let i=0; i<result.length; i++) {
    let product = result[i].reduce((a,b) => a*b);
    products.push(product);
  }
  
  let sorted_data = products.sort((a,b) => b-a);
  console.log(sorted_data[0]);
}

//p08('/Users/klaudiaklis/Sites/Project-Euler/inc/problem8data.txt');

// Problem 9
// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.

function p09() {
  for (let i=1; i<1000; i++) {
    for (let j=1; j<1000; j++) {
      for (let k=1; k<1000; k++) {
        if (i**2 + j**2 === k**2 && i+j+k === 1000) {
          return i*j*k;
        }
      }
    }
  }
}

//console.log(p09());