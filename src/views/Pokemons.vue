<template>
  <div class="pokemons">
    <!--    <img alt="Vue logo" src="../assets/logo.png" />-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="number" label="精灵编号"> </el-table-column>
      <el-table-column prop="name" label="精灵名字">
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
  name: "Pokemons",
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
      .get("/pokemons", {
        params: {
          page: this.currentPage
        }
      })
      .then(response => {
        this.tableData = JSON.parse(JSON.stringify(response.data.data));
      })
      .catch(error => {
        this.$message.error("无法获取精灵列表信息!");
        console.log(error);
      });
    this.$axios
      .get("/page_of_pokemons")
      .then(response => {
        this.totalPage = response.data.data.page;
      })
      .catch(error => {
        this.$message.error("无法获取精灵列表页面数！");
        console.log(error);
      });
  },
  methods: {
    handleCurrentChange() {
      this.$axios
        .get("/pokemons", {
          params: {
            page: this.currentPage
          }
        })
        .then(response => {
          this.tableData = JSON.parse(JSON.stringify(response.data.data));
        })
        .catch(error => {
          this.$message.error("无法获取精灵列表信息!");
          console.log(error);
        });
    },
    handleClick(row) {
      this.$router.push({
        path: "/pokemon",
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
