// You are going to be given a word. Your job is to return the
// middle character of the word. If the word's length is odd,
// return the middle character. If the word's length is even,
// return the middle 2 characters.

// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

// #Input
// A word (string) of length 0 < str < 1000
// (In javascript you may get slightly more than 1000 in some
// test cases due to an error in the test cases). You do not
// need to test for this. This is only here to tell you that
// you do not need to worry about your solution timing out.

// #Output
// The middle character(s) of the word represented as a string.

function getMiddle(s) {
  let middle = Math.floor(s.length / 2);
  if (s.length % 2 === 1) return s[middle];
  return s[middle - 1] + s[middle];
}

let s = "a";
console.log("Expect: a to =", getMiddle(s));
s = "ab";
console.log("Expect: ab to =", getMiddle(s));
s = "abc";
console.log("Expect: b to =", getMiddle(s));
s = "quadrouple";
console.log("Expect: ro to =", getMiddle(s));
s = "dumpsters";
console.log("Expect: s to =", getMiddle(s));