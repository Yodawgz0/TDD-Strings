import { StringCalc } from "./StringCalc";
describe("StringCalc", () => {
  let strcalc: StringCalc;

  beforeEach(() => {
    strcalc = new StringCalc();
  });
  // Test 0
  it("should return 0 for an empty string", () => {
    expect(strcalc.add("")).toBe(0);
  });

  // Test 1
  it("should return the number itself if the string contains one number", () => {
    expect(strcalc.add("1")).toBe(1);
    expect(strcalc.add("5")).toBe(5);
  });

  // Test 3
  it("should return the sum of two comma-separated numbers", () => {
    expect(strcalc.add("8,2")).toBe(10);
  });

  // Test 4
  it("should handle an arbitrary number of numbers", () => {
    expect(strcalc.add("17,2,3,5")).toBe(27);
  });

  // Test 5
  it("should handle new lines as delimiters", () => {
    expect(strcalc.add("1\n2,3")).toBe(6);
  });

  // Test 6
  it("should support custom delimiters", () => {
    expect(strcalc.add("//;\n1;2")).toBe(3);
    expect(strcalc.add("//#\n2#3#4")).toBe(9);
  });

  // Test 7
  it("should throw an exception for negative numbers", () => {
    expect(() => strcalc.add("1,-2,3,-4")).toThrow(
      "Negative numbers not allowed: -2, -4",
    );
  });

  // Test 8
  it("should ignore numbers above 1000 for addition", () => {
    expect(strcalc.add("1, 1001")).toBe(1);
    expect(strcalc.add("//#\n2#1010#4")).toBe(6);
  });

  // Test 9
  it("should consider n length of the delimiter and provide with sum", () => {
    expect(strcalc.add("//***\n1***2***3")).toBe(6);
    expect(strcalc.add("//%%%\n1%%%2%%%3")).toBe(6);
  });
});
