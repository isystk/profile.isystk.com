<template lang="pug">
NuxtLink(:to='Url.TOP')
  v-toolbar-title
    h1(class="md:text-2xl") isystk&apos;s Portfolio
</template>

<script setup lang="ts">
import { Url } from '@/constants/url'
</script>
