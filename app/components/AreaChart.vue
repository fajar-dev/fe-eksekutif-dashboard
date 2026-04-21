<template>
  <div ref="chartRef" class="min-h-[320px]"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  series: {
    type: Array,
    required: true
  },
  categories: {
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
        type: 'area',
        height: 320,
        toolbar: { show: false },
        zoom: { enabled: false },
        fontFamily: 'Sora, sans-serif'
      },
      colors: props.colors,
      dataLabels: { enabled: false },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100]
        }
      },
      xaxis: {
        categories: props.categories,
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
          style: {
            colors: '#9CA3AF',
            fontSize: '10px',
            fontFamily: 'JetBrains Mono, monospace'
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#9CA3AF',
            fontSize: '10px',
            fontFamily: 'JetBrains Mono, monospace'
          },
          formatter: (val) => `${val}M`
        }
      },
      grid: {
        show: true,
        borderColor: '#f1f1f1',
        strokeDashArray: 4,
        padding: {
          left: -10,
          right: 0,
          bottom: -10
        }
      },
      tooltip: {
        theme: 'light',
        x: { show: true },
        y: {
          formatter: (val) => `Rp ${val}M`
        }
      },
      legend: { show: false }
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
