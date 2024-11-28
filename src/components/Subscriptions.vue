<template>
  <div class="h-full min-h-[100vh] relative flex flex-col flex-[1_0_auto]">
    <Header/>
    <div class="wrapper flex mt-7 sm:mt-0">
      <BreadCrumbs :items="siteUrl.pages"/>
    </div>
    <div class="wrapper mt-2 sm:mt-6">
      <h1 class="text-text-color text-[32px] sm:text-[56px] !font-medium tracking-[-0.03rem] leading-[42px] sm:leading-[72px]">Подписки
        «Клерка»</h1>
    </div>
    <div class="wrapper">
      <div class="flex w-full max-w-[320px] sm:max-w-[294px] gap-4 sm:gap-6 mt-6">
        <div v-for="(item, index) in selectedPageValue"
             :key="index"
             class="h-10 border-b-2 px-2"
             :class="{'border-light-blue': item.value, 'border-white': !item.value}"
        >
        <span @click="selectedNewPage(item.id)" class="text-dark-grey text-base leading-6 cursor-pointer"
              :class="{'text-light-blue': item.value}"
        >
          {{ item.title }}
        </span>
        </div>
      </div>
    </div>
    <MainContainer :items="selectedPageValue"/>
    <div class="flex flex-[2_2_auto] mx-auto">
      <Footer class="flex justify-end py-12" />
    </div>
  </div>
</template>
<script setup>
import {ref, computed} from 'vue';
import Header from "./common/Header.vue";
import BreadCrumbs from "./common/BreadCrumbs.vue";
import MainContainer from "./common/MainContainer.vue";
import Footer from "./common/Footer.vue";

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
              pageContent: [
                {
                  contentType: 'button',
                  id: 50,
                  value: false,
                },
                {
                  contentType: 'card',
                  id: 51,
                  header: 'Перед рассветом',
                  title: 'Утренний бухгалтер',
                  text: 'Самые важные новости и события за день. Кратко, по делу, структурировано.',
                  imgUrl: '/src/assets/images/cards/card-1.png',
                  advantages: [
                    {
                      value: 'Новости для бухгалтеров, ИП и директора',
                      style: 'font-normal',
                    },
                    {
                      value: 'Подборка статей за день',
                      style: 'font-normal',
                    },
                  ],
                  agreementValue: {
                    isAgree: true,
                    usersAmount: 59342,
                  },
                },
                {
                  contentType: 'card',
                  id: 52,
                  header: 'После заката',
                  title: 'Ночной бухгалтер',
                  text: 'Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.',
                  imgUrl: '/src/assets/images/cards/card-2.png',
                  advantages: [
                    {
                      value: 'Анализ, оценка и только самое главное',
                      style: 'font-normal',
                    },
                    {
                      value: 'Лучшие комменты юзеров в обзоре',
                      style: 'font-normal',
                    },
                  ],
                  agreementValue: {
                    isAgree: false,
                    usersAmount: 37480,
                  },
                },
                {
                  contentType: 'card',
                  id: 53,
                  header: 'Раз в две недели',
                  title: 'Ножницы скидок',
                  text: 'Подборка самых выгодных и полезных спецпредложений от надежных компаний.',
                  imgUrl: '/src/assets/images/cards/card-3.png',
                  advantages: [
                    {
                      value: 'Акции и скидки от лидеров рынка',
                      style: 'font-normal',
                    },
                    {
                      value: 'Те, кто подписался – экономят много денег',
                      style: 'font-normal',
                    },
                  ],
                  agreementValue: {
                    isAgree: false,
                    usersAmount: 92118,
                  },
                },
                {
                  contentType: 'card',
                  id: 54,
                  header: 'По мере появления анонсов',
                  title: 'Чемодан вебинаров',
                  text: 'Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов.',
                  imgUrl: '/src/assets/images/cards/card-4.png',
                  advantages: [
                    {
                      value: 'Никогда не пришлем платные вебинары',
                      style: 'font-medium',
                    },
                    {
                      value: 'Подборка топовых тем для вебинаров',
                      style: 'font-normal',
                    },
                  ],
                  agreementValue: {
                    isAgree: false,
                    usersAmount: 92082,
                  },
                },
              ]
            },
            {
              title: 'Соцсети',
              id: 4,
              value: false,
            },
            {
              title: 'Мессенджеры',
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
