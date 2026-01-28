<template lang="pug">
pages-box(:breadcrumbs="[{ text: 'ログイン' }]" :small='true')
  vee-form(v-slot='{ errors }' :validation-schema='schema' @submit='onSubmit')
    .mt
      .mb-4
        label.block.text-gray-700.text-sm.font-bold.mb-2
          | メールアドレス
        field.shadow.appearance-none.border.rounded.w-full.py-2.px-3.text-gray-700.leading-tight(name='email' type='text' class='focus:outline-none focus:shadow-outline' :class="{ 'is-invalid': errors.email }")
        error-message.text-red(name='email')
      .mb-4
        label.block.text-gray-700.text-sm.font-bold.mb-2
          | パスワード
        field.shadow.appearance-none.border.rounded.w-full.py-2.px-3.text-gray-700.leading-tight(name='password' type='password' class='focus:outline-none focus:shadow-outline' :class="{ 'is-invalid': errors.password }")
        error-message.text-red(name='password')
      .mb-4
        v-btn(depressed='' color='primary' type='submit')  ログイン 
      |  会員登録はこちら
</template>

<script setup lang="ts">
useMeta({
  title: 'ログイン',
})
import { Form as VeeForm, Field, ErrorMessage } from 'vee-validate'
import * as Yup from 'yup'
import { injectStore } from '@/store'
const main = injectStore()
import { Url } from '@/constants/url'
const router = useRouter()
const schema = Yup.object().shape({
  email: Yup.string()
    .required('メールアドレスを入力してください')
    .email('メールアドレスを正しく入力してください'),
  password: Yup.string().required('パスワードを入力してください'),
})

type FormValues = {
  email: string
  password: string
}

const onSubmit = async (values: FormValues) => {
  console.log(values)
}
</script>
