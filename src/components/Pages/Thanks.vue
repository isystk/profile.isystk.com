<template>
  <div>
    <elements-scrollin class-default="fadein" class-change="scrollin">
      <div class="thanks">
        <div class="message">
          <p class="title">Thanks you</p>
          <ul class="sns-buttons">
            <li v-for="(e, index) in items" :key="index" :class="e.icon">
              <a :href="e.href" target="_blank">
                {{ e.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </elements-scrollin>
  </div>
</template>

<script lang="ts" setup>
const $config = useRuntimeConfig()
const currentUrl = location.href

const items = [
  {
    name: 'Twitter',
    href: `http://twitter.com/intent/tweet?text=${encodeURIComponent(
      $config.APP_DESCRIPTION
    )}%20${currentUrl}`,
    icon: 'share-twitter',
  },
  {
    name: 'Facebook',
    href: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
    icon: 'share-facebook',
  },
  {
    name: 'LINE',
    href: `http://line.me/R/msg/text/?${encodeURIComponent(
      $config.APP_DESCRIPTION
    )}%0D%0A${currentUrl}`,
    icon: 'share-line',
  },
]
</script>

<style lang="scss" scoped>
.thanks {
  height: calc(100vh - 60px);
  position: relative;
}
.thanks .message {
  color: #fff;
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  z-index: 1;
  text-align: right;
}
.thanks .message .title {
  font-size: 40px;
  line-height: 1;
  letter-spacing: 2px;
  margin-bottom: 30px;
}
.thanks .sns-buttons {
  position: absolute;
  top: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
}
.thanks .sns-buttons li {
  font-size: 16px;
  float: left;
  text-align: center;
  width: 84px;
  margin-right: 1%;
  border-radius: 3px;
  list-style: none;
  line-height: 20px;
}
.thanks .sns-buttons li.share-twitter {
  background: #55acee;
  box-shadow: 0 2px #2795e9;
}
.thanks .sns-buttons li.share-twitter:hover {
  background: #83c3f3;
}
.thanks .sns-buttons li.share-facebook {
  background: #3b5998;
  box-shadow: 0 2px #2d4373;
}
.thanks .sns-buttons li.share-facebook:hover {
  background: #4c70ba;
}
.thanks .sns-buttons li.share-line {
  background: #00c300;
  box-shadow: 0 2px #009d00;
}
.thanks .sns-buttons li.share-line:hover {
  background: #2bd92b;
}
.thanks .sns-buttons a {
  display: block;
  height: 27px;
  padding-top: 6px;
  color: #ffffff;
  text-decoration: none;
}
.thanks .sns-buttons a:hover {
  text-decoration: none;
  color: #ffffff;
}

@media screen and (min-width: 992px) {
  .thanks .intro {
    width: 75%;
  }
}
</style>
