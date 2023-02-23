const lengthOfLongestSubstring = require("../challenges/longestSubstringNoRepeat");
test("Returns longest substring of non repeating characters", () => {
  expect(lengthOfLongestSubstring("hello")).toBe(3);
  expect(lengthOfLongestSubstring("asdfdsdsds")).toBe(4);
  expect(lengthOfLongestSubstring("gobbledygook")).toBe(7);
  expect(lengthOfLongestSubstring("book")).toBe(2);
  expect(lengthOfLongestSubstring("shelf")).toBe(5);
  expect(lengthOfLongestSubstring("dvdfv")).toBe(3);
});
