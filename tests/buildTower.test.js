const towerBuilder = require("../challenges/buildTower");
test("returns semetrical tower of * and spaces", () => {
  expect(towerBuilder(1)).toEqual(["*"]);
  expect(towerBuilder(2)).toEqual([" * ", "***"]);
  expect(towerBuilder(3)).toEqual(["  *  ", " *** ", "*****"]);
});
