<template>
  <label class="switch" :class="props.style">
    <input v-model="model" type="checkbox" :value="true" @change="selectButton">
    <span class="slider round"></span>
  </label>
</template>
<script setup>
const model = defineModel()
const emit = defineEmits(['change'])
const props = defineProps({
  style: {
    type: String,
    default: "",
  }
})
const selectButton = () => {
  emit('change', model)
}
</script>
