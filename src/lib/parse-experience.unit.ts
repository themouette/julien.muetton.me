import { describe, it, expect } from "vitest";
import { parseExperience } from "./parse-experience";

describe("parseExperience", () => {
  it("should parse experience", () => {
    const experience = {
      title: "Software Developer",
      organization: "Google",
      startDate: "2019-01-01",
      endDate: "2020-01-01",
      description: "Worked on the Google search engine.",
      skills: ["JavaScript", "TypeScript", "React"],
    };

    const parsedExperience = parseExperience(experience);

    expect(parsedExperience).toEqual({
      title: "Software Developer",
      organization: "Google",
      startDate: new Date("2019-01-01"),
      endDate: new Date("2020-01-01"),
      description: "Worked on the Google search engine.",
      skills: ["JavaScript", "TypeScript", "React"],
    });
  });
});
