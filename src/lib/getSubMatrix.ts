export const getSubMatrix = <T>(
  matrix: T[][],
  startRow: number,
  startCol: number,
  length: number,
): T[][] => {
  return matrix
    .slice(startRow < 0 ? 0 : startRow, startRow + length)
    .map((row) => row.slice(startCol < 0 ? 0 : startCol, startCol + length));
};
