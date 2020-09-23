<template>
  <div class="login-container">
    <el-form class="login-form" :model="loginInfo" ref="loginInfo" :rules="loginRules">
      <h2 class="title">Vue-Study</h2>
      <el-form-item prop="username">
        <el-input type="text" placeholder="用户名" prefix-icon="el-icon-user-solid" v-model="loginInfo.username"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="密码" prefix-icon="el-icon-lock" v-model="loginInfo.password" show-password/>
      </el-form-item>
      <el-button type="primary" style="width: 100%;" @click="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import {setToken} from '@/utils/token'

export default {
  name: "Login",
  data() {
    return {
      loginInfo: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginInfo.validate(valid => {
        if (valid) {
          setToken('test')
          this.$router.push('/')
        } else {
          this.$message.error('登录失败')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  min-height: 100%;
  overflow: hidden;
  background: url("~@/assets/bg.jpg") no-repeat center 0;

  .login-form {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    padding: 20px 40px 60px 40px;
    background: rgba(139, 157, 191, 0.4);

    .title {
      text-align: center;
      color: #fff;
    }
  }
}
</style>
