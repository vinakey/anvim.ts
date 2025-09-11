// Simple test to see what AVIM.js does
const fs = require("fs");

// Read and eval the AVIM.js file
const avimCode = fs.readFileSync("./legacy/avim.js", "utf8");
eval(avimCode);

// Create AVIM instance
const avim = new AVIM();

console.log("=== Testing AVIM.js behavior ===");

// Test the problematic cases
const testCases = ["yej", "yesen", "tuyej", "tuyejet"];

testCases.forEach((testCase) => {
  console.log(`\nTesting: ${testCase}`);

  let result = "";
  for (let i = 0; i < testCase.length; i++) {
    const char = testCase[i];
    const beforeWord = result;

    // Call AVIM's main processing method
    const processed = avim.main(beforeWord, char, [
      "D",
      "A",
      "E",
      "O",
      "W",
      "W",
    ]);

    if (processed !== beforeWord) {
      result = processed;
    } else {
      result += char;
    }

    console.log(`  Step ${i + 1}: "${beforeWord}" + "${char}" = "${result}"`);
  }

  console.log(`  Final: ${result}`);
});
