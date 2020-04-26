// build a new string at each position to find how long until a character is repeated?
  // would be a pretty slow output but could work
const solution = (s) => {
    // Type your solution here
    let longestSubstring = 0;
    // iterate through whole string
    debugger;
    for (let i = 0; i < s.length; i++) {
        const substring = s.substring(i,s.length);
        const lengthUntilRepeat = findLengthUntilRepeat(substring);
        if (lengthUntilRepeat > longestSubstring) {
            longestSubstring = lengthUntilRepeat;
        }
    }
    return longestSubstring;
};

const findLengthUntilRepeat = (string) => {
    let uniqueCharString = '';
    debugger;
    for (let i = 0; i < string.length; i++) {
        let newChar = string.charAt(i);
        if (uniqueCharString.includes(newChar)) {
            return uniqueCharString.length;
        } else {
            uniqueCharString.concat(newChar);
        }
    }
    return uniqueCharString.length;
}

solution('finder');

// pass in the rest of the string
// iterate through until finding a repeat character
// return the length of the string before repeat
