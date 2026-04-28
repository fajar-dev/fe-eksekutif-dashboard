<template>
  <header class="sticky top-0 z-30 border-b border-gray-200 bg-white lg:h-16">
    <div class="flex min-h-16 items-center justify-between gap-4 px-4 py-1 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 min-w-0">
        <button
          type="button"
          class="inline-flex items-center rounded-lg border border-gray-200 bg-white p-2 text-sm text-gray-500 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 lg:hidden"
          data-drawer-target="default-sidebar"
          data-drawer-show="default-sidebar"
          aria-controls="default-sidebar"
        >
          <span class="sr-only">Buka sidebar</span>
          <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5A.75.75 0 012.75 9h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.75zm0 5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"></path>
          </svg>
        </button>
        <div class="min-w-0">
          <h1 class="text-sm md:text-lg font-bold truncate">Ringkasan Eksekutif</h1>
          <p class="text-xs text-gray-400 truncate">Performa real-time seluruh unit bisnis</p>
        </div>
      </div>
      <div class="flex items-center gap-3 min-w-0">
        <span v-if="period" class="rounded-full bg-gray-100 px-3 py-1.5 text-xs text-gray-500 font-mono truncate">
          {{ period.monthName.substring(0, 3) }} {{ period.year }} · Q{{ period.quarter }}
        </span>
        <Skeleton v-else customClass="h-7 w-24 rounded-full" />
        <button type="button" class="relative inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-gray-100 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500">
          <Bell class="h-5 w-5" />
          <span class="absolute right-1.5 top-1.5 h-2 w-2 rounded-full border-2 border-white bg-red-500"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { 
  Bell
} from 'lucide-vue-next'
import { additionalService } from '~/services/additional-service'
import type { PeriodBreakdown } from '~/types/additional'

const period = ref<PeriodBreakdown | null>(null)

onMounted(async () => {
  const res = await additionalService.getPeriod()
  if (res.success) {
    period.value = res.data
  }
})
</script>
