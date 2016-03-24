console.log("hello");

// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// triplet - is a < b < c
function isTriplet (a, b, c) {
  if (a < b && b < c) {
    return true;
  } else {
    return false;
  }
}

// pythagorean triplet?
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
  return a * b * c;
}

//actual call function
function mainCall () {
  for (var i = 0; i < 1000; i++) {
    console.log(i + " i");
    for (var j = i; j < 1000; j ++) {
      var k = 1000 - i - j;
      // console.log(j + " j");
      // console.log("${k} k");
    }
  }



}
