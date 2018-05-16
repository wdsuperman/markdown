<template>
  <div>
    <h1>博客首页</h1>
    <ul>
      <li v-for="post in posts" :key="post.id" >
        <router-link :to="`/blog/${post.id}`">
        {{ post.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BlogHome',
  data:()=>({
    posts:[]
  }),
  created(){
    const url ='https://raw.githubusercontent.com/wdsuperman/markdown/master/data/posts/index.json'
    axios.get(url).then(res =>{
      console.log('我的目录', res.data)
      this.posts = res.data
    })
  }
}
</script>
