<template>
  <h1>INDEX</h1>
</template>

<script>
export default {
  created () {
    this.$api.get('topics', res => {
      if (res.status === 200) {
        console.log(res.data)
        this.$Message.success('连接成功')
      } else {
        this.$Message.error('网络错误')
      }
    })
  }
}
</script>
