<template>
  <div id="app">
    <RedPackage />
  </div>
</template>

<script>
import RedPackage from './components/RedPackage'
export default {
  name: 'App',
  components: {
    RedPackage,
  },
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
}
</style>
