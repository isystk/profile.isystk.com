<template>
  <header class="header">
    <h1 class="header-logo">
      isystk's Portfolio
    </h1>
    <div class="nav">
      <ul class="nav-link">
        <li><a href="https://blog.isystk.com/" target="_blank">ブログ</a></li>
        <li>
          <a href="https://blog.isystk.com/company/" target="_blank">
            会社概要
          </a>
        </li>
        <li>
          <a href="https://blog.isystk.com/contact/" target="_blank">
            お問い合わせ
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
import SideMenu from "@/components/SideMenu.vue";

@Component({
  components: {
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
