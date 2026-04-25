<template>
  <aside
    class="fixed left-0 top-0 z-40 flex h-screen w-60 -translate-x-full flex-col border-r border-gray-200 bg-white transition-transform lg:translate-x-0"
    aria-label="Sidebar"
  >
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

      <nav class="space-y-5 px-3">
        <div v-for="group in navGroups" :key="group.label">
          <div class="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">{{ group.label }}</div>
          <ul class="space-y-1">
            <li v-for="item in group.items" :key="item.href">
              <NuxtLink
                :to="item.href"
                :class="[
                  'flex items-center gap-3 rounded-sm px-3 py-2 text-sm font-medium transition-colors',
                  isActive(item.href)
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                ]"
              >
                <span :class="['h-5 w-5 flex-shrink-0 rounded-md', isActive(item.href) ? 'bg-primary-600' : 'bg-gray-100']"></span>
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="user-menu-container border-t border-gray-200 p-4">
      <div class="relative">
        <button
          class="flex w-full items-center gap-3 rounded-md p-2 transition-colors hover:bg-gray-50 focus:outline-none"
          @click="toggleUserMenu"
        >
          <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-primary-600 to-indigo-600 text-sm font-bold text-white">
            <img v-if="authState.user?.photo" :src="authState.user.photo" alt="" class="h-full w-full object-cover" />
            <span v-else>{{ authState.user?.name?.charAt(0)?.toUpperCase() ?? 'U' }}</span>
          </div>
          <div class="min-w-0 flex-1 text-left">
            <div class="truncate text-sm font-semibold">{{ authState.user?.name }}</div>
            <div class="truncate text-xs text-gray-400">{{ authState.user?.employeeId }}</div>
          </div>
        </button>

        <div v-if="isUserMenuOpen" class="absolute bottom-full left-0 z-50 mb-2 w-full overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">
          <ul class="py-1">
            <li>
              <button
                class="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-red-600 transition-colors hover:bg-red-50"
                @click="handleLogout"
              >
                <LogOut class="h-4 w-4" />
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { LogOut } from 'lucide-vue-next'

const { state: authState, service: authService } = useAuth()
const toast = useToast()
const route = useRoute()

const navGroups = [
  {
    label: 'Overview',
    items: [
      { label: 'Dashboard', href: '/' },
      { label: 'Revenue', href: '/revenue' },
      { label: 'Pelanggan', href: '/pelanggan' },
    ],
  },
  {
    label: 'Bisnis',
    items: [
      { label: 'ISP & Network', href: '/isp' },
      { label: 'NusaWork HRIS', href: '/nusawork' },
      { label: 'Google Workspace', href: '/gws' },
      { label: 'Home Connect', href: '/home-connect' },
    ],
  },
  {
    label: 'Operasional',
    items: [
      { label: 'NOC Monitor', href: '/noc' },
      { label: 'Tim & SDM', href: '/sdm' },
      { label: 'Laporan', href: '/laporan' },
    ],
  },
]

const isActive = (href: string) => route.path === href

const isUserMenuOpen = ref(false)
const toggleUserMenu = () => { isUserMenuOpen.value = !isUserMenuOpen.value }

const closeUserMenu = (e: MouseEvent) => {
  if (!(e.target as HTMLElement).closest('.user-menu-container')) {
    isUserMenuOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', closeUserMenu))
onUnmounted(() => document.removeEventListener('click', closeUserMenu))

const handleLogout = async () => {
  isUserMenuOpen.value = false
  await authService.logout()
  toast.success({ message: 'Logout berhasil' })
}
</script>
