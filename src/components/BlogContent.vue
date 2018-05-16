<template>
  <div>
    content
  </div>
</template>

<script>
import axios from "axios"
export default {
  name:'BlogContent',
  created(){
    const uri ='https://raw.githubusercontent.com/wdsuperman/markdown/master/data/posts/1.md'
    axios.get(uri).then(res => {
      console.log(res.data)
    })
  }
}
</script>

<style>

</style>
