/**
 * Debug the tone placement logic to understand where the bug is
 */

import { AnvimEngine } from "../src/anvim";

describe("Debug Tone Placement", () => {
  let engine: AnvimEngine;

  beforeEach(() => {
    engine = new AnvimEngine();
    engine.setMethodByString("TELEX");
  });

  it("should debug tuyej step by step", () => {
    console.log("\n=== Debugging tuyej ===");

    // Step by step processing
    let result = "";
    const input = "tuyej";

    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      const before = result;
      result = engine.processWithKey(result, char);
      console.log(`Step ${i + 1}: "${before}" + "${char}" = "${result}"`);
    }

    console.log(`Final result: ${result}`);
    console.log(`Expected: tuyệ`);
  });

  it("should debug yej step by step", () => {
    console.log("\n=== Debugging yej ===");

    // Step by step processing
    let result = "";
    const input = "yej";

    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      const before = result;
      result = engine.processWithKey(result, char);
      console.log(`Step ${i + 1}: "${before}" + "${char}" = "${result}"`);
    }

    console.log(`Final result: ${result}`);
    console.log(`Expected: yệ`);
  });

  it("should debug yesen step by step", () => {
    console.log("\n=== Debugging yesen ===");

    // Step by step processing
    let result = "";
    const input = "yesen";

    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      const before = result;
      result = engine.processWithKey(result, char);
      console.log(`Step ${i + 1}: "${before}" + "${char}" = "${result}"`);
    }

    console.log(`Final result: ${result}`);
    console.log(`Expected: yến`);
  });
});
