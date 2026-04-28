<template>
  <div ref="chartRef" :style="{ minHeight: chartHeight + 'px' }"></div>
</template>

<script setup>
const props = defineProps({
  series: { type: Array, required: true },
  categories: { type: Array, required: true },
  colors: { type: Array, default: () => ['#1c64f2', '#7B61FF', '#10B981', '#F59E0B'] }
})

const chartRef = ref(null)
let chart = null

const chartHeight = computed(() => props.categories.length > 8 ? 380 : 320)

function fmtJuta(val) {
  if (val >= 1000) return `${(val / 1000).toLocaleString('id-ID', { maximumFractionDigits: 1 })}M`
  return `${val}jt`
}

onMounted(async () => {
  if (process.client) {
    const { default: ApexCharts } = await import('apexcharts')

    const manyPoints = props.categories.length > 6

    const options = {
      series: props.series,
      chart: {
        type: 'area',
        height: chartHeight.value,
        toolbar: { show: false },
        zoom: { enabled: false },
        fontFamily: 'Sora, sans-serif'
      },
      colors: props.colors,
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth', width: 2 },
      fill: {
        type: 'gradient',
        gradient: { shadeIntensity: 1, opacityFrom: 0.45, opacityTo: 0.05, stops: [20, 100] }
      },
      xaxis: {
        categories: props.categories,
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
          rotate: manyPoints ? -45 : 0,
          rotateAlways: manyPoints,
          hideOverlappingLabels: true,
          style: { colors: '#9CA3AF', fontSize: '10px', fontFamily: 'JetBrains Mono, monospace' }
        }
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          minWidth: 40,
          style: { colors: '#9CA3AF', fontSize: '10px', fontFamily: 'JetBrains Mono, monospace' },
          formatter: fmtJuta
        }
      },
      grid: {
        show: true,
        borderColor: '#f1f1f1',
        strokeDashArray: 4,
        padding: { left: 0, right: 0, bottom: manyPoints ? 10 : -10 }
      },
      tooltip: {
        shared: true,
        custom: ({ series, dataPointIndex, w }) => {
          const label = w.globals.labels[dataPointIndex]
          const rows = w.config.series.map((s, i) => {
            const val = series[i]?.[dataPointIndex] ?? 0
            const color = w.globals.colors[i] ?? '#000'
            return `<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
              <span style="display:inline-flex;align-items:center;gap:4px;">
                <span style="width:6px;height:6px;border-radius:1px;background:${color};flex-shrink:0;"></span>
                <span style="font-size:10px;color:#6B7280;">${s.name}</span>
              </span>
              <span style="font-size:10px;font-weight:600;font-family:'JetBrains Mono',monospace;">Rp ${fmtJuta(val)}</span>
            </div>`
          }).join('')
          return `<div style="padding:5px 8px;background:#fff;border:1px solid #E5E7EB;border-radius:6px;box-shadow:0 1px 6px rgba(0,0,0,.07);min-width:180px;">
            <div style="font-size:9px;font-weight:700;color:#9CA3AF;letter-spacing:.05em;margin-bottom:4px;font-family:'JetBrains Mono',monospace;">${label}</div>
            <div style="display:flex;flex-direction:column;gap:2px;">${rows}</div>
          </div>`
        }
      },
      legend: { show: false }
    }

    chart = new ApexCharts(chartRef.value, options)
    chart.render()
  }
})

onBeforeUnmount(() => {
  if (chart) chart.destroy()
})
</script>
