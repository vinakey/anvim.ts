export { AnvimEngine } from "./anvim";
export type { VietnameseInputMethod, AvimConfig } from "./anvim";
import { AnvimEngine } from "./anvim";

export default function anvim(input: string): string {
  const engine = new AnvimEngine();
  let out = "";
  for (let i = 0; i < input.length; i++) out = engine.processWithKey(out, input[i]);
  return out;
}
