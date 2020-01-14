<template>
    <div class="menuList">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vertical" :unique-opened="openTrue" @select="handleSelect">
        <el-menu-item index="1" @click="getRouter('workbenches')">
          <img src="../assets/images/workbenches.png" alt="">
          工作台
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <img v-if="currentPath != 2" src="../assets/images/outpatient.png" alt="">
            <img v-if="currentPath == 2" src="../assets/images/outpatient_active.png" alt="">
            门诊工作
          </template>
          <el-menu-item index="2-1">早会签到</el-menu-item>
          <el-menu-item index="2-2" @click="getRouter('outpatient')">早会看板</el-menu-item>
          <el-menu-item index="2-3">早会管理</el-menu-item>
          <el-menu-item index="2-4">门诊业绩设置</el-menu-item>
          <el-menu-item index="2-5">接班设置</el-menu-item>
          <el-menu-item index="2-6">门店信息设置</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" @click="getRouter('reception')">
          <img src="../assets/images/cart.png" alt="">
          接诊系统
        </el-menu-item>
        <el-menu-item index="4">
          <img src="../assets/images/cart.png" alt="">
          患者管理
        </el-menu-item>
        <el-menu-item index="5">
          <img src="../assets/images/cart.png" alt="">
          营销中心
        </el-menu-item>
        <el-menu-item index="6">
          <img src="../assets/images/cart.png" alt="">
          数据决策中心
        </el-menu-item>
        <el-submenu index="7">
          <template slot="title">
            <img v-if="currentPath != 7" src="../assets/images/cart.png" alt="">
            <img v-if="currentPath == 7" src="../assets/images/cart_active.png" alt="">
            OKR管理
          </template>
          <el-menu-item index="7-1">部门/组织管理</el-menu-item>
          <el-menu-item index="7-2">创建OKR</el-menu-item>
          <el-menu-item index="7-3">本周进展/计划</el-menu-item>
          <el-menu-item index="7-4">OKR复盘</el-menu-item>
          <el-menu-item index="7-5">KR倒计时板</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
</template>

<script>
    export default {
        name: "leftmenu",
        data () {
          return {
            activeIndex: '1',
            openTrue: true,
            currentPath: '1'
          }
        },
      methods: {
        handleSelect(key, keyPath) {
          // console.log(key, keyPath);
          // this.$router.push({name: key})
          this.currentPath = keyPath[0]
        },
        getRouter (path) {
          this.$router.push({name: path})
        }
      }
    }
</script>

<style lang="less">
  .menuList {
    width: 11.5%;
    height: calc(100% - 55px);
    overflow-y: auto;
    background: #415058;
    .el-menu {
      background: #415058;
      .el-menu-item,.el-submenu__title {
        height: 45px;
        line-height: 45px;
        color: #fff;
        min-width: 100%;
        padding:0;
        font-size: 13px;
        &:hover {
          background: #F45D54;
        }
      }
      .el-menu-item.is-active {
        color: #fff;
        background: #F45D54;
      }
    }
    >.el-menu {
      >.el-menu-item:nth-of-type(1) {
        border-top:1px solid #888888;
        border-bottom:1px solid #888888;
      }
    }
    .el-submenu__title,>.el-menu>.el-menu-item {
      padding-left: 18px;
      display: flex;
      align-items: center;
      img {
        width: 22px;
        margin-right: 12px;
      }
      i {
        color: #fff;
      }

    }
    >.el-menu .el-submenu .el-menu-item {
      padding-left: 55px !important;
    }
  }
</style>
