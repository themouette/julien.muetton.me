import { toMatchImageSnapshot } from "jest-image-snapshot";
import { expect } from "vitest";

interface CustomMatchers<R = unknown> {
  toMatchImageSnapshot: () => R;
}

declare module "vitest" {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}

expect.extend({
  toMatchImageSnapshot,
});
