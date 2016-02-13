console.log("hello");

// the goal is to find the xth prime number
// in this case, specifically the 10,001st

// counter of primes found

// loop to test if prime, and add to counter


// the question
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

var ceiling;
// square numbers
function square (x) {
    return x*x;
}

// sum numbers


// sum square
function sumSquare (x) {
    var sum = 0;
    for (var i = 1; i<=x; i++) {
        sum += square(i);
    }
    return sum;
}

// square sum
function squareSum (x) {
    var sum = 0;
    for (var i = 1; i<=x; i++) {
        sum += i;
    }
    return square(sum);
}

// find the sum square difference
function sumSquareDif (x) {
    return squareSum(x) - sumSquare(x);
}


console.log(sumSquare(10));
console.log(squareSum(10));
console.log(sumSquareDif (100));
