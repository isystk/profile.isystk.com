import { MutationTree, ActionTree, ActionContext } from "vuex";
import { Context as AppContext } from "@nuxt/types";
import { RootState, Profile, Skill, Work, Contact } from "../types";
import profileData from "../static/data/profile.json";
import skillsData from "../static/data/skills.json";
import worksData from "../static/data/works.json";
import contactsData from "../static/data/contacts.json";

export const state = (): RootState => ({
  profile: {
    imageUrl: "#",
    message: "",
    email: ""
  },
  skills: [],
  works: [],
  contacts: []
})

export const mutations: MutationTree<RootState> = {
  setProfile(state: RootState, profile: Profile): void {
    state.profile = profile
  },
  setSkills(state: RootState, skills: Skill[]): void {
    state.skills = skills
  },
  setWorks(state: RootState, works: Work[]): void {
    state.works = works
  },
  setContacts(state: RootState, contacts: Contact[]): void {
    state.contacts = contacts
  }
}

interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit (actionContext: ActionContext<S, R>, appContext: AppContext): void
}

export const actions: Actions<RootState, RootState> = {
  async nuxtServerInit({ commit }, context) {
    let profile: Profile;
    profile = context.isStatic ?
      profileData :
      await context.app.$axios.$get("./data/profile.json");
    commit("setProfile", profile);
    
    let skills: Skill[] = [];
    skills = context.isStatic ?
      skillsData :
      await context.app.$axios.$get("./data/skills.json");
    commit("setSkills", skills);
    
    let works: Work[] = [];
    works = context.isStatic ?
      worksData :
      await context.app.$axios.$get("./data/works.json");
    commit("setWorks", works);
    
    let contacts: Contact[] = [];
    contacts = context.isStatic ?
      contactsData :
      await context.app.$axios.$get("./data/contacts.json");
    commit("setContacts", contacts);
  }
}
