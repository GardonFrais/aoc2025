import { describe, expect, test } from "vitest";
import { isRollAccessible } from "./roll";

describe("is roll accessible", () => {
  test("roll should be accessible", () => {
    const input: string[][] = [
      ["@", ".", "."],
      [".", "@", "."],
      [".", "@", "."],
    ];
    expect(isRollAccessible(input, 1, 1)).toBe(true);
  });
  test("roll not should be accessible", () => {
    const input: string[][] = [
      ["@", ".", "@"],
      [".", "@", "@"],
      [".", "@", "@"],
    ];
    expect(isRollAccessible(input, 1, 1)).toBe(false);
  });
  test("there should be no roll", () => {
    const input: string[][] = [
      ["@", ".", "@"],
      [".", ".", "."],
      [".", "@", "."],
    ];
    expect(isRollAccessible(input, 1, 1)).toBe(false);
  });
});
