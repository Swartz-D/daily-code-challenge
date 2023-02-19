const timeConversion = require("../challenges/timeConversion");
test("converts 12 hour time to 24 hour time using HH:MM:SSAM format", () => {
  expect(timeConversion("06:23:17PM")).toBe("18:23:17");
  expect(timeConversion("12:23:17AM")).toBe("00:23:17");
  expect(timeConversion("11:20:00PM")).toBe("23:20:00");
});
