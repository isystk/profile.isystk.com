<template>
  <div id="side-menu">
    <div class="side-menu-header"></div>
    <nav>
      <ul>
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
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component
export default class SideMenu extends Vue {}
</script>

<style lang="scss" scoped>
/* サイドメニュー */
#side-menu {
  position: fixed;
  top: 0;
  right: -340px;
  max-width: 300px;
  width: 80%;
  height: 100%;
  transition: left 0.5s, right 0.5s;
  background-color: #fff;
  overflow-y: auto;
  height: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  z-index: 999;
}
#side-menu::-webkit-scrollbar {
  display: none;
}
#side-menu .search input[type="search"] {
  width: 95%;
}
#side-menu .side-menu-header {
  position: fixed;
  height: 60px;
  width: 100%;
  background-color: #fff;
  z-index: 1;
}
#side-menu nav ul {
  margin: 60px 0 0 0;
  padding: 0;
}
#side-menu nav li {
  list-style: none;
  padding-bottom: 10px;
}
#side-menu nav li a {
  border-bottom: 1px solid #d2d0d0;
  padding: 12px 20px;
  font-size: 20px;
  display: block;
  position: relative;
  text-align: left;
}
#side-menu.open {
  right: 0;
}
#side-menu .menu-close-btn {
  padding: 5px;
  float: right;
  zoom: 1.5;
}
</style>
