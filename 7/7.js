// the question //
// By listing the first six prime numbers:
// 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

// the goal is to find the xth prime number
// in this case, specifically the 10,001st

// counter of primes found
var primeCounter = 0;

// upper bound to count to
var primeCeiling = 10001;

// numerical value at the prime count
var counterValue = 0;

// function to test if a number (x) is prime
function primeTest (x) {
  for (i = 2; i< x; i ++) {
    if (x%i === 0) {
      return false;
    } else {}
  }
  return true;
}

console.log(primeCounter);
console.log(primeCeiling);
console.log(counterValue);
console.log("*********");


// loop to test if prime, and add to counters
for (j = 2; primeCounter < primeCeiling; j++) {
  if (primeTest(j) === true) {
    primeCounter ++;
  } else {}
  counterValue = j;
}

console.log(primeCounter);
console.log(primeCeiling);
console.log(counterValue);

// ANSWER - 104743

// this is an inelegant solution
