export interface Skill {
  name: string;
  related: string[];
}

export const slugifySkill = (skill: string): string =>
  skill.toLowerCase().replace(/ /g, "-");
