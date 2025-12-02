import { readFileSync } from 'fs';
import { splitIntoLines } from '../../lib/splitIntoLines';
import { mapPasswordEntry, type PasswordEntry } from './passwordEntry';



export const resolve = (filename: string): number => {
    let dialPointer: number = 50;
    let result: number = 0;

    const input: string = readFileSync(filename).toString();
    const passwordEntries: PasswordEntry[] = splitIntoLines(input).map(mapPasswordEntry)

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