import { describe, expect, test } from "vitest";
import { resolve } from "./first";

describe("01 2025 first step", () => {
  test("Should resolve first step of 01 2025", () => {
    expect(resolve("src/2025/02/input.test.txt")).toBe(1227775554);
  });
});
