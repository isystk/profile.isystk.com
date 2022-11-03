<template lang="pug">
modal(title='投稿フォーム' :is-open='isOpen' :handle-close='handleClose')
  form(v-slot='{ errors, values, setFieldValue }' :validation-schema='schema' :initial-values='initialValues' @submit='onSubmit')
    .mt
      .mb-4
        label.block.text-gray-700.text-sm.font-bold.mb-2
          | タイトル
        field.shadow.appearance-none.border.rounded.w-full.py-2.px-3.text-gray-700.leading-tight(name='title' type='text' class='focus:outline-none focus:shadow-outline' :class="{ 'is-invalid': errors.title }")
          errormessage.text-red(name='title')
      .mb-4
        label.block.text-gray-700.text-sm.font-bold.mb-2
          | 本文
        field.shadow.appearance-none.border.rounded.w-full.py-2.px-3.text-gray-700.leading-tight(name='description' as='textarea' class='focus:outline-none focus:shadow-outline' :class="{ 'is-invalid': errors.description }")
          errormessage.text-red(name='description')
      .mb-4
        label.block.text-gray-700.text-sm.font-bold.mb-2
          | 写真
        field(name='photo' type='hidden' :class="{ 'is-invalid': errors.photo }")
          v-container(fluid='')
            v-row(dense='')
              v-col(cols='12' md='6')
                vueimagebase64(:max-file-size='10485760' :thumbnail-size='700' :drop='true' drop-text='ファイルをドラッグ＆ドロップもしくは' capture='environment' :multiple='true' @handlechange="\
              (data) => setFieldValue('photo', data.fileData)\
              ")
              v-col(cols='12' md='6')
                v-img(:src="values.photo || '/images/no_image.png'" style='width: 100%' :transition='false' cover='')
          errormessage.text-red(name='photo')
      .mb-4
        v-btn(depressed='' color='primary' type='submit')  登録 
</template>

<script setup lang="ts">
import Modal from '@/components/Widgets/Modal.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import VueImageBase64 from 'vuejs-image-base64'
import * as Yup from 'yup'
import { injectStore } from '@/store'
import { Post } from '@/services/post'
const main = injectStore()
const props = defineProps<{
  isOpen: boolean
  handleClose: () => void
  postId?: string | null
  initialValues?: FormValues
}>()

const schema = Yup.object().shape({
  title: Yup.string().required('タイトルを入力してください'),
  description: Yup.string().required('本文を入力してください'),
  photo: Yup.string().required('写真を入力してください'),
})

export type FormValues = {
  title?: string
  description?: string
  photo?: string
}

const onSubmit = async (values: FormValues) => {
  try {
    console.log(values)
    const post = {
      ...values,
    } as Post
    if (props.postId) {
      await main?.post.updatePost(props.postId, post)
    } else {
      await main?.post.createPost(post)
    }
    props.handleClose()
  } catch (e) {
    alert(e.message)
  }
}
</script>
