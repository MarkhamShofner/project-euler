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

console.log(sumSquareDif(100));
