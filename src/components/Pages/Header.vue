<template>
  <div>
    <v-app-bar class="overflow-visible" color="primary" prominent>
      <pages-logo />
      <v-spacer />

      <ul class="nav-link">
        <li v-for="(item, i) in items" :key="i" :value="item">
          <a :href="item.url" target="_blank">
            {{ item.text }}
          </a>
        </li>
      </ul>
      <v-app-bar-nav-icon
        variant="text"
        class="visible md:invisible"
        @click.stop="toggleMenu"
      />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" permanent location="right">
      <v-list>
        <v-list-subheader>Menu</v-list-subheader>
        <v-list-item-group>
          <div v-for="(item, i) in items" :key="i" :value="item">
            <v-list-item
              active-color="primary"
              :href="item.url"
              target="_blank"
            >
              <v-list-item-avatar start>
                <v-icon :icon="item.icon" />
              </v-list-item-avatar>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
            <v-divider />
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Url } from '@/constants/url'
import MainService from '@/services/main'
const props = defineProps<{
  store: MainService
}>()

const drawer = ref(false)

const toggleMenu = () => {
  drawer.value = !drawer.value
}

const items = computed(() => {
  return [
    {
      text: 'ブログ',
      icon: 'mdi-login-variant',
      url: 'https://blog.isystk.com/',
    },
    {
      text: '会社概要',
      icon: 'mdi-login-variant',
      url: 'https://blog.isystk.com/company/',
    },
    {
      text: 'お問い合わせ',
      icon: 'mdi-login-variant',
      url: 'https://blog.isystk.com/contact/',
    },
  ]
})
</script>

<style lang="scss" scoped>
header .nav-link {
  display: none;
}
@media screen and (min-width: 992px) {
  header .nav-link {
    display: block;
    position: absolute;
    right: 0;
    font-size: 18px;
    margin: 21px;
  }
  header .nav-link a {
    color: #fff;
    margin: 0 20px;
  }
  header .nav-link li {
    list-style: none;
    float: left;
    border-right: solid 1px #fff;
  }
  header .nav-link li:last-child {
    border-right: none;
  }

  header .menu-btn {
    display: none;
  }
}
</style>
