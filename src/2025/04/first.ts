import { readFileSync } from "fs";
import { splitIntoLines } from "../../lib/splitIntoLines";
import { isRollAccessible } from "./roll";

export const resolve = (filename: string): number => {
  const input: string = readFileSync(filename).toString();
  const rollsGrid: string[][] = splitIntoLines(input).map((line) =>
    line.split(""),
  );

  let accessibleRollsNumber: number = 0;
  for (let row = 0; row < rollsGrid.length; row++) {
    for (let column = 0; column < rollsGrid[row].length; column++) {
      if (isRollAccessible(rollsGrid, row, column)) {
        accessibleRollsNumber++;
      }
    }
  }
  return accessibleRollsNumber;
};
