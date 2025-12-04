import { describe, expect, test } from "vitest";
import { resolve } from "./second";

describe("04 2025 second step", () => {
  test("Should resolve second step of 04 2025", () => {
    expect(resolve("src/2025/04/input.test.txt")).toBe(43);
  });
});
