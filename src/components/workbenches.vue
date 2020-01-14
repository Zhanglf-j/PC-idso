<template>
    <div class="workbenches">
      <div class="all_data">
        <p></p>
        <div>
          <span>今日预约
            <span class="people_num">52人</span>
          </span>
          <span>今日待办
          <span class="people_num">
            13
            <img src="../assets/images/hot.png" alt="">
          </span>
        </span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "workbenches"
    }
</script>

<style lang="less">
.workbenches {
  width: 88%;
  height: calc(100% - 55px);
  background: #fff;
  .all_data {
    width: 390px;
    height: 148px;
    border: 2px solid rgba(187,187,187,1);
    border-radius: 9px;
    margin: 68px 0 0 125px;
    >p {
      height: 57px;
      line-height: 57px;
    }
    >div {
      line-height:91px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 18px;
      border-top: 1px solid rgba(187,187,187,1);
      color: #101010;
      .people_num {
        color: #479CF9;
        img {
          width: 24px;
          position: relative;
          top: -7px;
          left: -7px;
        }
      }
    }
  }
}
</style>
