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

// sums to 1000?
// product

//actual call function
function mainCall (ax, bx, cx) {
  isTriplet (ax, bx, cx);

}
