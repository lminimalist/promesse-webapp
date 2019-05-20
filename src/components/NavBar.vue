<template>
  <div>
    <div class="flex flex-col md:w-56 h-screen bg-gray-200 px-6 pt-10">
      <nav class="">
        <div id="analyze">
          <h4 class="mb-2 uppercase text-xs tracking-wide font-medium">Analyze</h4>
          <div class="flex flex-col">
            <router-link :to="{ name: 'returns' }">Historical Volatility</router-link>
            <router-link :to="{ name: 'returns' }">Correlations</router-link>
          </div>
        </div>
      </nav>

      <div class="brand flex items-center mt-auto mb-6">
        <img class="w-5 h-5" src="../assets/promesse-icon.png" srcset="../assets/promesse-icon.png 2x">
        <span class="ml-1 text-lg">promesse</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
