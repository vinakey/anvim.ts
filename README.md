# anvim-ts

AVIM-compatible Vietnamese input engine (TypeScript)

- `src/anvim.ts`: TypeScript port (ANVIM)
- `legacy/avim.js`: Original AVIM JavaScript by Hieu Tran Dang (header retained)

## Install

```bash
npm i anvim-ts
```

## Usage

Typed transform:

```ts
import anvim, { AnvimEngine } from "anvim-ts";

console.log(anvim("vieetj")); // "việt"

const engine = new AnvimEngine();
let out = "";
for (const ch of "thuowngs") out = engine.processWithKey(out, ch);
console.log(out); // "thương"
```

## License

MIT for the TypeScript port. `legacy/avim.js` preserves its original header and terms.
