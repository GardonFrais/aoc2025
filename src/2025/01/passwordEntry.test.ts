import { describe, expect, test } from "vitest"
import { mapPasswordEntry, type PasswordEntry } from "./passwordEntry"

describe("parse password entries", () => {
    test("Should parse single password entry L", () => {
        const expected: PasswordEntry = {direction: 'L', numberOfClicks: 68}
        expect(mapPasswordEntry('L68')).toStrictEqual(expected)
    })
    test("Should parse single password entry R", () => {
        const expected: PasswordEntry = {direction: 'R', numberOfClicks: 68}
        expect(mapPasswordEntry('R68')).toStrictEqual(expected)
    })
})