import { describe, expect, test } from "vitest";
import { resolve } from "./first";

describe("03 2025 first step", () => {
  test("Should resolve first step of 03 2025", () => {
    expect(resolve("src/2025/03/input.test.txt")).toBe(357);
  });
});
