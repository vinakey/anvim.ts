export { AnvimEngine } from "./anvim";
export type { VietnameseInputMethod, AvimConfig } from "./anvim";
import { AnvimEngine } from "./anvim";

export default function anvim(input: string): string {
  const engine = new AnvimEngine();
  return engine.processText(input);
}
