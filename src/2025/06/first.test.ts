import { describe, expect, test } from "vitest";
import { resolve } from "./first";

describe("06 2025 first step", () => {
  test("Should resolve first step of 06 2025", () => {
    expect(resolve("src/2025/06/input.test.txt")).toBe(4277556);
  });
});
