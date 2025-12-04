import { describe, expect, test } from "vitest";
import { isRollAccessible, resolve } from "./first";

describe("04 2025 first step", () => {
  test("Should resolve first step of 04 2025", () => {
    expect(resolve("src/2025/04/input.test.txt")).toBe(13);
  });
});

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
