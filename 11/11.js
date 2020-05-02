// input: string
// output: boolean on whether or not the string can be rearranged into a palindrome


// downcase all chars
// remove all whitespace

// check count of all characters
// if character is even, then it can be massaged into a palindrome
// only one character can be in the string where the char count is odd


const canBePalindrome = (string) => {
	string = string.toLowerCase().replace(/ /g,'');
	let charCountArray = [];
	// forEach char in string loop?
	for (let i=0; i<string.length; i++) {
		const charValue = string.charCodeAt(i);
		if (charCountArray[charValue] === undefined) {
			charCountArray[charValue] = 1;
		} else {
			charCountArray[charValue]++;
		}
}

let countOfOdds = 0;
charCountArray.forEach((cC) => {
	if (cC %2 !== 0) {
		countOfOdds++;
	}
});
    console.log('hi');
  return true;
//   console.log(countOfOdds);
// if (countOfOdds > 1) {
// 	return false;
// } else {
// 	return true;
// }
}




console.log(canBePalindrome('abaa'));

/* General
Minimum O(k) + 128
*/

/* Outstanding questions
how to deal with numbers in the string

*/

/* Questions to follow up on
Ascii or unicode? How many asci characters?
*/
