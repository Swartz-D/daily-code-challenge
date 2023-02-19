const getMiddle = require("../challenges/getTheMiddleCharacter");
test("Returns the middle character for odd and middle 2 characters for even", () => {
  expect(getMiddle("food")).toBe("oo");
});
