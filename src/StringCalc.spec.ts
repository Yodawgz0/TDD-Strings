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
});
