/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    // Options de configuration Vitest
    include: ["**/*.{unit,test,spec}.?(c|m)[jt]s?(x)"],
  },
});
