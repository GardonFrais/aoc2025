import { describe, expect, test } from "vitest"
import { mapPasswordEntry, parsePasswordEntries, resolve, type PasswordEntry } from "./first"

describe("01 2025 first step", () => {
    test("Should resolve first step of 01 2025", () => {
        expect(resolve('src/2025/01/input.test.txt')).toBe(3)
    })
})

describe("parse password entries", () => {
    test("Should parse single password entry", () => {
        const expected: PasswordEntry = {direction: 'L', numberOfClicks: 68}
        expect(mapPasswordEntry('L68')).toStrictEqual(expected)
    })
    test("Should parse password entries from string", () => {
        const expected: PasswordEntry[] = [
            {direction: 'L', numberOfClicks: 68},
            {direction: 'L', numberOfClicks: 30},
            {direction: 'R', numberOfClicks: 48},
            {direction: 'L', numberOfClicks: 5},
        ]
        expect(parsePasswordEntries('L68\nL30\nR48\nL5')).toStrictEqual(expected)
    })
})