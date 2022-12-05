import { describe, it, expect } from "vitest";
import { getPriority } from "./priorities.js";

describe("Priorities", () => {
  it.concurrent(
    "returns priority as a function of its order a = 1, Z = 52",
    () => {
      expect(
        getPriority({
          itemType: "a",
        })
      ).toEqual(1);

      expect(
        getPriority({
          itemType: "z",
        })
      ).toEqual(26);

      expect(
        getPriority({
          itemType: "A",
        })
      ).toEqual(27);
      expect(
        getPriority({
          itemType: "Z",
        })
      ).toEqual(52);
    }
  );
  it.concurrent("returns 0 for unmatched codes", () => {
    expect(
      getPriority({
        itemType: "&",
      })
    ).toEqual(0);

    expect(
      getPriority({
        itemType: "1",
      })
    ).toEqual(0);
  });
});
