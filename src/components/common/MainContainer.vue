<template>
  <div class="wrapper">
    <div class="w-full h-full bg-light-grey text-text-color rounded-2xl tracking-[-0.03rem] px-4 sm:px-6 py-8 sm:py-12">
      <div class="sm:text-center leading-8 text-[24px] !font-medium">
          <span>
            Выберите <span class="lowercase">{{ selectedPageValue.title }}</span>, которые подходят именно вам
          </span>
      </div>

      <div v-if="selectedPageValue.pageContent" class="mt-4 sm:mt-6 sm:pl-6 sm:mr-6 relative">
        <input v-model="v$.email.$model" type="text"
               class="w-[90%] h-[56px] rounded-l-lg pl-[15px] placeholder:text-base placeholder:leading-6 placeholder:text-grey"
               :class="{'border-error': v$.email.$invalid && isSubmitted}"
               placeholder="Электронная почта"
        >
        <button
            class="rounded-full h-[56px] border hover:border-white disabled:bg-grey bg-blue text-white absolute right-0"
            :class="{'border-blue': !isLoading, 'border-grey': isLoading}"
            @click="postData(v$.$invalid)"
            :disabled="isLoading"
        >
          <span v-if="!isLoading" class="sm:px-8">
            <span class="hidden sm:inline">Подписаться</span>
            <span class="sm:hidden flex justify-center items-center size-[56px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.34998 17.355L12.6933 12L7.34998 6.645L8.99498 5L15.995 12L8.99498 19L7.34998 17.355Z"
                      fill="white"/>
              </svg>
            </span>
          </span>
          <span v-else class="px-[21px] sm:px-8">
              <i class="pi pi-spin pi-spinner" style="font-size: 14px"></i>
              <span class="hidden sm:inline ml-[5px]">
                Отправка
              </span>
            </span>
        </button>
        <p v-if="v$.email.$invalid && isSubmitted" class="text-error text-sm absolute top-[-20px] left-6">
          Неверный Email
        </p>
      </div>
      <div v-if="selectedPageValue.pageContent" class="sm:ml-6 mt-[16px]">
        <div class="flex items-center">
          <SelectRadioButton v-model="agreeAllSections.value" @change="selectAllCards" :style="'w-8 h-4'"/>
          <p class="text-base font-normal leading-5 ml-2">Подписаться на все рассылки</p>
        </div>
      </div>
      <div v-if="selectedPageValue.pageContent" class="mt-6 sm:mt-8">
        <div class="grid grid-cols-2 gap-6">
          <div v-for="(card, index) in cards" :key="index" class="col-span-2 sm:col-span-1">
            <NewsletterCard :item="card"/>
          </div>
        </div>
      </div>
      <div v-else class="h-screen max-h-96 flex items-center justify-center">
        Ведется разработка
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref, reactive, computed} from 'vue';
import {useVuelidate} from '@vuelidate/core'
import {required, email} from '@vuelidate/validators'
import SelectRadioButton from "./SelectRadioButton.vue";
import NewsletterCard from "./NewsletterCard.vue";

const emailValue = ref('')
const isLoading = ref(false)
const isSubmitted = ref(false)

const state = reactive({
  email: '',
})
const rules = {
  email: {required, email}
}
const v$ = useVuelidate(rules, state)

const props = defineProps({
  items: {
    type: Array
  }
})
const postData = async (isInvalid) => {
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
const agreeAllSections = computed(() => {
  return props.items.filter(i => i.value)[0].pageContent.filter(i => i.contentType === 'button')[0]
})
const cards = computed(() => {
  return props.items.filter(i => i.value)[0].pageContent.filter(i => i.contentType === 'card')
})
const selectAllCards = () => {
  if (agreeAllSections.value.value) {
    cards.value.forEach(i => i.agreementValue.isAgree = true)
    return
  }
  cards.value.forEach(i => i.agreementValue.isAgree = false)
}

</script>
