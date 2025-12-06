import { describe, expect, test } from "vitest";
import { resolveProblem, type Problem } from "./problem";

describe("Problem resolution", () => {
  test("Should resolve addition problem", () => {
    const input: Problem = {
      numbers: [1, 6, 8, 4],
      operation: "+",
    };
    expect(resolveProblem(input)).toStrictEqual(19);
  });
  test("Should resolve multiplication problem", () => {
    const input: Problem = {
      numbers: [1, 6, 8, 4],
      operation: "*",
    };
    expect(resolveProblem(input)).toStrictEqual(192);
  });
});
