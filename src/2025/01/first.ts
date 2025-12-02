import { readFileSync } from 'fs';
import { splitIntoLines } from '../../lib/splitIntoLines';

export type Direction = 'L' | 'R'
export type PasswordEntry = {
    direction: Direction
    numberOfClicks: number
}

export const resolve = (filename: string): number => {
    let dialPointer: number = 50;
    let result: number = 0;

    const input: string = readFileSync(filename).toString();
    const passwordEntries: PasswordEntry[] = parsePasswordEntries(input);

    passwordEntries.forEach(passwordEntry => {
        dialPointer = passwordEntry.direction === 'R' ? dialPointer + passwordEntry.numberOfClicks : dialPointer - passwordEntry.numberOfClicks;
        while(dialPointer > 99 || dialPointer < 0) {
            if (dialPointer < 0) dialPointer = 100 + dialPointer;
            if (dialPointer > 99) dialPointer = dialPointer - 100;
        }
        if (dialPointer === 0) result++;
    })
    return result
}

export const parsePasswordEntries = (input: string): PasswordEntry[] => {
    return splitIntoLines(input).map(mapPasswordEntry)
}

export const mapPasswordEntry = (input: string): PasswordEntry => {
    return {
        direction: input.charAt(0) as Direction,
        numberOfClicks: Number(input.substring(1))
    }
}