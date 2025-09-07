# anvim

**ANVIM** - **A** **N**ew **V**ietnamese **I**nput **M**ethod

A modern TypeScript evolution of AVIM (A Vietnamese Input Method), maintaining full compatibility while adding improvements and type safety.

- `src/anvim.ts`: TypeScript port (ANVIM)
- `legacy/avim.js`: Original AVIM JavaScript by Hieu Tran Dang (header retained)

## Install

```bash
npm i anvim
```

## Usage

### Basic Usage

The simplest way to convert Vietnamese text is using the default `anvim` function:

```ts
import anvim from "anvim";

// TELEX input method (default)
console.log(anvim("xin chaof"));        // "xin chào"
console.log(anvim("toi yeu Vieejt Nam"));       // "tôi yêu Việt Nam"
console.log(anvim("gox tieengs vieetj thaatj down gianr"));            // "gõ tiếng việt thật đơn giản"
console.log(anvim("hocj"));             // "học"
```

### Advanced Usage with AnvimEngine

For more control, use the `AnvimEngine` class:

```ts
import { AnvimEngine } from "anvim";

const engine = new AnvimEngine();

// Real-time typing simulation
let result = "";
for (const char of "thuowng") {
  result = engine.processWithKey(result, char);
  console.log(`Typed '${char}': ${result}`);
}
// Output: "thương"

// Process entire words
console.log(engine.processWord("tooi"));  // "tôi"
console.log(engine.processWord("chaof")); // "chào"
```

### Input Methods

```ts
// Different input methods
engine.setMethodByString("TELEX");  // tooi → tôi
engine.setMethodByString("VNI");    // to5i → tôi  
engine.setMethodByString("VIQR");   // to^'i → tối
engine.setMethodByString("AUTO");   // auto-detect
```
