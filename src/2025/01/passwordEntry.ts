export type Direction = "L" | "R";

export type PasswordEntry = {
  direction: Direction;
  numberOfClicks: number;
};

export const mapPasswordEntry = (input: string): PasswordEntry => {
  return {
    direction: input.charAt(0) as Direction,
    numberOfClicks: Number(input.substring(1)),
  };
};
