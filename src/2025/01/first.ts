import { readFileSync } from 'fs';
import { splitIntoLines } from '../../lib/splitIntoLines';
import { mapPasswordEntry, type PasswordEntry } from './passwordEntry';



export const resolve = (filename: string): number => {
    let dialPointer: number = 50;
    let result: number = 0;

    const input: string = readFileSync(filename).toString();
    const passwordEntries: PasswordEntry[] = splitIntoLines(input).map(mapPasswordEntry);

    passwordEntries.forEach(passwordEntry => {
        dialPointer = passwordEntry.direction === 'R' ? dialPointer + passwordEntry.numberOfClicks : dialPointer - passwordEntry.numberOfClicks;
        if (dialPointer % 100 === 0) result++;
        dialPointer = Math.abs(dialPointer % 100) > 0 ? dialPointer % 100 : 100 + dialPointer % 100;
    })
    return result
}