<template>
  <div>
    Layout {{ this.$store.state.count }}
    <el-button @click="increment">累加</el-button>
    <el-button @click="delToken">删除Token</el-button>
  </div>
</template>

<script>
import {removeToken} from '@/utils/token'

export default {
  name: "Layout",
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    delToken() {
      removeToken()
      location.reload()
    }
  }
}
</script>

<style scoped>

</style>
