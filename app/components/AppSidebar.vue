<template>
  <aside
    id="default-sidebar"
    class="fixed left-0 top-0 z-40 h-screen w-60 -translate-x-full border-r border-gray-200 bg-white transition-transform lg:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="flex h-full flex-col">
      <div class="flex-1 overflow-y-auto pt-7">
        <div class="mb-5 border-b border-gray-200 px-6 pb-7">
          <div class="flex items-center gap-3">
            <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-primary-600">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" aria-hidden="true">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <div>
              <div class="text-sm font-semibold">Media Antar Nusa</div>
              <div class="text-[10px] uppercase tracking-wider text-gray-400">Executive Dashboard</div>
            </div>
          </div>
        </div>

        <div class="space-y-5 px-3">
          <div>
            <div class="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">Overview</div>
            <ul class="space-y-0">
              <li>
                <a href="#" class="flex items-center gap-3 rounded-sm bg-primary-50 px-3 py-2 text-sm font-medium text-primary-600">
                  <span class="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-primary-600">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                      <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                      <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                      <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                      <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                    </svg>
                  </span>
                  Dashboard
                </a>
              </li>
              <li><a href="#" class="flex items-center gap-3 rounded-sm px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900"><span class="h-5 w-5 flex-shrink-0 rounded-md bg-gray-100"></span>Revenue</a></li>
              <li><a href="#" class="flex items-center gap-3 rounded-sm px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900"><span class="h-5 w-5 flex-shrink-0 rounded-md bg-gray-100"></span>Pelanggan</a></li>
            </ul>
          </div>

          <div>
            <div class="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">Bisnis</div>
            <ul class="space-y-1">
              <li><a href="#" class="flex items-center gap-3 rounded-sm px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900"><span class="h-5 w-5 flex-shrink-0 rounded-md bg-gray-100"></span>ISP &amp; Network</a></li>
              <li><a href="#" class="flex items-center gap-3 rounded-sm px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900"><span class="h-5 w-5 flex-shrink-0 rounded-md bg-gray-100"></span>NusaWork HRIS</a></li>
              <li><a href="#" class="flex items-center gap-3 rounded-sm px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900"><span class="h-5 w-5 flex-shrink-0 rounded-md bg-gray-100"></span>Google Workspace</a></li>
              <li><a href="#" class="flex items-center gap-3 rounded-sm px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900"><span class="h-5 w-5 flex-shrink-0 rounded-md bg-gray-100"></span>Home Connect</a></li>
            </ul>
          </div>

          <div>
            <div class="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">Operasional</div>
            <ul class="space-y-1">
              <li><a href="#" class="flex items-center gap-3 rounded-sm px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900"><span class="h-5 w-5 flex-shrink-0 rounded-md bg-gray-100"></span>NOC Monitor</a></li>
              <li><a href="#" class="flex items-center gap-3 rounded-sm px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900"><span class="h-5 w-5 flex-shrink-0 rounded-md bg-gray-100"></span>Tim &amp; SDM</a></li>
              <li><a href="#" class="flex items-center gap-3 rounded-sm px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900"><span class="h-5 w-5 flex-shrink-0 rounded-md bg-gray-100"></span>Laporan</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="fixed bottom-0 w-60 border-t border-r border-gray-200 bg-white px-6 py-5">
        <div class="flex items-center gap-3">
          <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-indigo-600 text-sm font-bold text-white">D</div>
          <div>
            <div class="text-sm font-semibold">Direktur Utama</div>
            <div class="text-xs text-gray-400">PT Media Antar Nusa</div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
