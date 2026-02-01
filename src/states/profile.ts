export interface Profile {
  imageUrl: string;
  message: string;
  twitter_follower: number;
  updated_at: string;
}

export interface SpecialtyItem {
  label: string;
  color: string;
  data: number;
}

export interface Specialty {
  title: string;
  type: 'radar' | 'doughnut' | string;
  items: SpecialtyItem[];
}

export interface SkillItem {
  name: string;
  rating: number;
  noDivider: boolean;
  text: string;
}

export interface SkillCategory {
  title: string;
  color: string;
  rating: number;
  text: string;
  items: SkillItem[];
}

export interface Output {
  title: string;
  text: string;
  url: string;
  imageUrl: string;
}

export interface Contact {
  name: string;
  linkUrl: string;
  icon: string;
}

export interface PortfolioData {
  profile: Profile | null;
  specialty: Specialty[];
  skills: SkillCategory[];
  outputs: Output[];
  contacts: Contact[];
}

const initialState: PortfolioData = {
  profile: null,
  specialty: [],
  skills: [],
  outputs: [],
  contacts: [],
};

export default class ProfileState {
  profile: Profile | null;
  specialty: Specialty[];
  skills: SkillCategory[];
  outputs: Output[];
  contacts: Contact[];

  constructor() {
    this.profile = initialState.profile;
    this.specialty = initialState.specialty;
    this.skills = initialState.skills;
    this.outputs = initialState.outputs;
    this.contacts = initialState.contacts;
  }
}
