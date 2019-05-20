<template>
  <div>
    <h2 class="mb-8 text-2xl font-medium">Historical Volatility</h2>
    <div>
      <form class="mb-10" @submit.prevent="runQuery">
        <div class="flex mb-6">
          <div class="flex flex-col">
            <label for="asset">Asset</label>
            <input id="asset" v-model="ticker" type="text" placeholder="Type one ...">
          </div>
          <div class="flex flex-col">
            <label for="time-period">Time Period</label>
            <input id="time-period" v-model="timePeriod" type="text" placeholder="Choose ...">
          </div>
        </div>

        <button class="bg-red-400 text-white p-2 rounded">Run analysis</button>
      </form>

      <div class="results" v-if="histoData">
        <vue-plotly :data="histoData" :layout="layout" :options="options"/>
      </div>
    </div>
  </div>
</template>

<script>
import FinanceService from '@/services/FinanceService.js'
import VuePlotly from '@statnett/vue-plotly'

export default {
  components: {
    VuePlotly
  },
  data() {
    return {
      ticker: null,
      timePeriod: null,
      histoData: null,
      layout: {
        title: 'Daily Returns',
        barmode: 'overlay',
        bargap: 0.05,
        bargroupgap: 0.2
      },
      options: {}
    }
  },
  methods: {
    runQuery() {
      FinanceService.getAsset(this.ticker, this.timePeriod)
        .then(response => {
          const priceHistory = response.data['price_history']
          const returnsData = priceHistory.map(el => el['pct_returns'])
          this.histoData = [{ x: returnsData, type: 'histogram' }]
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
</style>