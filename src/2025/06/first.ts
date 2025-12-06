import { readFileSync } from "fs";
import { splitIntoLines } from "../../lib/splitIntoLines";
import { WHITESPACE } from "../../lib/regex";
import { reverseMatrix } from "../../lib/reverseMatrix";
import { resolveProblem, type Problem } from "./problem";

export const resolve = (filename: string): number => {
  const input: string = readFileSync(filename).toString();
  const problems: Problem[] = reverseMatrix(
    splitIntoLines(input).map((s) =>
      s.split(WHITESPACE).filter((el) => el !== ""),
    ),
  ).map((problem) => ({
    numbers: problem.slice(0, -1).map((s) => Number(s)),
    operation: problem[problem.length - 1] as "+" | "*",
  }));
  return problems.reduce((sum, problem) => sum + resolveProblem(problem), 0);
};

console.log(resolve("src/2025/06/input.txt"));
