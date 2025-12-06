import { readFileSync } from "fs";
import { splitIntoLines } from "../../lib/splitIntoLines";
import { WHITESPACE } from "../../lib/regex";
import { reverseMatrix } from "../../lib/reverseMatrix";
import { resolveProblem, type Problem } from "./problem";

export const resolve = (filename: string): number => {
  const input: string = readFileSync(filename).toString();
  // const problems: Problem[] = reverseMatrix(
  //   splitIntoLines(input).map((s) => s.split("")),
  // ).map((problem) => ({
  //   numbers: problem.slice(0, -1).map((s) => Number(s)),
  //   operation: problem[problem.length - 1] as "+" | "*",
  // }));

  const problemsStrings: string[] = reverseMatrix(
    splitIntoLines(input).map((s) => s.split("")),
  ).map((arr) => arr.join(""));

  const problems: Problem[] = [];
  let problem: Problem = { numbers: [], operation: "+" };
  problemsStrings.forEach((numberString, index) => {
    if (numberString.trim().length <= 0) {
      problems.push(problem);
      problem = { numbers: [], operation: "+" };
      return;
    }
    const operation: "+" | "*" | "" = numberString.split("").pop() as
      | "+"
      | "*"
      | "";
    if (operation === "+" || operation === "*") problem.operation = operation;
    problem.numbers.push(
      Number(numberString.substring(0, numberString.length - 1).trim()),
    );
    if (index >= problemsStrings.length - 1) {
      problems.push(problem);
      return;
    }
  });
  return problems.reduce((sum, problem) => sum + resolveProblem(problem), 0);
};

// console.log(resolve("src/2025/06/input.txt"));
