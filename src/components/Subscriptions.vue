<template>
  <div>
    <Header />
    <div class="wrapper flex mt-7 sm:mt-0">
      <BreadCrumbs :items="siteUrl.pages" />
    </div>
    <div class="wrapper mt-2 sm:mt-6">
      <h1 class="text-text-color text-[32px] sm:text-[56px] font-medium leading-[42px] sm:leading-[72px]">Подписки «Клерка»</h1>
    </div>
    <div class="wrapper flex gap-6 mt-6">
      <div v-for="(item, index) in selectedPageValue"
           :key="index" class="h-10 border-b-2"
           :class="{'border-light-blue': item.value, 'border-white': !item.value}"
      >
        <span @click="selectedNewPage(item.id)" class="text-dark-grey text-base leading-6 cursor-pointer"
              :class="{'text-light-blue': item.value}"
        >
          {{ item.title }}
        </span>
      </div>
    </div>
    <MainContainer :items="selectedPageValue" />
  </div>
</template>
<script setup>
import {ref, onMounted, computed } from 'vue';
import Header from "./common/Header.vue";
import BreadCrumbs from "./common/BreadCrumbs.vue";
import MainContainer from "./common/MainContainer.vue";

const nodes = ref(null);
const newData = ref([])
const allowEmpty = ref(1);
const count = ref(0)
const siteUrl = ref({
  pages: [
    {
      title: 'Главная',
      id: 1,
      value: true,
      pagesInside: [
        {
          title: 'Подписки',
          id: 2,
          value: true,
          pagesInside: [
            {
              title: 'Рассылки',
              id: 3,
              value: true,
            },
            {
              title: 'Соцсети',
              id: 4,
              value: false,
            },
            {
              title: 'Мессенджер',
              id: 5,
              value: false,
            }
          ]
        }
      ]
    },


  ]
})

const createNewData = (item) => {
  for (let i = 0; i < item.length; i += 1) {
    item[i].value = false
    item[i].showSection = false
    if (item[i].children) {
      createNewData(item[i].children)
    }
  }
}

const selectedNewPage = (id) => {
  selectedPageValue.value.forEach(i => {
    i.value = i.id === id;
  })
}
const selectedPageValue = computed(() => {
  return siteUrl.value.pages[0].pagesInside[0].pagesInside
})


</script>

<style scoped>
</style>
