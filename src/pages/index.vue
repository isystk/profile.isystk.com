<template lang="pug">
div
  v-img(src='/img/jumbotron.jpg', max-height='320px', gradient='to top right, rgba(63,81,181, .4), rgba(25,32,72, .4)')
    v-container(fill-height='')
      v-layout(align-center='')
        v-flex(text-center='')
          h3.display-3.white--text
            span.jumbotron-title Isystk's Portfolio
          .mt-4.menu-btn
            v-btn(@click="$vuetify.goTo('#profile', options)") PROFILE
            v-btn(@click="$vuetify.goTo('#skills', options)") SKILLS
            v-btn(@click="$vuetify.goTo('#works', options)") WORKS
            v-btn(@click="$vuetify.goTo('#contact', options)") CONTACT
  v-container(fluid='', v-scroll='onScroll')
    v-layout(align-center='', justify-center='', wrap='')
      v-flex(sm12='', md10='', lg8='', xl6='')
        profile
        skills
        works
        contact
    v-fab-transition
      v-btn(fixed='', dark='', fab='', bottom='', right='', color='grey', v-show='showFloating', @click='$vuetify.goTo(0, options)')
        v-icon keyboard_arrow_up
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from "vuex-class"
import { Skill } from "../types";
import Profile from '../components/Profile.vue';
import Skills from '../components/Skills.vue';
import Works from '../components/Works.vue';
import Contact from '../components/Contact.vue';

@Component({
  components: {
    Profile, Skills, Works, Contact
  }
})
export default class extends Vue {
  offsetTop: number = 0;
  options = {
    duration: 700,
    offset: 0,
    easing: 'easeOutCubic'
  };

  get showFloating() {
      return this.offsetTop >= 300
    }
    
  onScroll() {
    this.offsetTop = document.documentElement.scrollTop || document.body.scrollTop
  }
}

</script>
