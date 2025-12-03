export type Bank = {
  batteriesJoltage: number[];
};

export const mapStringToBank = (s: string): Bank => {
  return {
    batteriesJoltage: s.split("").map((digit) => Number(digit)),
  };
};

export const getMaxBankJoltage = (bank: Bank): number => {
  return bank.batteriesJoltage.reduce(
    (maxJoltage, currBatteryJoltage, index) => {
      const maxJoltageTenth = Math.floor(maxJoltage / 10);
      const maxJoltageDigit = maxJoltage % 10;
      if (
        index < bank.batteriesJoltage.length - 1 &&
        currBatteryJoltage * 10 > maxJoltage
      )
        return currBatteryJoltage * 10;
      else if (currBatteryJoltage > maxJoltageDigit)
        return maxJoltageTenth * 10 + currBatteryJoltage;
      else return maxJoltage;
    },
    0,
  );
};
