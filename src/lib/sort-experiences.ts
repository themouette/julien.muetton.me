import type { Experience } from "./parse-experience";

export const sortExperiences = (a: Experience, b: Experience) => {
  const { startDate: aStartDate, endDate: aEndDate } = a;
  const { startDate: bStartDate, endDate: bEndDate } = b;

  if (aEndDate && !bEndDate) {
    // b is current, so it should come first
    return 1;
  }
  if (!aEndDate && bEndDate) {
    // a is current, so it should come first
    return -1;
  }

  if (aEndDate && bEndDate) {
    // both have end dates, so sort by end date
    return bEndDate.getTime() - aEndDate.getTime();
  }

  // neither have end dates, so sort by start date
  return bStartDate.getTime() - aStartDate.getTime();
};
