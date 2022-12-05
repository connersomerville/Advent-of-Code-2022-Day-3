type FindDupes = {
  left: string[];
  right: string[];
};

export const findDupes = ({ left, right }: FindDupes) => {
  const leftPouch = new Set([...left]);
  const rightPouch = new Set([...right]);

  let dupes: string[] = [];

  leftPouch.forEach((item) => {
    if (rightPouch.has(item)) {
      dupes.push(item);
    }
  });

  return dupes;
};
