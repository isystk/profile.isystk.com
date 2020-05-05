<template>
  <header class="header">
    <Logo />
    <div class="nav">
      <ul class="nav-link">
        <li>
          <a :href="this.$C.URL.BLOG" target="_blank">
            {{ $t("text.menu.blog") }}
          </a>
        </li>
        <li>
          <a :href="this.$C.URL.COMPANY" target="_blank">
            {{ $t("text.menu.company") }}
          </a>
        </li>
        <li>
          <a :href="this.$C.URL.CONTACT" target="_blank">
            {{ $t("text.menu.contact") }}
          </a>
        </li>
      </ul>
      <div class="menu-btn" @click.prevent="toggleMenu">
        <figure></figure>
        <figure></figure>
        <figure></figure>
      </div>
      <SideMenu />
      <div id="layer-panel" @click.prevent="toggleMenu"></div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import Logo from "@/components/Logo.vue";
import SideMenu from "@/components/SideMenu.vue";

@Component({
  components: {
    Logo,
    SideMenu
  }
})
export default class Header extends Vue {
  toggleMenu(): void {
    const menuBtn = document.querySelector(".menu-btn") as HTMLInputElement;
    const menu = document.querySelector("#side-menu") as HTMLInputElement;
    const layerPanel = document.querySelector(
      "#layer-panel"
    ) as HTMLInputElement;
    if (menuBtn.classList.contains("on")) {
      menuBtn.classList.remove("on");
      menu.classList.remove("open");
      layerPanel.classList.remove("on");
    } else {
      menuBtn.classList.add("on");
      menu.classList.add("open");
      layerPanel.classList.add("on");
    }
  }
}
</script>
