export const getSubMatrix = <T>(
  matrix: T[][],
  startRow: number,
  startCol: number,
  length: number,
): T[][] => {
  return matrix
    .slice(startRow, startRow + length)
    .map((row) => row.slice(startCol, startCol + length));
};
