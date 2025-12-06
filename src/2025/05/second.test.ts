import { describe, expect, test } from "vitest";
import { resolve } from "./second";

describe("05 2025 second step", () => {
  test("Should resolve second step of 05 2025", () => {
    expect(resolve("src/2025/05/input.test.txt")).toBe(14);
  });
});
