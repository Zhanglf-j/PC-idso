<template>
  <div id="home">
    <div class="app_top">
      <div>
        <img src="../assets/images/logo.jpg" class="logo" alt="">
        <span class="title">口腔门诊管理系统</span>
        <el-select class="el-select_26" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div>
        <el-select class="el-select_26" v-model="value2" placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <img src="../assets/images/news.png">
        <span>王小墨</span>
        <img src="../assets/images/signout.png" class="img_signout" alt="">
        <div class="sign_out">
          <div class="triangle_border_up">
            <span></span>
          </div>
          <p @click="signOut">退出</p>
        </div>
      </div>
    </div>
    <leftmenu></leftmenu>
    <router-view></router-view>
  </div>
</template>

<script>
  import leftmenu from './leftMenu'
  export default {
    name: "home",
    components: {
      leftmenu: leftmenu
    },
    data () {
      return {
        options: [{
          value: '1',
          label: '固瑞齿科（大族广场）'
        }, {
          value: '2',
          label: '合颌科技（北京）有限公司'
        }, {
          value: '3',
          label: '欢乐口腔'
        }, {
          value: '4',
          label: '博大口腔'
        }],
        value: '1',
        options2: [{
          value: '',
          label: '请选择'
        }, {
          value: '1',
          label: '早会看板'
        }, {
          value: '2',
          label: '早会签到'
        }, {
          value: '3',
          label: '早会管理'
        }],
        value2: '1'
      }
    },
    methods: {
      signOut () {
        this.$router.push({ path: '/' });
      }
    }
  }
</script>

<style lang="less">
  #home {
    height: 100%;
    background: #F0F0F2;
    >div {
      float: left;
    }
    .app_top {
      width: calc(100% - 36px);
      height:55px;
      background: #415058;
      color: #fff;
      line-height:55px;
      padding:0 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      >div {
        display: flex;
        align-items: center;
        .title {
          margin: 0 9px 0 15px;
        }
        .logo {
          border-radius: 50%;
          width: 45px;
        }
        .el-select .el-input__inner {
          color: #fff;
          border: none;
          background: none;
        }
      }
      >div:nth-of-type(2) {
        position: relative;
        img {
          width: 20px;
          margin-left: 9px;
        }
        span {
          margin-left: 30px;
        }
        .sign_out {
          width: 100px;
          height: 30px;
          line-height: 30px;
          background: #666666;
          text-align: center;
          font-size: 14px;
          z-index: 1;
          display: none;
          position: absolute;
          top:55px;
          right:-5px;
          p {
            cursor: pointer;
          }
          .triangle_border_up{
            width:0;
            height:0;
            border-width:0 5px 5px;
            border-style:solid;
            border-color:transparent transparent #666666;/*透明 透明  灰*/
            margin:0px auto;
            position:absolute;
            top: -5px;
            right: 10px;
          }
        }
        .img_signout {
          cursor: pointer;
        }
        &:hover .sign_out {
          display: block !important;
        }
      }
    }
  }
</style>
