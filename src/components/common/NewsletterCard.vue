<template>
  <div class="w-full h-full min-h-[244px] rounded-2xl px-4 sm:px-6 py-6 bg-white relative">
    <div>
      <p class="text-[13px] font-normal leading-4 text-grey">
        {{ props.item.header }}
      </p>
      <div class="text-[20px] leading-7 font-medium">
        <span>
          {{ props.item.title }}
        </span>
      </div>
      <div class="w-full max-w-[324px] pt-2 pb-4">
        <p class="text-sm font-normal leading-5 text-dark-grey">
          {{ props.item.text }}
        </p>
      </div>
      <div v-if="props.item?.advantages" class="flex flex-col gap-2">
        <div v-for="(item, index) in props.item.advantages" :key="index" class="flex items-center">
          <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.08471 9.62365L1.93292 6.47186C1.57839 6.11733 1.00389 6.11631 0.648103 6.46959C0.290537 6.82464 0.289516 7.40265 0.645826 7.75896L5.08471 12.1978L15.3586 1.92397C15.7128 1.56972 15.7128 0.995371 15.3586 0.641122C15.0044 0.286991 14.4303 0.286855 14.076 0.640819L5.08471 9.62365Z" fill="#00CC33"/>
          </svg>
          <p class="ml-2 text-base leading-5 font-normal">
            {{item.value}}
          </p>
        </div>
      </div>
    </div>
    <img :src="props.item.imgUrl" alt="" class="absolute top-6 right-4 sm:right-6 size-10 sm:size-20">

  </div>
</template>
<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {
    }
  }
})
</script>
