import { describe, it, expect } from "vitest";
import { findDupes } from "./duplicates.js";

describe("Duplicates", () => {
  describe("Find Duplicates", () => {
    it.concurrent("returns empty when inputs are empty", () => {
      expect(
        findDupes({
          left: [],
          right: [],
        })
      ).toEqual([]);
    });

    it.concurrent(
      "returns empty when no match is found (case sensitive)",
      () => {
        expect(
          findDupes({
            left: ["a"],
            right: ["A"],
          })
        ).toEqual([]);
      }
    );

    it.concurrent("returns multiple matches when found", () => {
      expect(
        findDupes({
          left: ["W", "h", "o", "u", "s", "d", "Y", "b", "j", "a"],
          right: ["A", "u", "o", "q", "u", "w", "e", "a"],
        })
      ).toEqual(expect.arrayContaining(["a", "o", "u"]));
    });

    it.concurrent("returns single match when found", () => {
      expect(
        findDupes({
          left: ["W", "j", "a"],
          right: ["A", "e", "u", "o", "j", "u", "w", "e"],
        })
      ).toEqual(expect.arrayContaining(["j"]));
    });
  });
});
