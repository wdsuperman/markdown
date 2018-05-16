<template>
  <div>
    <div v-html="htmlPost"></div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name:'BlogContent',
  data:()=>({
    post:''
  }),
  created(){
    const id = this.$toute.params.id
    const uri =`https://raw.githubusercontent.com/wdsuperman/markdown/master/data/posts/${id}.md`
    axios.get(uri).then(res => {
      console.log(res.data)
    })
  }
}
</script>

<style>

</style>
