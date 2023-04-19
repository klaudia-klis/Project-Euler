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

p03(600851475143);

// Problem 4
// Find the largest palindrome made from the product of two 3-digit numbers.