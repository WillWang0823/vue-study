<template>
  <div>
    Login {{ this.$store.state.count }}
    <el-button @click="increment">累加</el-button>
    <el-button @click="setToken">设置Token</el-button>
  </div>
</template>

<script>
import {setToken} from '@/utils/token'

export default {
  name: "Login",
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    setToken() {
      setToken('123123123')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
