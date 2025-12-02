import { describe, expect, test } from "vitest";
import { resolve } from "./second";

describe("01 2025 second step", () => {
  test("Should resolve second step of 01 2025", () => {
    expect(resolve("src/2025/01/input.test.txt")).toBe(6);
  });
});
