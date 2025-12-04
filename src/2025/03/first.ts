import { readFileSync } from "fs";
import { splitIntoLines } from "../../lib/splitIntoLines";
import { getMaxBankJoltage, mapStringToBank, type Bank } from "./bank";

export const resolve = (filename: string): number => {
  const input: string = readFileSync(filename).toString();
  const banks: Bank[] = splitIntoLines(input).map(mapStringToBank);
  return banks.reduce((acc, bank) => acc + getMaxBankJoltage(bank, 2), 0);
};

console.log(resolve("src/2025/03/input.txt"));
