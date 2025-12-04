import { describe, expect, test } from "vitest";
import { getSubMatrix } from "./getSubMatrix";

describe("get submatrix", () => {
  test("should return submatrix 2x2", () => {
    const input: string[][] = [
      ["A", "B", "C", "D"],
      ["D", "E", "F", "G"],
      ["H", "I", "J", "K"],
      ["L", "M", "N", "O"],
    ];
    const expected: string[][] = [
      ["F", "G"],
      ["J", "K"],
    ];
    expect(getSubMatrix(input, 1, 2, 2)).toStrictEqual(expected);
  });
  test("should return limit case submatrix", () => {
    const input: string[][] = [
      ["A", "B", "C", "D"],
      ["D", "E", "F", "G"],
      ["H", "I", "J", "K"],
      ["L", "M", "N", "O"],
    ];
    const expected: string[][] = [["O"]];
    expect(getSubMatrix(input, 3, 3, 2)).toStrictEqual(expected);
  });

  test("should return list for limit negative row col", () => {
    const input: string[][] = [
      ["A", "B", "C", "D"],
      ["D", "E", "F", "G"],
      ["H", "I", "J", "K"],
      ["L", "M", "N", "O"],
    ];
    const expected: string[][] = [["A"]];
    expect(getSubMatrix(input, -1, -1, 2)).toStrictEqual(expected);
  });
});
