import { readFileSync } from "fs";
import { getInvalidIds, mapStringToIdRange, type IdRange } from "./idRange";

export const resolve = (filename: string): number => {
  const input: string = readFileSync(filename).toString();
  const idRanges: IdRange[] = input.split(",").map(mapStringToIdRange);
  return idRanges
    .map((idRange) =>
      getInvalidIds(idRange).reduce((sum, invalidIds) => sum + invalidIds, 0),
    )
    .reduce((sum, invalidIds) => sum + invalidIds, 0);
};

// console.log(resolve("src/2025/02/input.txt"));
