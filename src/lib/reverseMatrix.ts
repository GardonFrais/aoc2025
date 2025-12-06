export const reverseMatrix = <T>(matrix: T[][]) => {
  const result: T[][] = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      if (!result[column]) result[column] = [];
      result[column][row] = matrix[row][column];
    }
  }
  return result;
};
