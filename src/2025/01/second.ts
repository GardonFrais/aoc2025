import { readFileSync } from 'fs';
import { mapPasswordEntry, type PasswordEntry } from './passwordEntry';
import { splitIntoLines } from '../../lib/splitIntoLines';

export const resolve = (filename: string): number => {
    let dialPointer: number = 50;
    let result: number = 0;

    const input: string = readFileSync(filename).toString();
    const passwordEntries: PasswordEntry[] = splitIntoLines(input).map(mapPasswordEntry);

    passwordEntries.forEach(passwordEntry => {
        if (dialPointer === 0 && passwordEntry.direction === 'L') result--;
        dialPointer = passwordEntry.direction === 'R' ? dialPointer + passwordEntry.numberOfClicks : dialPointer - passwordEntry.numberOfClicks;
        result += Math.abs(Math.floor(dialPointer / 100));
        if (dialPointer === 0) result++;
        if (dialPointer < 0 && dialPointer % 100 === 0) result++;
        dialPointer = dialPointer % 100 >= 0 ? dialPointer % 100 : 100 + (dialPointer % 100);
    })
    return result;
}