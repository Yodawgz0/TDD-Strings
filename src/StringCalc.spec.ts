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
});
