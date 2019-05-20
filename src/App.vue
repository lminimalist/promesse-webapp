<template>
  <div id="app" class="flex">
    <NavBar/>
    <div class="container mx-10 my-10">
      <router-view />
    </div>
  </div>
</template>

<script>
import '@/assets/css/main.css'
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style>
</style>
