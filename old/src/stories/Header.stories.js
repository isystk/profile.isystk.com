import { storiesOf } from '@storybook/vue3'
import vueRouter from 'storybook-vue3-router'
import Header from '@/components/Pages/Header.vue'
import { Url } from '@/constants/url'
import Login from '@/pages/login/index.vue'
import MainService from '@/services/main'

storiesOf('pages/Header', module)
  .addDecorator(
    vueRouter([
      {
        path: Url.LOGIN,
        name: 'LOGIN',
        component: Login,
      },
    ])
  )
  .add('Basic', () => ({
    components: { Header },
    setup: () => {
      const main = new MainService()
      return { main }
    },
    template: `<Header :store="main" />`,
  }))
