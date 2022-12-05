const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const itemPriorities = new Map<string, number>(
  [...ALPHABET.split(""), ...ALPHABET.toUpperCase().split("")].map(
    (itemType, idx) => [itemType, idx + 1]
  )
);
type GetPriority = {
  itemType: string;
};
export const getPriority = ({ itemType }: GetPriority) => {
  return itemPriorities.get(itemType) || 0;
};
