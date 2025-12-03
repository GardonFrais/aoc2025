import { readFileSync } from "fs";
import { splitIntoLines } from "../../lib/splitIntoLines";
import { getMaxBankJoltage, mapStringToBank, type Bank } from "./bank";

export const resolve = (filename: string): number => {
  const input: string = readFileSync(filename).toString();
  const banks: Bank[] = splitIntoLines(input).map(mapStringToBank);
  return banks.reduce((acc, bank) => acc + getMaxBankJoltage(bank), 0);
};
