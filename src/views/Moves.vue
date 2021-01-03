<template>
  <div class="moves">
    <!--    <img alt="Vue logo" src="../assets/logo.png" />-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="number" label="招式编号"> </el-table-column>
      <el-table-column prop="name" label="招式名字">
        <template slot-scope="scope">
          <a
            @click="handleClick(scope.row)"
            style="color:blue;cursor:pointer;text-decoration:underline"
            >{{ scope.row.name }}}</a
          >
        </template>
      </el-table-column>
      <el-table-column prop="jp_name" label="日文名字"> </el-table-column>
      <el-table-column prop="en_name" label="英文名字"> </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-count="totalPage"
      :current-page="currentPage"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Moves",
  data() {
    return {
      tableData: [],
      currentPage: 1,
      totalPage: 1
    };
  },
  mounted() {
    this.currentPage = Number(this.$route.query.page);
    this.$axios
      .get("/moves", {
        params: {
          page: this.currentPage
        }
      })
      .then(response => {
        this.tableData = JSON.parse(JSON.stringify(response.data.data));
      })
      .catch(error => {
        this.$message.error("无法获取招式列表信息!");
        console.log(error);
      });
    this.$axios
      .get("/page_of_moves")
      .then(response => {
        this.totalPage = response.data.data.page;
      })
      .catch(error => {
        this.$message.error("无法获取招式列表页面数！");
        console.log(error);
      });
  },
  methods: {
    handleCurrentChange() {
      this.$axios
        .get("/moves", {
          params: {
            page: this.currentPage
          }
        })
        .then(response => {
          this.tableData = JSON.parse(JSON.stringify(response.data.data));
        })
        .catch(error => {
          this.$message.error("无法获取招式列表信息!");
          console.log(error);
        });
    },
    handleClick(row) {
      this.$router.push({
        path: "/move",
        query: {
          name: row.name
        }
      });
    }
  }
};
</script>

<style lang="scss">
.el-pagination {
  margin-top: 30px;
}
</style>
