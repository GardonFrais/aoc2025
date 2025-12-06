export type FreshRange = {
  lowerRange: number;
  upperRange: number;
};

export const mapStringToFreshRange = (s: string): FreshRange => {
  return {
    lowerRange: Number(s.split("-")[0]),
    upperRange: Number(s.split("-")[1]),
  };
};

export const isIngredientInRange = (id: number, range: FreshRange): boolean => {
  return id >= range.lowerRange && id <= range.upperRange;
};

export const areFreshRangesOverlapping = (
  rangeA: FreshRange,
  rangeB: FreshRange,
): boolean => {
  return (
    (rangeA.upperRange >= rangeB.lowerRange &&
      rangeA.upperRange <= rangeB.upperRange) ||
    (rangeA.lowerRange >= rangeB.lowerRange &&
      rangeA.lowerRange <= rangeB.upperRange) ||
    (rangeB.upperRange >= rangeA.lowerRange &&
      rangeB.upperRange <= rangeA.upperRange) ||
    (rangeB.lowerRange >= rangeA.lowerRange &&
      rangeB.lowerRange <= rangeA.upperRange)
  );
};
