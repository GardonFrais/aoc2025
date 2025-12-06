import { readFileSync } from "fs";
import { getInvalidIdsv2, mapStringToIdRange, type IdRange } from "./idRange";

export const resolve = (filename: string): number => {
  const input: string = readFileSync(filename).toString();
  const idRanges: IdRange[] = input.split(",").map(mapStringToIdRange);
  return idRanges
    .map((idRange) =>
      getInvalidIdsv2(idRange).reduce((sum, invalidIds) => sum + invalidIds, 0),
    )
    .reduce((sum, invalidIds) => sum + invalidIds, 0);
};

// console.log(resolve("src/2025/02/input.txt"));
