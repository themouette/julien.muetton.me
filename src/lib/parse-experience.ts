export interface FrontmatterExperience {
  title: string;
  organization: string;
  logo?: string;
  startDate: string;
  endDate?: string;
  description: string;
  skills: string[];
  location?: string;
}

export interface Experience {
  title: string;
  organization: string;
  logo?: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  skills: string[];
  location?: string;
}

export const parseExperience = (
  experience: FrontmatterExperience
): Experience => {
  return {
    ...experience,
    startDate: new Date(experience.startDate),
    endDate: experience.endDate ? new Date(experience.endDate) : undefined,
  };
};
