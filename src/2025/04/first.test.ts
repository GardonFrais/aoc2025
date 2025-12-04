import { describe, expect, test } from "vitest";
import { resolve } from "./first";

describe("04 2025 first step", () => {
  test("Should resolve first step of 04 2025", () => {
    expect(resolve("src/2025/04/input.test.txt")).toBe(13);
  });
});
