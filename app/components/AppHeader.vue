<template>
  <header class="sticky top-0 z-30 border-b border-gray-200 bg-white lg:h-16">
    <div class="flex min-h-16 items-center justify-between gap-4 px-4 py-1 sm:px-6 lg:px-8">
      <div class="flex items-center gap-3 min-w-0">
        <button
          type="button"
          class="inline-flex items-center rounded-lg border border-gray-200 bg-white p-2 text-sm text-gray-500 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
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
        <span class="rounded-full bg-gray-100 px-3 py-1.5 text-xs text-gray-500 font-mono truncate">Mar 2026 · Q1</span>
        <button type="button" class="relative inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-gray-100 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <span class="absolute right-1.5 top-1.5 h-2 w-2 rounded-full border-2 border-white bg-red-500"></span>
        </button>
      </div>
    </div>
  </header>
</template>
