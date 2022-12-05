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

type FindGroupDupes = {
  bags: string[][];
};

export const findGroupDupes = ({ bags: inputBags }: FindGroupDupes) => {
  const bags = inputBags.sort((a, b) => a.length - b.length); // smallest to largest
  const comparitorBag = bags.shift();
  const otherBags = bags.map((bag) => new Set(bag));

  if (!comparitorBag) {
    return;
  }

  let dupe;

  for (const itemType of comparitorBag) {
    if (otherBags.every((otherBag) => otherBag.has(itemType))) {
      dupe = itemType;
      break;
    }
  }

  return dupe;
};
