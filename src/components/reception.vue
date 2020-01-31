<template>
    <div class="reception">
      <div class="title">
        <span>接诊系统</span>
        <div class="btns">
          <div @click="addProject"><img src="../assets/images/add.png" alt="">建立项目</div>
          <div @click="importData"><img src="../assets/images/import.png" alt="">导入</div>
          <div><img src="../assets/images/export.png" alt="">导出</div>
        </div>
      </div>
      <div class="select_list">
        <el-select class="el-select_28" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select class="el-select_28" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input class="el-input_28" placeholder="项目名称/编号" v-model="input"></el-input>
        <el-button class="el-button_28">搜索</el-button>
        <el-select class="el-select_28 fr" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="table_list">
        <el-table
          ref="multipleTable"
          :data="tableData"
          :height="tableHeight"
          :style="{maxHeight:tableHeight}"
          :header-cell-style="getRowClass"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="50">
          </el-table-column>
          <el-table-column
            prop="date"
            label="项目"
            min-width="30%">
            <template slot-scope="scope">
              <div class="project_img">
                <img src="../assets/images/workbenches_active.png" alt="">
              </div>
              <div class="project_data">
                <p class="text_overflow">{{ scope.row.project }}</p>
                <p class="text_overflow">编号：{{ scope.row.num }}</p>
                <p class="text_overflow">生产商：{{ scope.row.a }}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="b"
            label="型号"
            min-width="11%">
          </el-table-column>
          <el-table-column
            prop="a"
            label="公司名称"
            min-width="19%">
          </el-table-column>
          <el-table-column
            prop="date"
            label="科室"
            min-width="10%">
          </el-table-column>
          <el-table-column
            prop="name"
            label="负责人"
            min-width="12.5%">
          </el-table-column>
          <el-table-column
            prop="address"
            label="状态"
            min-width="9%">
          </el-table-column>
          <el-table-column
            prop="name"
            label="操作"
            min-width="8%">
            <template slot-scope="scope">
              <el-button type="text" class="detail_text" @click="detailClick">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="page_list">
          <el-select class="el-select_28" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-pagination
            class="common_pagination"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
<!--      添加项目 -->
      <el-dialog custom-class="common_dialog add_project" title="" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="字段名称" :label-width="formLabelWidth">
            <el-select class="el-input_30" v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="字段名称" :label-width="formLabelWidth">
            <el-select class="el-input_30" v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="字段名称" :label-width="formLabelWidth">
            <el-input class="el-input_30" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="字段名称" :label-width="formLabelWidth">
            <el-input class="el-input_30" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="字段名称" :label-width="formLabelWidth">
            <el-input class="el-input_30" v-model="form.name"></el-input>
          </el-form-item>
          <div class="more_btn">
            <div>更多 <i class="el-icon-arrow-down"></i></div>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">确 定</el-button>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
        </div>
      </el-dialog>
<!--      导入-->
      <el-dialog custom-class="common_dialog import_project" title="导入项目" :visible.sync="importShow">
        <div class="download">
          <img src="../assets/images/workbenches_active.png" alt="">
          <div>
            <p>下载模板</p>
            <p>为提高导入的成功率，请下载并使用系统提供的模板</p>
            <p>
              <el-button class="el-button_30">下载模板</el-button>
            </p>
          </div>
        </div>
        <div class="download">
          <img src="../assets/images/workbenches_active.png" alt="">
          <div>
            <p>上传文件</p>
            <p>仅支持.xlsx,.xls,.csv 文件大小=<4M</p>
            <p>
              <div></div>
              <el-button>选择文件</el-button>
            </p>
          </div>
        </div>
      </el-dialog>
    </div>
</template>

<script>
    export default {
      name: "reception",
      data () {
          return {
            options: [{
              value: '',
              label: '全部'
            }, {
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
            input: '',
            tableData: [{
              date: '神经内科',
              name: '王小虎',
              address: '状态1',
              project: '项目名称',
              num: '680100003309',
              a: '国际庄科技有限公司李二甩分公司',
              b: 'HYC-360'
            }, {
              date: '神经内科',
              name: '王小虎',
              address: '状态1',
              project: '项目名称',
              num: '680100003309',
              a: '国际庄科技有限公司李二甩分公司',
              b: 'HYC-360'
            }, {
              date: '神经内科',
              name: '王小虎',
              address: '状态1',
              project: '项目名称',
              num: '680100003309',
              a: '国际庄科技有限公司李二甩分公司',
              b: 'HYC-360'
            }, {
              date: '神经内科',
              name: '王小虎',
              address: '状态1',
              project: '项目名称',
              num: '680100003309',
              a: '国际庄科技有限公司李二甩分公司',
              b: 'HYC-360'
            }, {
              date: '神经内科',
              name: '王小虎',
              address: '状态1',
              project: '项目名称',
              num: '680100003309',
              a: '国际庄科技有限公司李二甩分公司',
              b: 'HYC-360'
            }, {
              date: '神经内科',
              name: '王小虎',
              address: '状态1',
              project: '项目名称',
              num: '680100003309',
              a: '国际庄科技有限公司李二甩分公司',
              b: 'HYC-360'
            }, {
              date: '神经内科',
              name: '王小虎',
              address: '状态1',
              project: '项目名称',
              num: '680100003309',
              a: '国际庄科技有限公司李二甩分公司',
              b: 'HYC-360'
            }],
            multipleSelection: [],
            currentPage4: 4,
            tableHeight: 0,
            dialogFormVisible: false,
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            },
            formLabelWidth: '80px',
            importShow: false
          }
      },
      methods: {
        // 设置表格第一行的颜色
        getRowClass ({ row, column, rowIndex, columnIndex }) {
          if (rowIndex === 0) {
            return 'background:#F0F0F2;'
          } else {
            return ''
          }
        },
        detailClick () {
          this.$router.push({path: 'projectDetail'})
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        // 分页
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        },
        addProject () {
          this.dialogFormVisible = true
        },
        importData () {
          this.importShow = true
        }
      },
      created () {
        this.tableHeight = document.body.clientHeight - 206 + 'px'
      }
    }
</script>

<style lang="less">
.reception {
  width: 88%;
  height: calc(100% - 55px);
  overflow: auto;
  .title {
    width: calc(100% - 20px);
    padding: 0 10px;
    height: 45px;
    line-height: 45px;
    display: flex;
    justify-content: space-between;
    color: #607D8B;
    border-bottom: 1px solid #6B6B6B;
    >span {
      font-size: 15px;
    }
    .btns {
      text-align: right;
      div {
        display: inline-block;
        margin-left: 20px;
        cursor: pointer;
        padding: 0 2px;
        line-height: 33px;
        margin-top: 10px;
        img {
          height: 20px;
          position: relative;
          top: 6px;
          margin-right: 5px;
        }
      }
    }
  }
  .select_list {
    width: calc(100% - 20px);
    height: 30px;
    padding: 10px;
    .el-select,.el-input {
      margin-right: 8px;
      .el-input__inner {
        border: 1px solid #BBBBBB;
        background: #fff;
      }
    }
    .el-select:last-of-type {
      margin-right:0;
    }
  }
  .table_list {
    width: calc(100% - 20px);
    padding: 0 10px;
    .el-table {
      overflow-y: auto;
      overflow-x: hidden;
      tr {
        td:nth-of-type(1),th:nth-of-type(1) {
          .cell {
            padding:0;
            text-align: center;
          }
        }
        td:nth-of-type(2) {
          text-align: left;
        }
      }
      .project_img {
        width: 75px;
        height: 75px;
        display: inline-block;
        text-align: center;
        margin-top: 7px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .project_data {
        display: inline-block;
        margin-left: 17px;
        width: calc(100% - 112px);
        p {
          line-height: 30px;
          width: 100%;
        }
        p:nth-of-type(1) {
          color: #607D8B;
        }
      }
      .detail_text.el-button--text {
        color: #607D8B;
      }
    }
  }
  .page_list {
    padding: 10px 0;
    overflow: hidden;
  }
  .add_project {
    width: 572px;
    color: #7A797A;
    .el-dialog__body {
      padding: 20px 20px 48px 20px;
      .more_btn {
        width: 100%;
        height: 28px;
        text-align: center;
        >div {
          display: inline-block;
          width: 50px;
          height: 28px;
          line-height: 28px;
          cursor: pointer;
        }
      }
    }
    .el-dialog__footer {
      padding-bottom: 20px;
      .el-button:nth-of-type(1) {
        background: #78909C;
        color: #fff;
        margin-right: 10px;
      }
      .el-button:nth-of-type(2) {
        background: none;
        margin-right: 18px;
      }
    }
  }
  .import_project {
    .download {
      width: 100%;
      display: flex;
    }
  }
}
</style>
