import { readFileSync } from "fs";
import { splitIntoLines } from "../../lib/splitIntoLines";
import { getSubMatrix } from "../../lib/getSubMatrix";

const ROLL: string = "@";
const ACCESSIBLE_COUNT: number = 4;

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

export const isRollAccessible = (
  rollsGrid: string[][],
  row: number,
  column: number,
): boolean => {
  if (!rollsGrid[row] || rollsGrid[row][column] !== ROLL) return false;
  return (
    getSubMatrix(rollsGrid, row - 1, column - 1, 3)
      .flat()
      .filter((slot) => slot === ROLL).length -
      1 <
    ACCESSIBLE_COUNT
  );
};
