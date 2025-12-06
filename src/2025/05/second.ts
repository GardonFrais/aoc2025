import { readFileSync } from "fs";
import { EMPTYLINE } from "../../lib/regex";
import { splitIntoLines } from "../../lib/splitIntoLines";
import {
  areFreshRangesOverlapping,
  mapStringToFreshRange,
  type FreshRange,
} from "./freshRange";

export const resolve = (filename: string): number => {
  const input: string = readFileSync(filename).toString();
  const [freshRangesString] = input.split(EMPTYLINE);

  if (!freshRangesString) return 0;

  const freshRanges: FreshRange[] = splitIntoLines(freshRangesString)
    .map(mapStringToFreshRange)
    .sort(
      (freshRange, nextFreshRange) =>
        freshRange.lowerRange - nextFreshRange.lowerRange,
    )
    .reduce((concatFreshRanges: FreshRange[], freshRange: FreshRange) => {
      const previousFreshRange: FreshRange | undefined =
        concatFreshRanges[concatFreshRanges.length - 1];
      if (!previousFreshRange) return [freshRange];
      if (!areFreshRangesOverlapping(freshRange, previousFreshRange)) {
        concatFreshRanges.push(freshRange);
        return concatFreshRanges;
      }
      const newFreshRange: FreshRange = {
        lowerRange: Math.min(
          previousFreshRange.lowerRange,
          freshRange.lowerRange,
        ),
        upperRange: Math.max(
          previousFreshRange.upperRange,
          freshRange.upperRange,
        ),
      };

      concatFreshRanges[concatFreshRanges.length - 1] = newFreshRange;
      return concatFreshRanges;
    }, []);
  return freshRanges.reduce(
    (count: number, freshRange: FreshRange) =>
      count + freshRange.upperRange - freshRange.lowerRange + 1,
    0,
  );
};
// console.log(resolve("src/2025/05/input.txt"));
