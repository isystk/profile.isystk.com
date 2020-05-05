<template>
  <div id="side-menu">
    <div class="side-menu-header"></div>
    <nav>
      <ul>
        <li>
          <a href="https://blog.isystk.com/" target="_blank">ブログ</a>
        </li>
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
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component
export default class SideMenu extends Vue {}
</script>
