<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <div>
        <navbar/>
      </div>
      主内容
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar'
import Navbar from '@/components/navbar'

export default {
  name: "Layout",
  components: {
    Sidebar,
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - 210px);
  transition: width 0.28s;
}
</style>
