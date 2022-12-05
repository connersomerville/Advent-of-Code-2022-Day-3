import { assert } from "console";
import { findDupes } from "./duplicates.js";
import { getPriority } from "./priorities.js";
import { getLineReader } from "./reader.js";

const args = process.argv.slice(2);
const filePath = args[0] || "test/fixtures/input.txt";

const lineReader = getLineReader({
  filePath,
});

let totalPriority = 0;

lineReader.on("line", (line) => {
  const halfway = Math.ceil(line.length / 2);
  const leftPouch = line.slice(0, halfway);
  const rightPouch = line.slice(halfway, line.length);

  assert(leftPouch.length === rightPouch.length, "mismatching pouches!");

  const duplicatePresents = findDupes({
    left: leftPouch.split(""),
    right: rightPouch.split(""),
  });

  duplicatePresents.forEach(
    (duplicatePresent) =>
      (totalPriority += getPriority({
        itemType: duplicatePresent,
      }))
  );

  console.log(
    `Left pouch ${leftPouch} and right pouch ${rightPouch} share ${JSON.stringify(
      duplicatePresents
    )}`
  );
});

lineReader.on("close", () => {
  console.log(`Total priority of the duplicate items is ${totalPriority}`);
});
