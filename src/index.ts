import { findGroupDupes } from "./duplicates.js";
import { getPriority } from "./priorities.js";
import { getLineReader } from "./reader.js";

const args = process.argv.slice(2);
const filePath = args[0] || "test/fixtures/input.txt";

const lineReader = getLineReader({
  filePath,
});

let totalPriority = 0;
let currentGroup: string[] = [];

lineReader.on("line", (line) => {
  currentGroup.push(line);

  if (currentGroup.length === 3) {
    const badge = findGroupDupes({
      bags: currentGroup.map((bag) => bag.split("")),
    });

    if (!badge) {
      return console.error(
        `Failed to find badge for group ${JSON.stringify(currentGroup)}`
      );
    }

    console.log(`Group ${JSON.stringify(currentGroup)} has badge ${badge}`);

    totalPriority += getPriority({
      itemType: badge,
    });

    return (currentGroup = []);
  }
});

lineReader.on("close", () => {
  console.log(`Total priority of the duplicate items is ${totalPriority}`);
});
