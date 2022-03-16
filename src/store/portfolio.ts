import {
  MutationAction,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import profileData from "../static/data/profile.json";
import skillsData from "../static/data/skills.json";
import worksData from "../static/data/works.json";
import specialtyData from "../static/data/specialty.json";
import contactsData from "../static/data/contacts.json";

import Env from "../common/env";
import store from "@/store/store";
import { API_ENDPOINT } from "@/common/constants";
import { $axios } from "@/utilities/api";

export interface Profile {
  imageUrl?: string;
  message?: string;
  twitter_follower?: number;
}

export interface SkillItem {
  name: string;
  rating: number;
  noDivider?: boolean;
  text: string;
}

export interface Skill {
  title?: string;
  color?: string;
  rating?: number;
  text?: string;
  items?: SkillItem[];
}

export interface Work {
  title?: string;
  text?: string;
  url?: string;
  imageUrl?: string;
}

export interface SpecialtyItem {
  label?: string;
  color?: string;
  data?: number;
}

export interface Specialty {
  title?: string;
  type?: string;
  items?: SpecialtyItem[];
}

export interface Contact {
  name?: string;
  linkUrl?: string;
  icon?: string;
}

// state's interface
export interface PortfolioState {
  profile: Profile;
  skill: Skill[];
  work: Work[];
  specialty: Specialty[];
  contact: Contact[];
}

@Module({ dynamic: true, store, name: "currency", namespaced: true })
class Portfolio extends VuexModule implements PortfolioState {
  // state
  profile: Profile = {};
  skill: Skill[] = [];
  work: Work[] = [];
  specialty: Specialty[] = [];
  contact: Contact[] = [];

  @MutationAction({ mutate: ["profile"] })
  async fetchProfile(): Promise<any> {
    let data: Profile = {};
    if (Env.isStatic) {
      // generateの場合は、静的にjsonファイルを読み込む
      data = await profileData;
    } else {
      // 上記以外は、APIでjsonファイルを読み込む
      const res = await $axios.get<Profile>(API_ENDPOINT.PROFILE, {});
      data = res.data;
    }
    return { profile: data };
  }

  @MutationAction({ mutate: ["skill"] })
  async fetchSkill(): Promise<any> {
    let data: Skill[] = [];
    if (Env.isStatic) {
      // generateの場合は、静的にjsonファイルを読み込む
      data = await skillsData;
    } else {
      // 上記以外は、APIでjsonファイルを読み込む
      const res = await $axios.get<Skill[]>(API_ENDPOINT.SKILLS, {});
      data = res.data;
    }
    return { skill: data };
  }

  @MutationAction({ mutate: ["work"] })
  async fetchWork(): Promise<any> {
    let data: Work[] = [];
    if (Env.isStatic) {
      // generateの場合は、静的にjsonファイルを読み込む
      data = await worksData;
    } else {
      // 上記以外は、APIでjsonファイルを読み込む
      const res = await $axios.get<Work[]>(API_ENDPOINT.WORKS, {});
      data = res.data;
    }
    return { work: data };
  }

  @MutationAction({ mutate: ["specialty"] })
  async fetchSpecialty(): Promise<any> {
    let data: Specialty[] = [];
    if (Env.isStatic) {
      // generateの場合は、静的にjsonファイルを読み込む
      data = await specialtyData;
    } else {
      // 上記以外は、APIでjsonファイルを読み込む
      const res = await $axios.get<Specialty[]>(API_ENDPOINT.SPECIALTY, {});
      data = res.data;
    }
    return { specialty: data };
  }

  @MutationAction({ mutate: ["contact"] })
  async fetchContact(): Promise<any> {
    let data: Contact[] = [];
    if (Env.isStatic) {
      // generateの場合は、静的にjsonファイルを読み込む
      data = await contactsData;
    } else {
      // 上記以外は、APIでjsonファイルを読み込む
      const res = await $axios.get<Contact[]>(API_ENDPOINT.CONTACTS, {});
      data = res.data;
    }
    return { contact: data };
  }
}

export const portfolioModule = getModule(Portfolio);
