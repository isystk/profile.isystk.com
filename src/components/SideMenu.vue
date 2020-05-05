<template>
  <div id="side-menu">
    <div class="side-menu-header"></div>
    <nav>
      <ul>
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
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component
export default class SideMenu extends Vue {}
</script>
