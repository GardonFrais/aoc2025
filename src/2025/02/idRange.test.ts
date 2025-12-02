import { describe, expect, test } from "vitest";
import {
  getInvalidIds,
  getInvalidIdsv2,
  mapStringToIdRange,
  type IdRange,
} from "./idRange";

describe("string to id range parser", () => {
  test("Should parse string to id range", () => {
    const expected: IdRange = {
      lowerRange: 10,
      upperRange: 20,
    };
    expect(mapStringToIdRange("10-20")).toStrictEqual(expected);
  });
});

describe("get invalid ids", () => {
  test("Should get 11 and 22 invalid ids", () => {
    const idRange: IdRange = {
      lowerRange: 11,
      upperRange: 22,
    };
    const expected = [11, 22];
    expect(getInvalidIds(idRange)).toStrictEqual(expected);
  });
  test("Should get 446446 invalid id", () => {
    const idRange: IdRange = {
      lowerRange: 446443,
      upperRange: 446449,
    };
    const expected = [446446];
    expect(getInvalidIds(idRange)).toStrictEqual(expected);
  });
});

describe("get invalid ids v2", () => {
  test("Should get 95 and 115 for v2 invalid ids", () => {
    const idRange: IdRange = {
      lowerRange: 95,
      upperRange: 115,
    };
    const expected = [99, 111];
    expect(getInvalidIdsv2(idRange)).toStrictEqual(expected);
  });
  test("Should get 446446 for v2 invalid id", () => {
    const idRange: IdRange = {
      lowerRange: 565653,
      upperRange: 565659,
    };
    const expected = [565656];
    expect(getInvalidIdsv2(idRange)).toStrictEqual(expected);
  });
});
