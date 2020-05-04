<template>
  <footer class="footer">
    <p>CONTACT</p>
    <sction class="follow-links">
      <ul class="menu">
        <li>
          <a href="https://twitter.com/ise0615/" target="_blank">
            <font-awesome-icon :icon="['fab', 'twitter']" />
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/ise0615/" target="_blank">
            <font-awesome-icon :icon="['fab', 'facebook']" />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/isystk/" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']" />
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/isystk/" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" />
            <span>GitHub</span>
          </a>
        </li>
      </ul>
    </sction>
    <sction class="copylight">
      © 2020 isystk's blog
    </sction>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>
