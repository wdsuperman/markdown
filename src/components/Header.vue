<template>
  <div class="header">
    <router-link to="/">Home</router-link>
    <span v-if="show">
      >
      <router-link :to="rootPath">{{pathName}}</router-link>
    </span>
  </div>
</template>

<script>
import { getPathName } from '../constants/RouteConstants'
import { getRootPath } from '../utils'

export default {
  name: 'Header',
  computed: {
    path() {
      return this.$route.path
    },
    rootPath() {
      return getRootPath(this.path)
    },
    show() {
      return this.path !== '/'
    },
    pathName() {
      return getPathName(this.rootPath)
    }
  }
}
</script>

<style>

</style>
