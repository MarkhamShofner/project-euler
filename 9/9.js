// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const targetNumber = 1000;

// is a < b < c
function isTriplet (a, b, c) {
  if (a < b && b < c) {
    return true;
  } else {
    return false;
  }
}

// does a^2 + b^2 = c^2
function isPythag (a, b, c) {
  if (a*a + b*b === c*c) {
    return true;
  } else {
    return false;
  }
}

// sums to 1000
function sum1000 (a, b, c) {
  if (a + b + c === 1000) {
    return true;
  } else {
    return false;
  }
}

// product
function product (a, b, c) {
  debugger;
  return a * b * c;
}

//actual call function
function mainCall () {
  for (var i = 0; i < targetNumber; i++) {
    for (var j = i; j < targetNumber; j++) {
      for (var k = j; k < targetNumber; k++) {
        if (isTriplet(i, j, k)) { // this should always be true given these for loops
          if (isPythag(i, j, k)) {
            if (sum1000(i, j, k)) {
              console.log(`a is ${i}, b is ${j}, c is ${k}`);
              console.log(`and the product of the triplet is ${product(i,j,k)}`);
            }
          }
        }
      }
    }
  }
}

this.mainCall();

// todo: make the o notation better
//// options - early exits in the loops
