import { describe, expect, test } from "vitest";
import type { IdRange } from "../02/idRange";
import {
  isIngredientInRange,
  mapStringToFreshRange,
  type FreshRange,
} from "./freshRange";

describe("string to id range parser", () => {
  test("Should parse string to id range", () => {
    const expected: IdRange = {
      lowerRange: 10,
      upperRange: 20,
    };
    expect(mapStringToFreshRange("10-20")).toStrictEqual(expected);
  });
});

describe("is ingredient in fresh range", () => {
  test("Should be in fresh range", () => {
    const range: FreshRange = {
      lowerRange: 3,
      upperRange: 10,
    };
    expect(isIngredientInRange(7, range)).toStrictEqual(true);
  });
  test("Shouldnt be in fresh range", () => {
    const range: FreshRange = {
      lowerRange: 3,
      upperRange: 10,
    };
    expect(isIngredientInRange(12, range)).toStrictEqual(false);
  });
  test("Shouldnt be in fresh range 2", () => {
    const range: FreshRange = {
      lowerRange: 3,
      upperRange: 10,
    };
    expect(isIngredientInRange(1, range)).toStrictEqual(false);
  });
});
