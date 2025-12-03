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
    expect(getMaxBankJoltage(input, 2)).toStrictEqual(98);
  });
  test("Should return 62 max joltage", () => {
    const input: Bank = {
      batteriesJoltage: [1, 2, 6, 1, 1, 2],
    };
    expect(getMaxBankJoltage(input, 2)).toStrictEqual(62);
  });
});

describe("extract bank max joltage v2", () => {
  test("Should return 987654321111 max joltage", () => {
    const input: Bank = {
      batteriesJoltage: [9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1],
    };
    expect(getMaxBankJoltage(input, 12)).toStrictEqual(987654321111);
  });
  test("Should return 434234234278 max joltage", () => {
    const input: Bank = {
      batteriesJoltage: [2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 7, 8],
    };
    expect(getMaxBankJoltage(input, 12)).toStrictEqual(434234234278);
  });
});
