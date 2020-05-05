import {
  Mutation,
  MutationAction,
  Action,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import _ from "lodash";
import moment from "moment";
import { AxiosRequestConfig } from "axios";
import { MutationTree, ActionTree, ActionContext } from "vuex";
import { Context as AppContext } from "@nuxt/types";
import profileData from "../static/data/profile.json";
import skillsData from "../static/data/skills.json";
import worksData from "../static/data/works.json";
import contactsData from "../static/data/contacts.json";

import store from "@/store/store";

export interface Profile {
  imageUrl?: string;
  message?: string;
  email?: string;
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
  contact: Contact[];
}

@Module({ dynamic: true, store, name: "currency", namespaced: true })
class Portfolio extends VuexModule implements PortfolioState {
  // state
  profile: Profile = {};
  skill: Skill[] = [];
  work: Work[] = [];
  contact: Contact[] = [];

  @MutationAction({ mutate: ["profile"] })
  async fetchProfile(): Promise<any> {
    let data: Profile = {};
    data = await profileData;
    return { profile: data };
  }

  @MutationAction({ mutate: ["skill"] })
  async fetchSkill(): Promise<any> {
    let data: Skill[] = [];
    data = await skillsData;
    return { skill: data };
  }

  @MutationAction({ mutate: ["work"] })
  async fetchWork(): Promise<any> {
    let data: Work[] = [];
    data = await worksData;
    return { work: data };
  }

  @MutationAction({ mutate: ["contact"] })
  async fetchContact(): Promise<any> {
    let data: Contact[] = [];
    data = await contactsData;
    return { contact: data };
  }
}

export const portfolioModule = getModule(Portfolio);
