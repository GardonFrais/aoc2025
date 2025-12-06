import { describe, expect, test } from "vitest";
import { reverseMatrix } from "./reverseMatrix";

describe("reverse matrix", () => {
  test("should reverse 3x3 matrix", () => {
    const input: string[][] = [
      ["A", "B", "C"],
      ["D", "E", "F"],
      ["G", "H", "I"],
    ];
    const expected: string[][] = [
      ["A", "D", "G"],
      ["B", "E", "H"],
      ["C", "F", "I"],
    ];
    expect(reverseMatrix(input)).toStrictEqual(expected);
  });
  test("should reverse 3x2 matrix", () => {
    const input: string[][] = [
      ["A", "B", "C"],
      ["D", "E", "F"],
    ];
    const expected: string[][] = [
      ["A", "D"],
      ["B", "E"],
      ["C", "F"],
    ];
    expect(reverseMatrix(input)).toStrictEqual(expected);
  });
  test("should reverse 2x3 matrix", () => {
    const input: string[][] = [
      ["A", "B"],
      ["C", "D"],
      ["E", "F"],
    ];
    const expected: string[][] = [
      ["A", "C", "E"],
      ["B", "D", "F"],
    ];
    expect(reverseMatrix(input)).toStrictEqual(expected);
  });
});
