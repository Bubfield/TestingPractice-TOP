import capitalize from "./capitalize";
import reverseStr from "./reverseStr";
import calculator from "./calculator";
import caesarCipher from "./caesarCipher";
import analyzeArray from "./analyzeArray";

test("returns a string with its first letter capitalized", () => {
  expect(capitalize("bub")).toBe("Bub");
});

test("returns a string that has been reversed", () => {
  expect(reverseStr("nothing")).toBe("gnihton");
});

test("takes two numbers and either adds, subtracts, multiplies, or divides them", () => {
  expect(calculator.add(3, 25)).toBe(28);
  expect(calculator.subtract(3, 25)).toBe(-22);
  expect(calculator.multiply(3, 25)).toBe(75);
  expect(calculator.divide(27, 3)).toBe(9);
});

test("takes a lowercase string and a number that shifts the string either num places to the right if positive or num places to the left if negative", () => {
  expect(caesarCipher("bubfield", 10)).toBe("lelpsovn");
});

test("returns an object with average, min, max, and length properties", () => {
  const object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(object);
});
