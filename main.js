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