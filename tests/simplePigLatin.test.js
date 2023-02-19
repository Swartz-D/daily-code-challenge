const pigIt = require("../challenges/simplePigLatin");
test("Returns string in Pig Latin", () => {
  expect(pigIt("Thank you")).toBe("hankTay ouyay");
});
