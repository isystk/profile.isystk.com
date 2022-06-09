<template>
  <footer class="footer">
    <p>CONTACT</p>
    <div class="follow-links">
      <ul class="menu">
        <li v-for="(e, index) in contactData" :key="index">
          <a :href="e.linkUrl" target="_blank">
            <font-awesome-icon :icon="['fab', e.icon]" />
            <span>{{ e.name }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="copylight">© 2020 isystk's blog</div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { portfolioModule, Contact } from '@/store/portfolio'

@Component
export default class Footer extends Vue {
  // コンタクトデータ
  get contactData(): Contact[] | null {
    if (portfolioModule.contact.length <= 0) {
      return null
    }
    return portfolioModule.contact
  }
}
</script>

<style lang="scss" scoped>
/*--------------------------------------------------------------------

  7 フッター

--------------------------------------------------------------------*/

.footer {
  bottom: 0;
  height: 120px;
  width: 100%;
  background: #f3f3f4;
  position: relative;
}
.footer p {
  font-size: 20px;
  margin: 10px 0;
  color: #000d6d;
  position: absolute;
  width: 100%;
}
.footer a {
  color: #000d6d;
}
.footer svg {
  padding-right: 5px;
}
/* フォローボタン */
.footer .follow-links {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  width: 100%;
  height: 100%;
}
.footer .follow-links ul li {
  float: left;
  margin: 10px;
}
.footer .follow-links ul li span {
  display: none;
}
.footer .copylight {
  position: absolute;
  background: #000d6d;
  height: 20px;
  width: 100%;
  left: 0;
  bottom: 0;
  color: #fff;
  line-height: 20px;
}

@media screen and (min-width: 992px) {
  .footer .follow-links ul li {
    margin: 20px;
  }
  .footer .follow-links ul li span {
    display: block;
    font-size: 12px;
  }
}
</style>
