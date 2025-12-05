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
