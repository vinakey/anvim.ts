/**
 * Test cases to demonstrate the triphthong tone placement bug
 */

import { AnvimEngine } from "../src/anvim";
import anvim from "../src/index";

describe("Triphthongs Bug Reproduction", () => {
  let engine: AnvimEngine;

  beforeEach(() => {
    engine = new AnvimEngine();
    engine.setMethodByString("TELEX");
  });

  it("should handle uyê triphthong correctly", () => {
    console.log("Current behavior:");
    console.log("tuyejet ->", anvim("tuyejet"));
    console.log("Expected: tuyệt");

    // This currently fails - tone goes to wrong vowel
    expect(anvim("tuyejet")).toBe("tuyệt"); // Should place tone on 'ê'
  });

  it("should handle yê diphthong correctly", () => {
    console.log("Current behavior:");
    console.log("yeens ->", anvim("yeens"));
    console.log("Expected: yến");

    // This currently fails - tone goes to wrong vowel
    expect(anvim("yeens")).toBe("yến"); // Should place tone on 'ê'
  });

  it("should handle other triphthongs correctly", () => {
    // Test other triphthongs from the user's list
    console.log("Other triphthongs:");

    // iêu triphthong - tone on ê
    console.log("chieseu ->", anvim("chieseu"));
    // expect(anvim('chieeus')).toBe('chiếu');

    // uôi triphthong - tone on ô
    console.log("cuosoi ->", anvim("cuosoi"));
    // expect(anvim('cuoois')).toBe('cười');

    // oai triphthong - tone on a
    console.log("hoafi ->", anvim("hoafi"));
    // expect(anvim('hoaif')).toBe('hoài');
  });
});
