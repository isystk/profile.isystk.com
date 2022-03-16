<template>
  <header class="header">
    <Logo />
    <div class="nav">
      <ul class="nav-link">
        <li>
          <a :href="$C.URL.BLOG" target="_blank">
            {{ $t("text.menu.blog") }}
          </a>
        </li>
        <li>
          <a :href="$C.URL.COMPANY" target="_blank">
            {{ $t("text.menu.company") }}
          </a>
        </li>
        <li>
          <a :href="$C.URL.CONTACT" target="_blank">
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
    SideMenu,
  },
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

<style lang="scss" scoped>
/*--------------------------------------------------------------------

  3 ヘッダー

--------------------------------------------------------------------*/

.header {
  width: 100%;
  height: 60px;
  background: #000d6d;
}

/** ハンバーガーメニュー */
.header .nav {
  position: relative;
}
.header .nav .nav-link {
  display: none;
}
.header .menu-btn {
  position: absolute;
  top: 30px;
  transform: translateY(-50%);
  box-sizing: border-box;
  z-index: 9999;
  line-height: 0;
}
.header .menu-btn {
  cursor: pointer;
  right: 20px;
  width: 26px;
  height: 22px;
}
.header .menu-btn figure {
  position: absolute;
  margin: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 2px;
  background: #fff;
  transition: 0.25s;
}
.header .menu-btn figure:nth-child(1) {
  top: 0;
}
.header .menu-btn figure:nth-child(2) {
  top: 50%;
  margin-top: -1px;
}
.header .menu-btn figure:nth-child(3) {
  bottom: 0;
}
.header .menu-btn.on {
  position: fixed;
}
.header .menu-btn.on figure {
  background: #000;
}
.header .menu-btn.on figure:nth-child(1) {
  top: 50%;
  margin-top: -1px;
  transform: rotate(45deg);
}
.header .menu-btn.on figure:nth-child(2) {
  background: transparent;
}
.header .menu-btn.on figure:nth-child(3) {
  bottom: 50%;
  margin-bottom: -1px;
  transform: rotate(-45deg);
}
#layer-panel {
  display: none;
  z-index: 99;
  background: #666;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
}
#layer-panel.on {
  display: block;
}

@media screen and (min-width: 992px) {
  .header .nav .nav-link {
    display: block;
    position: absolute;
    right: 0;
    font-size: 18px;
    margin: 21px;
  }
  .header .nav .nav-link a {
    color: #fff;
    margin: 0 20px;
  }
  .header .nav .nav-link li {
    list-style: none;
    float: left;
    border-right: solid 1px #fff;
  }
  .header .nav .nav-link li:last-child {
    border-right: none;
  }

  .header .nav .menu-btn {
    display: none;
  }
}
</style>
