// THE QUESTION
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

// could go brute force on this but seems like it'd be a pretty heavy set of checks
// could improve it by skipping every even number

const primeCeiling = 2000000;

const findPrimesSumUpTo = (n) => {
  if (n < 2) {
    return 0;
  } else {
    const primesArray = identifyPrimesUpTo(n);
    // sum the array of primes
    const primesSum = primesArray.reduce((a,b) => a+b, 0);
    return primesSum;
  }
};

// another good way to do this could be starting with an array of 2,000,000
// then removing everything from i --> 2,000,000 / 2 and all their multiples
const identifyPrimesUpTo = (n) => {
  const arrayToCeiling = [];
  // create the array through size n
  for (let i = 2; i <= n; i++) {
    arrayToCeiling[i] = i;
  }
  // set the value at the index to 0 if the index is a multiple of another number
  for (let j = 2; j <= n/2; j++) {
    for (let k = j*2; k <= n; k+=j) {
      arrayToCeiling[k] = 0;
    }
  }
  // filter the array down to only non 0 numbers
  const primesArray = arrayToCeiling.filter(num => {
    return num > 0;
  });
  return primesArray;
};

console.log(findPrimesSumUpTo(primeCeiling));

// const identifyPrimesUpTo = (n) => {
//   let primesArray = [];
//   if (n < 3) {
//     primesArray.push(2);
//   } else {
//     for (let i = 3; i <= n; i++) {
//       let isPrime = true;
//       for (let j = 2; j < i; j++) {
//         if (i%j === 0) {
//           isPrime = false;
//         }
//       }
//       if (isPrime) {
//         primesArray.push(i);
//       }
//     }
//   }
//   return primesArray;
// }
