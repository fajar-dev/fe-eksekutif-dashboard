<template>
  <div :class="['animate-pulse bg-gray-200 rounded-sm', customClass]"></div>
</template>

<script setup lang="ts">
defineProps<{
  customClass?: string
}>()
</script>
