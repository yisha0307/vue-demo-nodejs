<template>
  <div>
    <Header></Header>
    <h2 v-text = "text.title"></h2>
    <article v-html="text.content"></article>
    <br />
    <h3>网友回复：</h3>
    <ul>
      <li v-for = "i in text.replies" :key="i.id">
        <p>评论者: {{i.author.loginname}}</p>
        <article v-html="i.content">
        </article>
      </li>
    </ul>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/header'
import Footer from '../components/footer'

export default {
  components: { Header, Footer },
  data () {
    return {
      id: this.$route.params.id,
      text: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get(`topic/${this.id}`, res => {
        if (res.status === 200) {
          this.text = res.data.data
        } else {
          this.$Message.error('连接错误')
        }
      })
    }
  }
}
</script>
