export type Bank = {
  batteriesJoltage: number[];
};

export const mapStringToBank = (s: string): Bank => {
  return {
    batteriesJoltage: s.split("").map((digit) => Number(digit)),
  };
};

export const getMaxBankJoltage = (
  bank: Bank,
  maxJoltageDigits: number,
): number => {
  return bank.batteriesJoltage.reduce(
    (maxJoltage, currBatteryJoltage, index) => {
      for (let i = 1; i <= maxJoltageDigits; i++) {
        if (
          index < bank.batteriesJoltage.length - (maxJoltageDigits - i) &&
          currBatteryJoltage * Math.pow(10, maxJoltageDigits - i) >
            maxJoltage % Math.pow(10, maxJoltageDigits - (i - 1))
        ) {
          return (
            Math.floor(maxJoltage / Math.pow(10, maxJoltageDigits - (i - 1))) *
              Math.pow(10, maxJoltageDigits - (i - 1)) +
            currBatteryJoltage * Math.pow(10, maxJoltageDigits - i)
          );
        }
      }
      return maxJoltage;
    },
    0,
  );
};
