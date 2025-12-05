import { describe, expect, test } from "vitest";
import { resolve } from "./first";

describe("05 2025 first step", () => {
  test("Should resolve first step of 05 2025", () => {
    expect(resolve("src/2025/05/input.test.txt")).toBe(3);
  });
});
