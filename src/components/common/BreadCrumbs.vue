<template>
  <span v-for="(item, index) in items" :key="index + new Date().getTime()" class="leading-4">
    <span class="text-text-color">
        <a href="/">
          <span v-if="item.value" class="text-[13px] leading-4 font-normal text-grey hover:underline">
            {{ item.title }}
          </span>
        </a>
      <img v-if="item.pagesInside" src="/src/assets/images/arrow.png" alt="" class="inline mx-2">
      <BreadCrumbs v-if="item.pagesInside" :items="item.pagesInside"/>
    </span>
  </span>
</template>
<script setup>
//imports
import BreadCrumbs from "/src/components/common/BreadCrumbs.vue";

const props = defineProps({
  items: {
    type: Array,
  }
})
const emit = defineEmits(['changeData'])
const changeData = (count, value) => {
  setTimeout(() => {
    emit('changeData', count, value)
  }, 50)
}
const isShowChevron = (item) => {
  return item.children && item.children.length
}
</script>
