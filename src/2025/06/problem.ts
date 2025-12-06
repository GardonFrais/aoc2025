export type Problem = {
  numbers: number[];
  operation: "*" | "+";
};

export const resolveProblem = (problem: Problem) => {
  if (problem.operation === "*")
    return problem.numbers.reduce((result, number) => result * number, 1);
  return problem.numbers.reduce((result, number) => result + number, 0);
};
