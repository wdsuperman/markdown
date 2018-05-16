<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  },
  created() {
    this.$store.dispatch({ type: 'fetchPosts' })
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing:border-box;
  text-decoration: none;
}
</style>
