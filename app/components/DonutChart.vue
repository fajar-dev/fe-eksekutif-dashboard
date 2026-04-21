<template>
  <div ref="chartRef" class="min-h-[240px] w-full"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  series: {
    type: Array,
    required: true
  },
  labels: {
    type: Array,
    required: true
  },
  colors: {
    type: Array,
    default: () => ['#1c64f2', '#7B61FF', '#10B981', '#F59E0B']
  }
})

const chartRef = ref(null)
let chart = null

onMounted(async () => {
  if (process.client) {
    const { default: ApexCharts } = await import('apexcharts')
    
    const options = {
      series: props.series,
      chart: {
        type: 'donut',
        height: 240,
        fontFamily: 'Sora, sans-serif'
      },
      colors: props.colors,
      labels: props.labels,
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '10px',
                color: '#9CA3AF',
                offsetY: 20
              },
              value: {
                show: true,
                fontSize: '20px',
                fontWeight: 700,
                color: '#111827',
                offsetY: -15,
                formatter: (val) => val + 'M'
              },
              total: {
                show: true,
                label: 'Omset/Tahun',
                formatter: () => '110'
              }
            }
          }
        }
      },
      dataLabels: { enabled: false },
      legend: { show: false },
      stroke: { width: 0 },
      tooltip: {
        enabled: true,
        theme: 'light'
      },
      states: {
        hover: {
          filter: { type: 'none' }
        }
      }
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
