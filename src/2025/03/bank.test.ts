import { describe, expect, test } from "vitest";
import { getMaxBankJoltage, mapStringToBank, type Bank } from "./bank";

describe("bank mapper", () => {
  test("Should map string to bank", () => {
    const expected: Bank = {
      batteriesJoltage: [9, 8, 7, 6, 5, 4],
    };
    expect(mapStringToBank("987654")).toStrictEqual(expected);
  });
});

describe("extract bank max joltage", () => {
  test("Should return 98 max joltage", () => {
    const input: Bank = {
      batteriesJoltage: [9, 8, 7, 6, 5, 4],
    };
    expect(getMaxBankJoltage(input)).toStrictEqual(98);
  });
  test("Should return 62 max joltage", () => {
    const input: Bank = {
      batteriesJoltage: [1, 2, 6, 1, 1, 2],
    };
    expect(getMaxBankJoltage(input)).toStrictEqual(62);
  });
});
