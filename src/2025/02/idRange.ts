export type IdRange = {
  lowerRange: number;
  upperRange: number;
};

export const mapStringToIdRange = (s: string): IdRange => {
  return {
    lowerRange: Number(s.split("-")[0]),
    upperRange: Number(s.split("-")[1]),
  };
};

export const getInvalidIds = (idRange: IdRange): number[] => {
  const invalidIds: number[] = [];
  for (let i = idRange.lowerRange; i <= idRange.upperRange; i++) {
    const leftHalf: string = i
      .toString()
      .substring(0, Math.floor(i.toString().length / 2));

    const rightHalf: string = i
      .toString()
      .substring(Math.floor(i.toString().length / 2));

    if (leftHalf === rightHalf) invalidIds.push(i);
  }
  return invalidIds;
};

export const getInvalidIdsv2 = (idRange: IdRange): number[] => {
  const invalidIds: number[] = [];
  for (let i = idRange.lowerRange; i <= idRange.upperRange; i++) {
    if (i.toString().match(/^([0-9]+)(\1)(\1)*$/)) invalidIds.push(i);
  }
  return invalidIds;
};
