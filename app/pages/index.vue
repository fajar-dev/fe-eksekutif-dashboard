<template>
  <main class="p-4 sm:p-6 lg:p-8">
    <div class="mb-6 flex flex-col gap-3 rounded-sm border border-yellow-300 bg-yellow-50 px-4 py-3 text-sm text-yellow-900 sm:flex-row sm:items-center">
      <div class="flex items-center gap-3">
        <span class="h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400 animate-pulse-soft"></span>
        <span><strong>3 area jaringan</strong> mengalami degradasi di Medan Utara — Tim NOC sedang investigasi.</span>
      </div>
      <a href="#" class="sm:ml-auto font-semibold text-yellow-700 hover:underline">Lihat Detail →</a>
    </div>

    <section class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      <article class="rounded-xl border border-gray-200 bg-white p-5">
        <div class="mb-4 flex items-start justify-between gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-sm bg-blue-50 text-lg">💰</div>
          <span class="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">↑ 8.4%</span>
        </div>
        <div class="font-mono text-2xl font-semibold">9,2M</div>
        <div class="text-xs text-gray-500">Revenue Bulan Ini (Rp)</div>
        <div class="mt-2 border-t border-gray-200 pt-2 text-xs text-gray-400">Target: Rp 9,5M · Progress 96,8%</div>
      </article>

      <article class="rounded-xl border border-gray-200 bg-white p-5">
        <div class="mb-4 flex items-start justify-between gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-sm bg-emerald-50 text-lg">📡</div>
          <span class="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">↑ 312</span>
        </div>
        <div class="font-mono text-2xl font-semibold">14.820</div>
        <div class="text-xs text-gray-500">Pelanggan ISP Aktif</div>
        <div class="mt-2 border-t border-gray-200 pt-2 text-xs text-gray-400">Churn bulan ini: 89 pelanggan (0,6%)</div>
      </article>

      <article class="rounded-xl border border-gray-200 bg-white p-5">
        <div class="mb-4 flex items-start justify-between gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-sm bg-purple-50 text-lg">👥</div>
          <span class="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">↑ 4,2%</span>
        </div>
        <div class="font-mono text-2xl font-semibold">18.240</div>
        <div class="text-xs text-gray-500">Pengguna NusaWork</div>
        <div class="mt-2 border-t border-gray-200 pt-2 text-xs text-gray-400">100 perusahaan · MRR tumbuh stabil</div>
      </article>

      <article class="rounded-xl border border-gray-200 bg-white p-5">
        <div class="mb-4 flex items-start justify-between gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-sm bg-yellow-50 text-lg">🏠</div>
          <span class="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">↑ 2.140</span>
        </div>
        <div class="font-mono text-2xl font-semibold">6.480</div>
        <div class="text-xs text-gray-500">Home Connect ONU Aktif</div>
        <div class="mt-2 border-t border-gray-200 pt-2 text-xs text-gray-400">Konversi paid: 3.210 (49,5%)</div>
      </article>
    </section>

    <section class="mb-6 grid grid-cols-1 gap-4 xl:grid-cols-3">
      <article class="rounded-xl border border-gray-200 bg-white p-5 xl:col-span-2">
        <div class="mb-5 flex items-center justify-between gap-3">
          <div>
            <div class="text-sm font-semibold">Tren Revenue per Unit Bisnis</div>
            <div class="text-xs text-gray-400">Jan – Mar 2026 (dalam juta Rp)</div>
          </div>
          <a href="#" class="text-sm font-medium text-blue-600 hover:underline">Lihat Semua →</a>
        </div>

        <AreaChart 
          :series="chartData.series" 
          :categories="chartData.categories" 
        />

        <div class="mt-3 flex flex-wrap gap-4">
          <div class="flex items-center gap-2 text-xs text-gray-500"><span class="h-2 w-2 rounded-sm bg-blue-600"></span>ISP (80%)</div>
          <div class="flex items-center gap-2 text-xs text-gray-500"><span class="h-2 w-2 rounded-sm bg-violet-500"></span>NusaWork SaaS</div>
          <div class="flex items-center gap-2 text-xs text-gray-500"><span class="h-2 w-2 rounded-sm bg-emerald-500"></span>GWS Reseller</div>
          <div class="flex items-center gap-2 text-xs text-gray-500"><span class="h-2 w-2 rounded-sm bg-yellow-400"></span>Home Connect</div>
        </div>
      </article>


      <article class="rounded-xl border border-gray-200 bg-white p-5">
        <div class="mb-5">
          <div class="text-sm font-semibold">Komposisi Revenue</div>
          <div class="text-xs text-gray-400">Bulan berjalan</div>
        </div>
        <div class="flex flex-col items-center">
          <DonutChart 
            :series="donutData.series" 
            :labels="donutData.labels" 
          />
          <div class="w-full divide-y divide-gray-200">
            <div class="flex items-center justify-between py-1.5 text-xs"><div class="flex items-center gap-2"><span class="h-2 w-2 rounded bg-blue-600"></span>ISP</div><div class="font-mono font-semibold">80%</div></div>
            <div class="flex items-center justify-between py-1.5 text-xs"><div class="flex items-center gap-2"><span class="h-2 w-2 rounded bg-violet-500"></span>NusaWork</div><div class="font-mono font-semibold">12%</div></div>
            <div class="flex items-center justify-between py-1.5 text-xs"><div class="flex items-center gap-2"><span class="h-2 w-2 rounded bg-emerald-500"></span>GWS</div><div class="font-mono font-semibold">5%</div></div>
            <div class="flex items-center justify-between py-1.5 text-xs"><div class="flex items-center gap-2"><span class="h-2 w-2 rounded bg-yellow-400"></span>Home Connect</div><div class="font-mono font-semibold">3%</div></div>
          </div>
        </div>
      </article>
    </section>

    <section class="grid grid-cols-1 gap-4 xl:grid-cols-3">
      <article class="rounded-xl border border-gray-200 bg-white p-5">
        <div class="mb-5">
          <div class="text-sm font-semibold">Health Metrics</div>
          <div class="text-xs text-gray-400">Indikator kunci bisnis</div>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="flex items-center justify-between gap-3 py-3 text-xs">
            <span class="min-w-0 text-gray-500">Churn Rate ISP</span>
            <div class="h-1 flex-1 overflow-hidden rounded-sm bg-gray-100"><div class="h-full rounded-sm bg-red-500" style="width:6%"></div></div>
            <span class="font-mono font-semibold text-red-500">0,6%</span>
          </div>
          <div class="flex items-center justify-between gap-3 py-3 text-xs">
            <span class="min-w-0 text-gray-500">NPS Score</span>
            <div class="h-1 flex-1 overflow-hidden rounded-sm bg-gray-100"><div class="h-full rounded-sm bg-emerald-500" style="width:74%"></div></div>
            <span class="font-mono font-semibold text-emerald-500">74</span>
          </div>
          <div class="flex items-center justify-between gap-3 py-3 text-xs">
            <span class="min-w-0 text-gray-500">SLA Uptime</span>
            <div class="h-1 flex-1 overflow-hidden rounded-sm bg-gray-100"><div class="h-full rounded-sm bg-blue-600" style="width:99%"></div></div>
            <span class="font-mono font-semibold text-blue-600">99,1%</span>
          </div>
          <div class="flex items-center justify-between gap-3 py-3 text-xs">
            <span class="min-w-0 text-gray-500">Collection Rate</span>
            <div class="h-1 flex-1 overflow-hidden rounded-sm bg-gray-100"><div class="h-full rounded-sm bg-violet-500" style="width:91%"></div></div>
            <span class="font-mono font-semibold text-violet-500">91%</span>
          </div>
          <div class="flex items-center justify-between gap-3 py-3 text-xs">
            <span class="min-w-0 text-gray-500">Tiket Selesai</span>
            <div class="h-1 flex-1 overflow-hidden rounded-sm bg-gray-100"><div class="h-full rounded-sm bg-yellow-400" style="width:87%"></div></div>
            <span class="font-mono font-semibold text-yellow-500">87%</span>
          </div>
          <div class="flex items-center justify-between gap-3 py-3 text-xs">
            <span class="min-w-0 text-gray-500">ARPU ISP</span>
            <div class="h-1 flex-1 overflow-hidden rounded-sm bg-gray-100"><div class="h-full rounded-sm bg-emerald-500" style="width:65%"></div></div>
            <span class="font-mono font-semibold">Rp 182K</span>
          </div>
        </div>
      </article>

      <article class="rounded-xl border border-gray-200 bg-white p-5">
        <div class="mb-5">
          <div class="text-sm font-semibold">Funnel Home Connect</div>
          <div class="text-xs text-gray-400">Konversi per kawasan</div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="relative flex items-center justify-between overflow-hidden rounded-sm bg-gray-100 px-4 py-2 text-xs">
            <div class="funnel-fill bg-blue-600" style="width:100%"></div>
            <span class="relative z-10 font-medium">📍 ONU Terpasang</span>
            <div class="relative z-10 text-right">
              <div class="font-mono font-bold text-xs">6.480</div>
              <div class="text-xs text-gray-400 font-mono">100%</div>
            </div>
          </div>
          <div class="relative flex items-center justify-between overflow-hidden rounded-sm bg-gray-100 px-4 py-2 text-xs">
            <div class="funnel-fill bg-blue-600" style="width:94%"></div>
            <span class="relative z-10 font-medium">✅ Aktivasi Berhasil</span>
            <div class="relative z-10 text-right">
              <div class="font-mono font-bold text-xs">6.091</div>
              <div class="text-xs text-gray-400 font-mono">94%</div>
            </div>
          </div>
          <div class="relative flex items-center justify-between overflow-hidden rounded-sm bg-gray-100 px-4 py-2 text-xs">
            <div class="funnel-fill bg-blue-600" style="width:60%"></div>
            <span class="relative z-10 font-medium">📶 Aktif Gunakan</span>
            <div class="relative z-10 text-right">
              <div class="font-mono font-bold text-xs">3.880</div>
              <div class="text-xs text-gray-400 font-mono">60%</div>
            </div>
          </div>
          <div class="relative flex items-center justify-between overflow-hidden rounded-sm bg-gray-100 px-4 py-2 text-xs">
            <div class="funnel-fill bg-emerald-500" style="width:49%"></div>
            <span class="relative z-10 font-medium">💳 Konversi Berbayar</span>
            <div class="relative z-10 text-right">
              <div class="font-mono font-bold text-xs">3.210</div>
              <div class="text-xs font-bold text-emerald-600 font-mono">49,5% ✓</div>
            </div>
          </div>
          <div class="mt-3 rounded-sm bg-emerald-50 px-4 py-3 text-xs text-emerald-800">
            🎯 Target konversi 50% hampir tercapai. Estimasi tambahan revenue: <strong class="font-bold">Rp 580 juta/bulan</strong>
          </div>
        </div>
      </article>


      <article class="rounded-xl border border-gray-200 bg-white p-5">
        <div class="mb-5 flex items-center justify-between gap-3">
          <div>
            <div class="text-sm font-semibold">Alert &amp; Notifikasi</div>
            <div class="text-xs text-gray-400">Perlu perhatian Anda</div>
          </div>
          <a href="#" class="text-sm font-medium text-blue-600 hover:underline">Semua →</a>
        </div>
        <div class="space-y-2">
          <div class="rounded-sm bg-red-50 p-3">
            <div class="flex items-start gap-3 text-sm">
              <span class="mt-0.5 flex-shrink-0">🔴</span>
              <div class="space-y-0.5">
                <h1 class="font-semibold block text-gray-900">Gangguan Jaringan Aktif</h1>
                <p class="text-xs text-gray-500">3 node di Medan Utara down. 248 pelanggan terdampak.</p>
                <span class="text-xs text-gray-400 font-mono">09:14 · 2 jam lalu</span>
              </div>
            </div>
          </div>
          <div class="rounded-sm bg-yellow-50 p-3">
            <div class="flex items-start gap-3 text-sm">
              <span class="mt-0.5 flex-shrink-0">🟡</span>
              <div class="space-y-0.5">
                <h1 class="font-semibold block text-gray-900">Invoice Jatuh Tempo</h1>
                <p class="text-xs text-gray-500">Rp 1,2M outstanding &gt; 60 hari dari 14 pelanggan bisnis.</p>
                <span class="text-xs text-gray-400">08:00 · Hari ini</span>
              </div>
            </div>
          </div>
          <div class="rounded-sm bg-blue-50 p-3">
            <div class="flex items-start gap-3 text-sm">
              <span class="mt-0.5 flex-shrink-0">🔵</span>
              <div class="space-y-0.5">
                <h1 class="font-semibold block text-gray-900">NusaWork — Renewal Masuk</h1>
                <p class="text-xs text-gray-500">8 perusahaan renewal bulan ini. Total ARR: Rp 890 juta.</p>
                <span class="text-xs text-gray-400">Kemarin · 16:30</span>
              </div>
            </div>
          </div>
          <div class="rounded-sm bg-emerald-50 p-3">
            <div class="flex items-start gap-3 text-sm">
              <span class="mt-0.5 flex-shrink-0">🟢</span>
              <div class="space-y-0.5">
                <h1 class="font-semibold block text-gray-900">Kawasan Baru Siap</h1>
                <p class="text-xs text-gray-500">Fiber Kawasan Perumahan Helvetia aktif. 1.200 rumah siap ONU.</p>
                <span class="text-xs text-gray-400">Kemarin · 10:00</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>


<script setup lang="ts">
const chartData = {
  categories: ['Jan', 'Feb', 'Mar', 'Apr'],
  series: [
    { name: 'ISP', data: [80, 82, 85, 88] },
    { name: 'NusaWork', data: [12, 15, 18, 22] },
    { name: 'GWS', data: [8, 9, 10, 11] },
    { name: 'Home Connect', data: [4, 6, 8, 10] }
  ]
}

const donutData = {
  series: [80, 12, 5, 3],
  labels: ['ISP', 'NusaWork', 'GWS', 'Home Connect']
}
</script>