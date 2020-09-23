<template>
  <div class="nav">
    <breadcrumb class="breadcrumb-container"/>

    <div class="right-menu">
      <div class="right-menu-item">
        <i class="el-icon-user-solid"/>
        <span style="margin-left: 5px; font-size: 16px;">测试用户</span>
      </div>

      <div class="right-menu-item">
        <el-tooltip content="退出登录" placement="bottom">
          <el-button icon="el-icon-switch-button" circle @click="handleLogout"/>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/breadcrumb'
import {removeToken} from '@/utils/token'

export default {
  name: "Navbar",
  components: {
    Breadcrumb
  },
  methods: {
    handleLogout() {
      removeToken()
      location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }
  }
}
</style>
