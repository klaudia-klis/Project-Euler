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

console.log(p01());

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

console.log(p02());