<template>
  <div ref="chartRef" class="min-h-[240px] w-full"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  series: { type: Array, required: true },
  labels: { type: Array, required: true },
  colors: { type: Array, default: () => ['#1c64f2', '#7B61FF', '#10B981', '#F59E0B'] }
})

const chartRef = ref(null)
let chart = null

function fmt(val) {
  if (val >= 1_000_000_000) return (val / 1_000_000_000).toLocaleString('id-ID', { maximumFractionDigits: 2 }) + 'M'
  if (val >= 1_000_000) return (val / 1_000_000).toLocaleString('id-ID', { maximumFractionDigits: 1 }) + 'jt'
  if (val >= 1_000) return (val / 1_000).toLocaleString('id-ID', { maximumFractionDigits: 1 }) + 'rb'
  return val.toLocaleString('id-ID')
}

onMounted(async () => {
  if (process.client) {
    const { default: ApexCharts } = await import('apexcharts')

    const total = props.series.reduce((sum, v) => sum + v, 0)

    const options = {
      series: props.series,
      chart: { type: 'donut', height: 240, fontFamily: 'Sora, sans-serif' },
      colors: props.colors,
      labels: props.labels,
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
            labels: {
              show: true,
              name: { show: true, fontSize: '10px', color: '#9CA3AF', offsetY: 20 },
              value: {
                show: true,
                fontSize: '18px',
                fontWeight: 700,
                color: '#111827',
                offsetY: -15,
                formatter: fmt
              },
              total: {
                show: true,
                label: 'Total',
                fontSize: '10px',
                color: '#9CA3AF',
                formatter: () => fmt(total)
              }
            }
          }
        }
      },
      dataLabels: { enabled: false },
      legend: { show: false },
      stroke: { width: 0 },
      tooltip: {
        custom: ({ seriesIndex, w }) => {
          const val = w.config.series[seriesIndex]
          const name = w.config.labels[seriesIndex]
          const color = w.globals.colors[seriesIndex]
          const pct = total > 0 ? ((val / total) * 100).toFixed(1) : '0'
          return `<div style="padding:4px 8px;background:#fff;border:1px solid #E5E7EB;border-radius:5px;box-shadow:0 1px 6px rgba(0,0,0,.07);display:flex;align-items:center;gap:5px;max-width:220px;">
            <span style="width:6px;height:6px;border-radius:1px;background:${color};flex-shrink:0;"></span>
            <span style="font-size:10px;color:#6B7280;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${name}</span>
            <span style="font-size:10px;font-weight:600;font-family:'JetBrains Mono',monospace;margin-left:auto;padding-left:6px;white-space:nowrap;">${fmt(val)} · ${pct}%</span>
          </div>`
        }
      },
      states: { hover: { filter: { type: 'none' } } }
    }

    chart = new ApexCharts(chartRef.value, options)
    chart.render()
  }
})

onBeforeUnmount(() => {
  if (chart) {
    chart.destroy()
  }
})
</script>
