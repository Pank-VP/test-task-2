<template>
  <div class="wrapper">
    <div class="w-full h-full bg-light-grey text-text-color rounded-2xl px-6 py-12">
        <div class="text-center leading-8 text-[24px] font-medium">
          <span>
            Выберите <span class="lowercase">{{selectedPageValue.title}}</span>, которые подходят именно вам
          </span>
        </div>

        <div class="mt-6 pl-6 mr-6 relative">
          <input v-model="v$.email.$model" type="text"
                 class="w-[90%] h-[56px] rounded-l-lg pl-[15px] placeholder:text-base placeholder:leading-6 placeholder:text-grey"
                 :class="{'border-error': v$.email.$invalid && isSubmitted}"
                  placeholder="Электронная почта"
          >
          <button class="rounded-full h-[56px] border hover:border-white disabled:bg-grey bg-blue text-white absolute right-0"
                  :class="{'border-blue': !isLoading, 'border-grey': isLoading}"
                  @click="postData(v$.$invalid)"
                  :disabled="isLoading"
          >
            <span v-if="!isLoading" class="px-8">Подписаться</span>
            <span v-else class="px-8">
              <i class="pi pi-spin pi-spinner" style="font-size: 14px"></i>
              <span class="ml-[9px]">
                Отправка
              </span>
            </span>
          </button>
          <p v-if="v$.email.$invalid && isSubmitted" class="text-error text-sm absolute top-[-20px] left-6">
            Неверный Email
          </p>
        </div>
    </div>
  </div>
</template>
<script setup>
import {ref, reactive, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const emailValue = ref('')
const isLoading = ref(false)
const isSubmitted = ref(false)

const state = reactive({
  email: '',
})
const rules = {
  email: { required, email }
}
const v$ = useVuelidate(rules, state)

const props = defineProps({
  items: {
    type: Array
  }
})
const postData = async(isInvalid) => {
  isSubmitted.value = true
  if (isInvalid) {
    return
  } else {
    isLoading.value = true
  }
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
}
const selectedPageValue = computed(() => {
  return props.items.filter(i => i.value)[0]
})

</script>
