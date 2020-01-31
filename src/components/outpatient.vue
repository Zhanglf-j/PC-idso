<template>
    <div class="outpatient common_section">
      <el-tabs class="common_tab" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="出勤/仪容仪表" name="1">
            <p>出勤/仪容仪表</p>
        </el-tab-pane>
        <el-tab-pane label="昨日复盘" name="2">
            <p>昨日初诊</p>
            <p>昨日复诊</p>
            <p>昨日业绩</p>
            <p>今日重点预约</p>
            <p>早会培训</p>
            <p>问题反馈/解决进度</p>
            <p>初诊明细</p>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "outpatient",
      data () {
          return {
            activeName: '1',
          }
      },
      methods: {
        handleClick (tab, event) {
          console.log(tab, event);
        },
      }
    }
</script>

<style lang="less">
  .outpatient {
    .el-tabs__item {
      width: 100px !important;
    }
  }
</style>
