import { StringCalc } from "./StringCalc";
describe("StringCalc", () => {
  let strcalc: StringCalc;

  beforeEach(() => {
    strcalc = new StringCalc();
  });

  it("should return 0 for an empty string", () => {
    expect(strcalc.add("")).toBe(0);
  });
});
