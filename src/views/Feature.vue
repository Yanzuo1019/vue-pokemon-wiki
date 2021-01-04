<template>
  <div class="feature" style="width: 50%;margin: auto">
    <el-button-group>
      <el-button
        type="primary"
        icon="el-icon-arrow-left"
        v-on:click="handlePrevPage"
        >上一页</el-button
      >
      <el-button
        type="primary"
        icon="el-icon-refresh"
        v-on:click="handleRefresh"
        >刷新</el-button
      >
    </el-button-group>
    <el-row :gutter="24">
      <el-col :span="12">
        <el-divider content-position="center">特性编号</el-divider>
        <span>{{ this.number }}</span>
      </el-col>
      <el-col :span="12">
        <el-divider content-position="center">特性名字</el-divider>
        <span>{{ this.name }}</span>
      </el-col>
    </el-row>

    <el-row :gutter="24">
      <el-col :span="12">
        <el-divider content-position="center">日文名字</el-divider>
        <span>{{ this.jp_name }}</span>
      </el-col>
      <el-col :span="12">
        <el-divider content-position="center">英文名字</el-divider>
        <span>{{ this.en_name }}</span>
      </el-col>
    </el-row>

    <el-row>
      <el-divider content-position="center">特性描述</el-divider>
      <span>{{ this.state }}</span>
    </el-row>

    <el-row>
      <el-divider content-position="center">拥有该特性的精灵</el-divider>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
          prop="name"
          label="精灵名字"
          min-width="30%"
          align="center"
        >
          <template slot-scope="scope">
            <el-link @click="handleClick(scope.row)" type="primary">{{
              scope.row.name
            }}</el-link>
          </template>
        </el-table-column>
        <el-table-column
          prop="img"
          label="精灵图片"
          min-width="70%"
          align="center"
        >
          <template slot-scope="scope">
            <el-image :src="scope.row.img"></el-image>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Move",
  data() {
    return {
      tableData: [],
      number: "",
      name: "",
      jp_name: "",
      en_name: "",
      state: "",
      pokemons: []
    };
  },
  mounted() {
    this.name = this.$route.query.name;
    this.$axios
      .get("/feature", {
        params: {
          name: this.name
        }
      })
      .then(response => {
        let data = JSON.parse(JSON.stringify(response.data.data));
        this.number = data["number"];
        this.name = data["name"];
        this.jp_name = data["jp_name"];
        this.en_name = data["en_name"];
        this.state = data["state"];
        this.pokemons = data["pokemons"];

        let len = this.pokemons.length;
        for (let i = 0; i < len; i++) {
          this.$axios
            .get("/pokemon", {
              params: {
                name: this.pokemons[i]
              }
            })
            .then(response1 => {
              let data = JSON.parse(JSON.stringify(response1.data.data));
              this.tableData.push({
                name: this.pokemons[i],
                img: "https:" + data["img"]
              });
            })
            .catch(error => {
              this.$message.error("获取图片信息失败！");
              console.log(error);
            });
        }
      })
      .catch(error => {
        this.$message.error("无法获取招式详细信息！");
        console.log(error);
      });
  },
  methods: {
    handlePrevPage() {
      this.$router.go(-1);
    },
    handleRefresh() {
      this.$router.go(0);
    },
    handlePokemon(name) {
      this.$router.push({
        path: "/pokemon",
        query: {
          name: name
        }
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

<style lang="scss"></style>
