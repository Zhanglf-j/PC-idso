<template>
    <div class="project_detail">
      <p class="title">
        <router-link to="reception">接诊系统</router-link>
        > <span>项目详情</span>
      </p>
      <div class="project_data">
        <div class="project_title">
          <div>
            <img src="../assets/images/workbenches_active.png" alt="">
          </div>
          <div>
            <p>项目名称 <span class="status">状态</span></p>
            <p>编号：30900002</p>
            <p>生厂商：国际庄科技有限公司</p>
          </div>
        </div>
        <el-tabs class="common_tab" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="基本信息" name="first" class="base_imformation">
            <p>
              <span></span>
              基本信息
              <img src="../assets/images/edit.png" @click="editData" alt="">
            </p>
            <el-row>
              <el-col :span="12">
                字段名称：<el-input class="el-input_28" :disabled="!editAble" v-model="input"></el-input>
              </el-col>
              <el-col :span="12">
                字段名称：<el-input class="el-input_28" v-model="input"></el-input>
              </el-col>
              <el-col :span="12">
                字段名称：<el-input class="el-input_28" v-model="input"></el-input>
              </el-col>
              <el-col :span="12">
                字段名称：<el-input class="el-input_28" v-model="input"></el-input>
              </el-col>
              <el-col :span="12">
                字段名称：<el-input class="el-input_28" v-model="input"></el-input>
              </el-col>
              <el-col :span="12">
                字段名称：<el-input class="el-input_28" v-model="input"></el-input>
              </el-col>
              <el-col :span="12">
                字段名称：<el-input class="el-input_28" v-model="input"></el-input>
              </el-col>
              <el-col :span="12">
                字段名称：<el-input class="el-input_28" v-model="input"></el-input>
              </el-col>
              <el-col :span="12">
                字段名称：<el-input class="el-input_28" v-model="input"></el-input>
              </el-col>
              <el-col :span="12">
                字段名称：<el-input class="el-input_28" v-model="input"></el-input>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="基本信息2" name="second">2</el-tab-pane>
          <el-tab-pane label="基本信息3" name="third">3</el-tab-pane>
          <el-tab-pane label="基本信息4" name="fourth">4</el-tab-pane>
          <el-tab-pane label="更多" name="fifth">更多</el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script>
    export default {
      name: "projectDetail",
      data () {
          return {
            activeName: 'first',
            input: '字段名称',
            editAble: false
          }
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        editData () {
          this.editAble = true
        }
      }
    }
</script>

<style lang="less">
  .project_detail {
    width: 88%;
    height: calc(100% - 55px);
    overflow: auto;
    .title {
      width: calc(100% - 20px);
      padding: 0 10px;
      height: 45px;
      line-height: 45px;
      color: #607D8B;
      font-size: 15px;
      border-bottom: 1px solid #6B6B6B;
      a {
        color: #607D8B;
        text-decoration: none;
      }
    }
    .project_data {
      width: calc(100% - 20px);
      height: calc(100% - 66px);
      margin: 10px 10px 10px 10px;
      background: #fff;
      overflow: auto;
      >.project_title {
        padding: 25px 0 15px 25px;
        display: flex;
        align-items: center;
        >div:nth-of-type(1) {
          border: 1px solid red;
          width: 85px;
          height: 85px;
          text-align:center ;
          margin-right: 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        >div:nth-of-type(2) {
          p {
            line-height: 30px;
            .status {
              width: 56px;
              height: 18px;
              display: inline-block;
              background: #9CCC65;
              border-radius: 19px;
              color: #fff;
              text-align: center;
              line-height: 18px;
              margin-left: 10px;
              font-size: 11px;
              -webkit-transform-origin-x: 0;
              -webkit-transform: scale(0.8);
              position: relative;
              top: -5px;
            }
          }
          p:nth-of-type(1) {
            color: #607D8B;
          }
        }
      }
      .common_tab {
        .el-tabs__item {
          margin-left: 0;
          width: 100px;
          height: 40px;
          font-size: 13px;
        }
        .el-tabs__item.is-active {
          color: #666666;
          border-bottom: 1.5px solid #666666;
        }
        .base_imformation {
          >p {
            padding: 15px 0 25px 15px;
            display: flex;
            align-items: center;
            height:20px;
            >span {
              display: inline-block;
              width: 3px;
              height: 12px;
              background: #666666;
              margin-right: 5px;
            }
            img {
              width:14px;
              margin-left: 10px;
              cursor: pointer;
            }
          }
          .el-row {
            padding-left: 100px;
          }
          .el-col {
            margin-bottom: 15px;
            line-height: 30px;
          }
        }
      }
    }
  }
</style>
