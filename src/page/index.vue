<template>
  <div>
    <Header></Header>
    <ul>
      <li v-for="item in list" :key="item.id">
        <time v-text="item.create_at"></time>
        <router-link :to ="`/content/${item.id}`">{{item.title}}</router-link>
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
      list: []
    }
  },
  created () {
    this.$api.get('topics', res => {
      if (res.status === 200) {
        this.list = res.data.data
        this.$Message.success('连接成功')
      } else {
        this.$Message.error('网络错误')
      }
    })
  }
}
</script>
