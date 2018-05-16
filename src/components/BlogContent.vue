<template>
  <div>
    <div v-html="htmlPost">
    </div>
  </div>
</template>

<script>
import axios from "axios"
import md from '../utils/markdownUtils'
export default {
  name:'BlogContent',
  data:()=>({
    post:''
  }),
  created(){
    const id = this.$route.params.id
    const uri =`https://raw.githubusercontent.com/wdsuperman/markdown/master/data/posts/${id}.md`
    axios.get(uri).then(res => {
      // console.log(res.data)
      this.post = res.data
    })
  },
  computed:{
    htmlPost(){
      return md.render(this.post)
    }
  }
}
</script>

<style>

</style>
