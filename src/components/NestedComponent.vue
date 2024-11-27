<template>
  <ul>
    <li v-for="(item, index) in items" :key="index + new Date().getTime()">
      {{item}}
      <span class="text-grey">{{ item.name }}</span>
      <NestedComponent v-if="item.pagesInside" :items="item.pagesInside" />
    </li>
  </ul>
</template>
<script setup>
//imports
import NestedComponent from "./NestedComponent.vue";

const props = defineProps({
  items: {
    type: Array,
  }
})
const emit = defineEmits(['changeData'])
const changeData = (count, value) => {
  setTimeout(() => {
    emit('changeData', count, value)
  },50)
}
const isShowChevron = (item) => {
  return item.children && item.children.length
}
</script>
