import { describe, it, expect } from "vitest";
import { findDupes, findGroupDupes } from "./duplicates.js";

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

  describe("Find Duplicates in Group", () => {
    it.concurrent("throws on empty", () => {
      expect(
        findGroupDupes({
          bags: [],
        })
      ).toBeUndefined();
    });

    it.concurrent(
      "returns undefined when duplicate is not found in all bags",
      () => {
        expect(
          findGroupDupes({
            bags: [
              ["v", "J", "r"],
              ["j", "q", "m"],
              ["P", "m", "m"],
            ],
          })
        ).toBeUndefined();
      }
    );

    it.concurrent("returns first dupe found", () => {
      expect(
        findGroupDupes({
          bags: [
            ["v", "a", "b"],
            ["a", "q", "b"],
            ["P", "a", "b"],
          ],
        })
      ).toEqual("a");
    });

    it.concurrent("returns expected result", () => {
      expect(
        findGroupDupes({
          bags: [
            [
              "v",
              "J",
              "r",
              "w",
              "p",
              "W",
              "t",
              "w",
              "J",
              "g",
              "W",
              "r",
              "h",
              "c",
              "s",
              "F",
              "M",
              "M",
              "f",
              "F",
              "F",
              "h",
              "F",
              "p",
            ],
            [
              "j",
              "q",
              "H",
              "R",
              "N",
              "q",
              "R",
              "j",
              "q",
              "z",
              "j",
              "G",
              "D",
              "L",
              "G",
              "L",
              "r",
              "s",
              "F",
              "M",
              "f",
              "F",
              "Z",
              "S",
              "r",
              "L",
              "r",
              "F",
              "Z",
              "s",
              "S",
              "L",
            ],
            [
              "P",
              "m",
              "m",
              "d",
              "z",
              "q",
              "P",
              "r",
              "V",
              "v",
              "P",
              "w",
              "w",
              "T",
              "W",
              "B",
              "w",
              "g",
            ],
          ],
        })
      ).toEqual("r");
    });
  });
});
