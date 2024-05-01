import { describe, beforeEach, afterEach, it, expect, vi } from "vitest";
import { experienceDateString } from "./experience-date-string";

describe("experienceDateString", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    const mockDate = new Date("2024-01-01");
    vi.setSystemTime(mockDate);
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should return experience date string with end date", () => {
    const start = new Date("2019-01-01");
    const end = new Date("2020-05-01");

    const dateString = experienceDateString({ start, end });

    expect(dateString).toBe("Jan 2019 - May 2020 (1 year)");
  });

  it("should return experience date string with end date", () => {
    const start = new Date("2019-01-01");
    const end = new Date("2019-05-01");

    const dateString = experienceDateString({ start, end });

    expect(dateString).toBe("Jan - May 2019 (4 months)");
  });

  it("should return experience date string with no end date", () => {
    const start = new Date("2019-05-01");
    const end = undefined;

    const dateString = experienceDateString({ start, end });

    expect(dateString).toBe("May 2019 - Present (5 years)");
  });
});
