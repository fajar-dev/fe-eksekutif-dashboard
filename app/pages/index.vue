<template>
  <main class="p-4 sm:p-6 lg:p-8">
    <div v-if="noc && noc.openTickets > 0" class="mb-6 flex flex-col gap-3 rounded-sm border border-yellow-300 bg-yellow-50 px-4 py-3 text-sm text-yellow-900 sm:flex-row sm:items-center">
      <div class="flex items-center gap-3">
        <span class="h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400 animate-pulse-soft"></span>
        <span><strong>{{ noc.openTickets }} tiket aktif</strong> — {{ noc.statusMessage }}</span>
      </div>
      <a href="#" class="sm:ml-auto font-semibold text-yellow-700 hover:underline">Lihat Detail →</a>
    </div>

    <section class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      <article class="rounded-xl border border-gray-200 bg-white p-5">
        <div class="mb-4 flex items-start justify-between gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-sm bg-primary-50 text-primary-600">
            <Coins class="h-5 w-5" />
          </div>
          <span v-if="revenue" :class="['inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold', revenue.trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500']">
            <ArrowUp v-if="revenue.trend === 'up'" class="h-3 w-3" />
            <ArrowDown v-else class="h-3 w-3" />
            {{ Math.abs(revenue.revenuePercentage).toFixed(1) }}%
          </span>
          <Skeleton v-else customClass="h-6 w-12 rounded-full" />
        </div>
        <div class="font-mono text-2xl font-semibold">
          <span v-if="revenue">{{ formatCompact(revenue.revenueCurrent) }}</span>
          <Skeleton v-else customClass="h-8 w-24" />
        </div>
        <div class="text-xs text-gray-500">Revenue Bulan Ini (Rp)</div>
        <div class="mt-2 border-t border-gray-200 pt-2 text-xs text-gray-400 min-h-[1rem]">
          <span v-if="revenue">Bulan lalu: {{ formatCompact(revenue.revenuePrevious) }} · Pertumbuhan {{ revenue.revenuePercentage > 0 ? '+' : '' }}{{ revenue.revenuePercentage.toFixed(2) }}%</span>
          <Skeleton v-else customClass="h-4 w-full" />
        </div>
      </article>

      <article class="rounded-xl border border-gray-200 bg-white p-5">
        <div class="mb-4 flex items-start justify-between gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-sm bg-emerald-50 text-emerald-600">
            <Wifi class="h-5 w-5" />
          </div>
          <span v-if="isp" :class="['inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold', isp.trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500']">
            <ArrowUp v-if="isp.trend === 'up'" class="h-3 w-3" />
            <ArrowDown v-else class="h-3 w-3" />
            {{ isp.newCustomersGrowth > 0 ? '+' : '' }}{{ formatNumber(isp.newCustomersGrowth) }}
          </span>
          <Skeleton v-else customClass="h-6 w-12 rounded-full" />
        </div>
        <div class="font-mono text-2xl font-semibold">
          <span v-if="isp">{{ formatNumber(isp.customers) }}</span>
          <Skeleton v-else customClass="h-8 w-24" />
        </div>
        <div class="text-xs text-gray-500">Pelanggan ISP Aktif</div>
        <div class="mt-2 border-t border-gray-200 pt-2 text-xs text-gray-400 min-h-[1rem]">
          <span v-if="isp">Churn bulan ini: {{ formatNumber(isp.churnedCustomers) }} pelanggan ({{ isp.churnedCustomersPercentage.toFixed(2) }}%)</span>
          <Skeleton v-else customClass="h-4 w-full" />
        </div>
      </article>

      <article class="rounded-xl border border-gray-200 bg-white p-5">
        <div class="mb-4 flex items-start justify-between gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-sm bg-purple-50 text-purple-600">
            <Users class="h-5 w-5" />
          </div>
          <span v-if="nusawork" :class="['inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold', nusawork.trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500']">
            <ArrowUp v-if="nusawork.trend === 'up'" class="h-3 w-3" />
            <ArrowDown v-else class="h-3 w-3" />
            {{ Math.abs(nusawork.usersPercentage).toFixed(1) }}%
          </span>
          <Skeleton v-else customClass="h-6 w-12 rounded-full" />
        </div>
        <div class="font-mono text-2xl font-semibold">
          <span v-if="nusawork">{{ formatNumber(nusawork.users) }}</span>
          <Skeleton v-else customClass="h-8 w-24" />
        </div>
        <div class="text-xs text-gray-500">Pengguna NusaWork</div>
        <div class="mt-2 border-t border-gray-200 pt-2 text-xs text-gray-400 min-h-[1rem]">
          <span v-if="nusawork">{{ formatNumber(nusawork.totalCompanies) }} perusahaan · {{ formatNumber(nusawork.stableCompanies) }} stabil</span>
          <Skeleton v-else customClass="h-4 w-full" />
        </div>
      </article>

      <article class="rounded-xl border border-gray-200 bg-white p-5">
        <div class="mb-4 flex items-start justify-between gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-sm bg-yellow-50 text-yellow-600">
            <House class="h-5 w-5" />
          </div>
          <span v-if="homeconnect" :class="['inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold', homeconnect.trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500']">
            <ArrowUp v-if="homeconnect.trend === 'up'" class="h-3 w-3" />
            <ArrowDown v-else class="h-3 w-3" />
            {{ homeconnect.activeGrowth > 0 ? '+' : '' }}{{ formatNumber(homeconnect.activeGrowth) }}
          </span>
          <Skeleton v-else customClass="h-6 w-12 rounded-full" />
        </div>
        <div class="font-mono text-2xl font-semibold">
          <span v-if="homeconnect">{{ formatNumber(homeconnect.active) }}</span>
          <Skeleton v-else customClass="h-8 w-24" />
        </div>
        <div class="text-xs text-gray-500">Home Connect Aktif</div>
        <div class="mt-2 border-t border-gray-200 pt-2 text-xs text-gray-400 min-h-[1rem]">
          <span v-if="homeconnect">Konversi paid: {{ formatNumber(homeconnect.paid) }} ({{ homeconnect.paidPercentage.toFixed(1) }}%)</span>
          <Skeleton v-else customClass="h-4 w-full" />
        </div>
      </article>
    </section>

    <section class="mb-6 grid grid-cols-1 gap-4 xl:grid-cols-3">
      <article class="rounded-xl border border-gray-200 bg-white p-5 xl:col-span-2">
        <div class="mb-5 flex items-center justify-between gap-3">
          <div>
            <div class="text-sm font-semibold">Tren Revenue per Unit Bisnis</div>
            <div class="text-xs text-gray-400 min-h-[1rem]">
              <span v-if="chartSubtitle">{{ chartSubtitle }}</span>
              <Skeleton v-else customClass="h-4 w-48" />
            </div>
          </div>
          <a href="#" class="text-sm font-medium text-primary-600 hover:underline">Lihat Semua →</a>
        </div>

        <AreaChart
          v-if="chartData.series.length"
          :series="chartData.series"
          :categories="chartData.categories"
          :colors="areaColors"
        />
        <div v-else class="flex min-h-[320px] items-center justify-center">
          <Skeleton customClass="h-[320px] w-full" />
        </div>

        <div class="mt-3 flex flex-wrap gap-4">
          <div
            v-for="s in chartData.series"
            :key="s.name"
            class="flex items-center gap-2 text-xs text-gray-500"
          >
            <span class="h-2 w-2 rounded-sm" :style="{ backgroundColor: colorFromName(s.name) }"></span>
            {{ s.name }}
          </div>
        </div>
      </article>


      <article class="rounded-xl border border-gray-200 bg-white p-5">
        <div class="mb-5">
          <div class="text-sm font-semibold">Komposisi Revenue</div>
          <div class="text-xs text-gray-400">Bulan berjalan</div>
        </div>
        <div class="flex flex-col items-center">
          <DonutChart
            v-if="donutData.series.length"
            :series="donutData.series"
            :labels="donutData.labels"
            :colors="donutColors"
          />
          <div v-else class="flex h-[280px] w-[280px] items-center justify-center rounded-full border-[30px] border-gray-100 animate-pulse mb-4">
          </div>
          <div class="w-full divide-y divide-gray-200">
            <div
              v-for="item in visibleRevenue"
              :key="item.name"
              class="flex items-center gap-2 py-1.5 text-xs"
            >
              <span class="h-2 w-2 flex-shrink-0 rounded" :style="{ backgroundColor: colorFromName(item.name) }"></span>
              <span class="flex-1 truncate text-gray-600" :title="item.name">{{ item.name }}</span>
              <span class="flex-shrink-0 font-mono font-semibold tabular-nums">{{ formatCompact(item.revenue) }}</span>
              <span class="flex-shrink-0 w-10 text-right font-mono text-gray-400">{{ item.percentage.toFixed(1) }}%</span>
            </div>
            <div v-if="!revenueMonthly.length" class="space-y-2 py-2">
              <Skeleton v-for="i in 5" :key="i" customClass="h-4 w-full" />
            </div>
          </div>
          <button
            v-if="revenueMonthly.length > REVENUE_PREVIEW"
            class="mt-2 w-full text-center text-xs text-primary-600 hover:underline"
            @click="showAllRevenue = !showAllRevenue"
          >
            {{ showAllRevenue ? 'Sembunyikan' : `Lihat ${revenueMonthly.length - REVENUE_PREVIEW} lainnya` }}
          </button>
        </div>
      </article>
    </section>

    <section class="grid grid-cols-1 gap-4 xl:grid-cols-2">
      <article class="rounded-xl border border-gray-200 bg-white p-5">
        <div class="mb-5">
          <div class="text-sm font-semibold">Health Metrics</div>
          <div class="text-xs text-gray-400">Indikator kunci bisnis</div>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="flex items-center justify-between gap-3 py-3 text-xs">
            <span class="min-w-0 text-gray-500">Churn Rate ISP</span>
            <div class="h-1 flex-1 overflow-hidden rounded-sm bg-gray-100">
              <div class="h-full rounded-sm bg-red-500" :style="{ width: health ? Math.min(health.churnRate * 1000, 100) + '%' : '0%' }"></div>
            </div>
            <span v-if="health" class="font-mono font-semibold text-red-500">{{ (health.churnRate * 100).toFixed(2) + '%' }}</span>
            <Skeleton v-else customClass="h-4 w-12" />
          </div>
          <div class="flex items-center justify-between gap-3 py-3 text-xs">
            <span class="min-w-0 text-gray-500">SLA Uptime</span>
            <div class="h-1 flex-1 overflow-hidden rounded-sm bg-gray-100">
              <div class="h-full rounded-sm bg-primary-600" :style="{ width: health ? ((1 - health.sla) * 100) + '%' : '0%' }"></div>
            </div>
            <span v-if="health" class="font-mono font-semibold text-primary-600">{{ ((1 - health.sla) * 100).toFixed(2) + '%' }}</span>
            <Skeleton v-else customClass="h-4 w-12" />
          </div>
          <div class="flex items-center justify-between gap-3 py-3 text-xs">
            <span class="min-w-0 text-gray-500">Collection Rate</span>
            <div class="h-1 flex-1 overflow-hidden rounded-sm bg-gray-100">
              <div class="h-full rounded-sm bg-violet-500" :style="{ width: health ? (health.collectionRate * 100) + '%' : '0%' }"></div>
            </div>
            <span v-if="health" class="font-mono font-semibold text-violet-500">{{ (health.collectionRate * 100).toFixed(1) + '%' }}</span>
            <Skeleton v-else customClass="h-4 w-12" />
          </div>
          <div class="flex items-center justify-between gap-3 py-3 text-xs">
            <span class="min-w-0 text-gray-500">Tiket Selesai</span>
            <div class="h-1 flex-1 overflow-hidden rounded-sm bg-gray-100">
              <div class="h-full rounded-sm bg-yellow-400" :style="{ width: health ? (health.tickets * 100) + '%' : '0%' }"></div>
            </div>
            <span v-if="health" class="font-mono font-semibold text-yellow-500">{{ (health.tickets * 100).toFixed(1) + '%' }}</span>
            <Skeleton v-else customClass="h-4 w-12" />
          </div>
          <div class="flex items-center justify-between gap-3 py-3 text-xs">
            <span class="min-w-0 text-gray-500">ARPU ISP</span>
            <div class="h-1 flex-1 overflow-hidden rounded-sm bg-gray-100">
              <div class="h-full rounded-sm bg-emerald-500" :style="{ width: health ? Math.min(health.arpu / 1_000_000 * 100, 100) + '%' : '0%' }"></div>
            </div>
            <span v-if="health" class="font-mono font-semibold">Rp {{ formatCompact(health.arpu) }}</span>
            <Skeleton v-else customClass="h-4 w-16" />
          </div>
        </div>
      </article>

      <!-- <article class="rounded-xl border border-gray-200 bg-white p-5">
        <div class="mb-5">
          <div class="text-sm font-semibold">Funnel Home Connect</div>
          <div class="text-xs text-gray-400">Konversi per kawasan</div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="relative flex items-center justify-between overflow-hidden rounded-sm bg-gray-100 px-4 py-2 text-xs">
            <div class="funnel-fill bg-primary-600" style="width:100%"></div>
            <span class="relative z-10 flex items-center gap-1.5 font-medium"><MapPin class="h-4 w-4" /> ONU Terpasang</span>
            <div class="relative z-10 text-right">
              <div class="font-mono font-bold text-xs">6.480</div>
              <div class="text-xs text-gray-400 font-mono">100%</div>
            </div>
          </div>
          <div class="relative flex items-center justify-between overflow-hidden rounded-sm bg-gray-100 px-4 py-2 text-xs">
            <div class="funnel-fill bg-primary-600" style="width:94%"></div>
            <span class="relative z-10 flex items-center gap-1.5 font-medium"><CheckCircle2 class="h-4 w-4" /> Aktivasi Berhasil</span>
            <div class="relative z-10 text-right">
              <div class="font-mono font-bold text-xs">6.091</div>
              <div class="text-xs text-gray-400 font-mono">94%</div>
            </div>
          </div>
          <div class="relative flex items-center justify-between overflow-hidden rounded-sm bg-gray-100 px-4 py-2 text-xs">
            <div class="funnel-fill bg-primary-600" style="width:60%"></div>
            <span class="relative z-10 flex items-center gap-1.5 font-medium"><Activity class="h-4 w-4" /> Aktif Gunakan</span>
            <div class="relative z-10 text-right">
              <div class="font-mono font-bold text-xs">3.880</div>
              <div class="text-xs text-gray-400 font-mono">60%</div>
            </div>
          </div>
          <div class="relative flex items-center justify-between overflow-hidden rounded-sm bg-gray-100 px-4 py-2 text-xs">
            <div class="funnel-fill bg-emerald-500" style="width:49%"></div>
            <span class="relative z-10 flex items-center gap-1.5 font-medium"><CreditCard class="h-4 w-4" /> Konversi Berbayar</span>
            <div class="relative z-10 text-right">
              <div class="font-mono font-bold text-xs">3.210</div>
              <div class="text-xs font-bold text-emerald-600 font-mono">49,5% ✓</div>
            </div>
          </div>
          <div class="mt-3 rounded-sm bg-emerald-50 px-4 py-3 text-xs text-emerald-800">
            <span class="flex items-start gap-1.5">
              <Target class="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>Target konversi 50% hampir tercapai. Estimasi tambahan revenue: <strong class="font-bold">Rp 580 juta/bulan</strong></span>
            </span>
          </div>
        </div>
      </article> -->


      <article class="rounded-xl border border-gray-200 bg-white p-5">
        <div class="mb-5 flex items-center justify-between gap-3">
          <div>
            <div class="text-sm font-semibold">Alert &amp; Notifikasi</div>
            <div class="text-xs text-gray-400">Perlu perhatian Anda</div>
          </div>
          <a href="#" class="text-sm font-medium text-primary-600 hover:underline">Semua →</a>
        </div>
        <div class="space-y-2">
          <template v-if="alerts.length > 0">
            <div
              v-for="alert in alerts"
              :key="alert.id"
              :class="['rounded-sm p-3', {
                'bg-red-50': alert.type === 'danger',
                'bg-yellow-50': alert.type === 'warning',
                'bg-primary-50': alert.type === 'info',
                'bg-emerald-50': alert.type === 'success'
              }]"
            >
              <div class="flex items-start gap-3 text-sm">
                <TriangleAlert v-if="alert.type === 'danger'" class="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                <ReceiptText v-else-if="alert.type === 'warning'" class="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
                <RefreshCcw v-else-if="alert.type === 'info'" class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600" />
                <MapPin v-else class="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                <div class="space-y-0.5">
                  <h1 class="font-semibold block text-gray-900">{{ alert.title }}</h1>
                  <p class="text-xs text-gray-500">{{ alert.content }}</p>
                  <span class="text-xs text-gray-400 font-mono">{{ alert.time }}</span>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="isAlertsLoading">
            <div v-for="i in 3" :key="i" class="rounded-sm bg-gray-50 p-3">
              <div class="flex items-start gap-3">
                <Skeleton customClass="h-5 w-5" />
                <div class="flex-1 space-y-2">
                  <Skeleton customClass="h-4 w-1/3" />
                  <Skeleton customClass="h-3 w-full" />
                </div>
              </div>
            </div>
          </template>
          <div v-else class="p-8 text-center text-xs text-gray-400">Tidak ada notifikasi baru</div>
        </div>
      </article>
    </section>
  </main>
</template>


<script setup lang="ts">
import {
  Coins, ArrowUp, ArrowDown, Wifi, Users, House,
  MapPin, CheckCircle2, Activity, CreditCard, Target,
  TriangleAlert, ReceiptText, RefreshCcw
} from 'lucide-vue-next'
import { generalService } from '~/services/general-service'
import { formatCompact, formatNumber } from '~/utils/format'
import { colorFromName } from '~/utils/color'
import type { RevenueStats, IspStats, NusaWorkStats, HomeConnectStats, RevenuePeriodItem, RevenueMonthlyItem, HealthStats, AlertItem, NocStatus } from '~/types/general'

const revenue = ref<RevenueStats | null>(null)
const isp = ref<IspStats | null>(null)
const nusawork = ref<NusaWorkStats | null>(null)
const homeconnect = ref<HomeConnectStats | null>(null)
const revenuePeriod = ref<RevenuePeriodItem[]>([])
const revenueMonthly = ref<RevenueMonthlyItem[]>([])
const health = ref<HealthStats | null>(null)
const noc = ref<NocStatus | null>(null)
const alerts = ref<AlertItem[]>([])
const isAlertsLoading = ref(true)
const sortedRevenueMonthly = computed(() =>
  [...revenueMonthly.value].sort((a, b) => b.revenue - a.revenue)
)
const showAllRevenue = ref(false)
const REVENUE_PREVIEW = 10
const visibleRevenue = computed(() =>
  showAllRevenue.value ? sortedRevenueMonthly.value : sortedRevenueMonthly.value.slice(0, REVENUE_PREVIEW)
)

onMounted(() => {
  generalService.getRevenueStats().then(res => revenue.value = res.data)
  generalService.getIspStats().then(res => isp.value = res.data)
  generalService.getNusaWorkStats().then(res => nusawork.value = res.data)
  generalService.getHomeConnectStats().then(res => homeconnect.value = res.data)
  generalService.getRevenuePeriod().then(res => revenuePeriod.value = res.data)
  generalService.getRevenueMonthly().then(res => revenueMonthly.value = res.data)
  generalService.getHealthStats().then(res => health.value = res.data)
  generalService.getNocStatus().then(res => noc.value = res.data)
  generalService.getAlerts().then(res => {
    alerts.value = res.data
    isAlertsLoading.value = false
  })
})

const donutData = computed(() => ({
  series: sortedRevenueMonthly.value.map(item => item.revenue),
  labels: sortedRevenueMonthly.value.map(item => item.name),
}))

const MONTH_SHORT = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des']

const donutColors = computed(() => sortedRevenueMonthly.value.map(item => colorFromName(item.name)))
const areaColors = computed(() => chartData.value.series.map(s => colorFromName(s.name)))

const chartData = computed(() => {
  if (!revenuePeriod.value.length) return { categories: [], series: [] }

  const categories = revenuePeriod.value.map(p => p.monthName.substring(0, 3))

  const names = [...new Set(revenuePeriod.value.flatMap(p => p.data.map(d => d.name)))]
  const series = names.map(name => ({
    name,
    data: revenuePeriod.value.map(p => {
      const item = p.data.find(d => d.name === name)
      return item ? +(item.revenue / 1_000_000).toFixed(0) : 0
    })
  }))

  return { categories, series }
})

const chartSubtitle = computed(() => {
  const first = revenuePeriod.value.at(0)
  const last = revenuePeriod.value.at(-1)
  if (!first || !last) return ''
  const [fy = '', fm = '1'] = first.period.split('-')
  const [ly = '', lm = '1'] = last.period.split('-')
  const start = MONTH_SHORT[parseInt(fm) - 1] ?? ''
  const end = MONTH_SHORT[parseInt(lm) - 1] ?? ''
  return fy === ly
    ? `${start} – ${end} ${fy} (dalam juta Rp)`
    : `${start} ${fy} – ${end} ${ly} (dalam juta Rp)`
})

</script>