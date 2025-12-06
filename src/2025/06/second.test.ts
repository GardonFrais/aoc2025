import { describe, expect, test } from "vitest";
import { resolve } from "./second";

describe("06 2025 second step", () => {
  test("Should resolve second step of 06 2025", () => {
    expect(resolve("src/2025/06/input.test.txt")).toBe(3263827);
  });
});
