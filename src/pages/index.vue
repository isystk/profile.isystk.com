<template>
  <div>
    <Header />
    <MainVisual />
    <div class="contents">
      <div>
        <Introduction />
      </div>
      <div>
        <Specialty />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Works />
      </div>
      <div>
        <Twitter />
      </div>
    </div>
    <Thanks />
    <Footer />
    <PageTop />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import Header from "@/components/Header.vue";
import MainVisual from "@/components/contents/MainVisual.vue";
import Introduction from "@/components/contents/Introduction.vue";
import Specialty from "@/components/contents/Specialty.vue";
import Skills from "@/components/contents/Skills.vue";
import Works from "@/components/contents/Works.vue";
import Twitter from "@/components/contents/Twitter.vue";
import Thanks from "@/components/contents/Thanks.vue";
import Footer from "@/components/Footer.vue";
import PageTop from "@/components/parts/PageTop.vue";
import { portfolioModule } from "@/store/portfolio";

@Component({
  components: {
    Header,
    MainVisual,
    Introduction,
    Specialty,
    Skills,
    Works,
    Twitter,
    Thanks,
    Footer,
    PageTop
  }
})
export default class extends Vue {
  created(): void {
    // ポートフォリオデータをストアに設定
    portfolioModule.fetchProfile();
    portfolioModule.fetchSkill();
    portfolioModule.fetchWork();
    portfolioModule.fetchSpecialty();
    portfolioModule.fetchContact();
  }
}
</script>
