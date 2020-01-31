<template>
    <div class="signin common_section">
      <el-tabs class="common_tab" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="早会签到" name="1">
          <p class="signin_tips">提示：二维码生成一次可永久使用，如需改动分组名称，可录入信息后重新
            <span @click="openQrcode">“新建早会签到码”</span>
          </p>
          <div class="time">
            <span class="data">
              {{current_hour}}
            </span>
            <span class="icon">:</span>
            <span class="data">
              {{current_minute}}
            </span>
            <span class="icon">:</span>
            <span class="data">
              {{current_second}}
            </span>
          </div>
          <div class="qr_code">
            <div id="qrCode" ref="qrCodeDiv"></div>
          </div>
          <div class="btns">
            <el-button @click="refresh">刷新</el-button>
            <el-button @click="signInStart">开始早会</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="早会介绍" name="2">
          <p class="title">
            七步早会法
          </p>
        </el-tab-pane>
      </el-tabs>
      <el-dialog
        title="新建签到码"
        :visible.sync="dialogVisible"
        :before-close="handleClose" custom-class="common_dialog">
        <p>
          <span><span class="star">*</span>门诊名称</span>
          <el-select v-model="value" placeholder="请选择门诊名称">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </p>
        <p>
          <span>科室/分组名称</span>
          <el-input v-model="input"></el-input>
        </p>
        <div>
          <el-button>生成签到码</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
    import QRCode from "qrcodejs2";
    export default {
      name: "signIn",
      data () {
          return {
            activeName: '1',
            timer: "",//定义一个定时器的变量
            current_hour: '', // 获取当前时间
            current_minute: '', // 获取当前时间
            current_second: '', // 获取当前时间
            currentTime: '',
            userInfo: {
              uid: 1
            },
            dialogVisible: false,
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            value: '',
            input: ''
          }
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        signInStart () {
          clearInterval(this.timer);
          this.currentTime = this.current_hour + ':' + this.current_minute + ':' + this.current_second
          console.log(this.currentTime)
          this.$router.push({name: 'outpatient'})
        },
        refresh () {
           console.log('刷新')
        },
        //生成二维码
        BindQRCode: function() {
          new QRCode(this.$refs.qrCodeDiv, {
            text: `http://localhost:8080/testUrl/myGrades?uid=${this.userInfo.uid}`,
            width: 360,
            height: 360,
            colorDark: "#333333", //二维码颜色
            colorLight: "#ffffff", //二维码背景色
            correctLevel: QRCode.CorrectLevel.L //容错率，L/M/H
          });
        },
        handleClose(done) {
          // this.$confirm('确认关闭？')
          //   .then(_ => {
              done();
          //   })
          //   .catch(_ => {});
        },
        openQrcode () {
          this.dialogVisible = true
        }
      },
      created () {
        var _this = this; //声明一个变量指向Vue实例this，保证作用域一致
        this.timer = setInterval(function() {
          _this.current_hour = new Date().getHours()>9?new Date().getHours():'0'+new Date().getHours()
          _this.current_minute = new Date().getMinutes()>9?new Date().getMinutes():'0'+new Date().getMinutes()
          _this.current_second = new Date().getSeconds()>9?new Date().getSeconds():'0'+new Date().getSeconds()
        }, 1000);
      },
      beforeDestroy() {
        if (this.timer) {
          clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
        }
      },
      mounted () {
        this.BindQRCode();
      }
    }
</script>

<style lang="less">
.signin {
  .signin_tips {
    width: 88%;
    padding-left: 2%;
    margin: 55px 5% 44px 5%;
    height: 33px;
    line-height: 33px;
    background: #F0DEDE;
    color: #415058;
    font-size: 12px;
    border-radius: 10px;
    span {
      color:#298DF8;
      cursor: pointer;
    }
  }
  .time {
    font-size: 68px;
    line-height: 100px;
    text-align: center;
    margin-bottom:56px;
    .data {
      display: inline-block;
      width: 100px;
      height: 100px;
      border: 1px solid #BBBBBB;
      text-align: center;
      line-height: 100px;
    }
    .icon {
      display: inline-block;
      width: 60px;
      text-align: center;
    }
  }
  .qr_code {
    width: 100%;
    height: 360px;
    margin-bottom: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    >div {
      width: 360px;
      height: 360px;
    }
  }
  .btns {
    text-align: center;
    margin-bottom: 30px;
    .el-button {
      width: 80px;
      height: 30px;
      text-align: center;
      padding:0;
    }
    .el-button:nth-of-type(2) {
      margin-left: 80px;
      background: #F45D54;
      color: #fff;
      font-size: 14px;
    }
  }
  .title {
    margin: 20px 0 0 86px;
  }
  .el-dialog__body {
    padding: 57px 0 69px 43px;
    p {
      margin-bottom: 15px;
      height: 35px;
      line-height: 35px;
      display: flex;
      align-items: center;
      >span {
        width: 122px;
        margin-right: 27px;
        display: inline-block;
        text-align: right;
      }
      .el-input,.el-select {
        width: 240px;
        height: 35px;
        .el-input__inner {
          width: 240px;
          height: 35px;
          line-height: 35px;
          border: 1px solid #BBBBBB;
          color: #101010;
        }
      }
    }
    div {
      text-align: right;
      .el-button {
        margin: 54px 44px 0 0;
        width: 100px;
        height: 30px;
        line-height: 30px;
        background: #415058;
        color:#fff;
        padding:0;
        font-size: 13px;
      }
    }
  }
}
</style>
