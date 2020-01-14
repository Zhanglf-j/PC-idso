<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import store from './store/store.js'
export default {
  name: 'App',
  store,
  mounted () {
    // $('#pp').click(function () {
    //   console.log(287484)
    // })
  }
}
</script>

<style lang="less">
@import 'assets/css/common.less';
body,html {
  width: 100%;
  height:100%;
  font-size: 13px;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
