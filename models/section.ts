export interface Section {
  id: number;
  path: SectionPathEnum;
  name: string;
  description: string;
}

export enum SectionPathEnum {
  home = '/#home',
  aboutMe = '/#about',
  workExperience = '/#experience-and-education',
  education = '/#experience-and-education',
  contactMe = '/#contact',
}
