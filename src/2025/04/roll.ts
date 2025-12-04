import { getSubMatrix } from "../../lib/getSubMatrix";

export const ROLL: string = "@";
const ACCESSIBLE_COUNT: number = 4;

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
