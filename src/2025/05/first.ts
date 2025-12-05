import { readFileSync } from "fs";
import { EMPTYLINE } from "../../lib/regex";
import { splitIntoLines } from "../../lib/splitIntoLines";
import {
  isIngredientInRange,
  mapStringToFreshRange,
  type FreshRange,
} from "./freshRange";

export const resolve = (filename: string): number => {
  const input: string = readFileSync(filename).toString();
  const [freshRangesString, ingredientsIdsString] = input.split(EMPTYLINE);

  if (!freshRangesString || !ingredientsIdsString) return 0;

  const freshRanges: FreshRange[] = splitIntoLines(freshRangesString).map(
    mapStringToFreshRange,
  );
  const ingredientsIds: number[] = splitIntoLines(ingredientsIdsString).map(
    (ingredientId) => Number(ingredientId),
  );

  const freshIngredients = ingredientsIds.filter(
    (ingredientId) =>
      freshRanges.filter((freshRange) =>
        isIngredientInRange(ingredientId, freshRange),
      ).length > 0,
  );

  return freshIngredients.length;
};

console.log(resolve("src/2025/05/input.txt"));
