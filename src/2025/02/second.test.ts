import { describe, expect, test } from "vitest";
import { resolve } from "./second";

describe("02 2025 second step", () => {
  test("Should resolve second step of 02 2025", () => {
    expect(resolve("src/2025/02/input.test.txt")).toBe(4174379265);
  });
});
