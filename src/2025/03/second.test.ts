import { describe, expect, test } from "vitest";
import { resolve } from "./second";

describe("03 2025 second step", () => {
  test("Should resolve second step of 03 2025", () => {
    expect(resolve("src/2025/03/input.test.txt")).toBe(3121910778619);
  });
});
