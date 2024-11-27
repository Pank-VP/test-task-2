<template>
  <label>
    <input type="checkbox" :value="true">
  </label>
</template>
<script setup>
const model = defineModel()
const prop = defineProps({
  item: {
    type: Object,
    default: () => {
    }
  }
})
</script>
