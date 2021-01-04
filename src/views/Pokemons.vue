<template>
  <div class="pokemons">
    <el-collapse v-model="activeNames" style="width: 60%; margin: auto">
      <el-collapse-item title="精灵筛选 Pokemon Select" name="1">
        <div class="select" style="width: 100%; margin: auto">
          <div style="text-align: left; margin-bottom: 10px">
            <el-checkbox-group v-model="attr" size="medium">
              <span style="display: inline-block; margin-left: 60px">
                <el-checkbox-button label="一般"></el-checkbox-button>
                <el-checkbox-button label="格斗"></el-checkbox-button>
                <el-checkbox-button label="飞行"></el-checkbox-button>
                <el-checkbox-button label="毒"></el-checkbox-button>
                <el-checkbox-button label="地面"></el-checkbox-button>
                <el-checkbox-button label="岩石"></el-checkbox-button>
                <el-checkbox-button label="虫"></el-checkbox-button>
                <el-checkbox-button label="幽灵"></el-checkbox-button>
                <el-checkbox-button label="钢"></el-checkbox-button>
              </span>
              <span style="display: inline-block; margin-left: 80px">
                <el-checkbox-button label="火"></el-checkbox-button>
                <el-checkbox-button label="水"></el-checkbox-button>
                <el-checkbox-button label="草"></el-checkbox-button>
                <el-checkbox-button label="电"></el-checkbox-button>
                <el-checkbox-button label="超能力"></el-checkbox-button>
                <el-checkbox-button label="冰"></el-checkbox-button>
                <el-checkbox-button label="龙"></el-checkbox-button>
                <el-checkbox-button label="恶"></el-checkbox-button>
                <el-checkbox-button label="妖精"></el-checkbox-button>
              </span>
            </el-checkbox-group>
          </div>

          <div style="text-align: left; margin-bottom: 10px">
            <span style="display: inline-block; margin-right: 10px">HP：</span>
            <span style="display: inline-block">
              <el-input
                v-model="min_HP"
                placeholder="最小值(>=0)"
                size="small"
                style="width: 120px"
              ></el-input>
            </span>
            <span
              style="display: inline-block; margin-left: 10px; margin-right: 10px"
              >-</span
            >
            <span style="display: inline-block">
              <el-input
                v-model="max_HP"
                placeholder="最大值(<=100)"
                size="small"
                style="width: 120px"
              ></el-input>
            </span>

            <span
              style="display: inline-block; margin-right: 10px; margin-left: 60px"
              >攻击：</span
            >
            <span style="display: inline-block">
              <el-input
                v-model="min_ATK"
                placeholder="最小值(>=0)"
                size="small"
                style="width: 120px"
              ></el-input>
            </span>
            <span
              style="display: inline-block; margin-left: 10px; margin-right: 10px"
              >-</span
            >
            <span style="display: inline-block">
              <el-input
                v-model="max_ATK"
                placeholder="最大值(<=100)"
                size="small"
                style="width: 120px"
              ></el-input>
            </span>
          </div>

          <div style="text-align: left; margin-bottom: 10px">
            <span style="display: inline-block; margin-right: 10px"
              >防御：</span
            >
            <span style="display: inline-block">
              <el-input
                v-model="min_DEF"
                placeholder="最小值(>=0)"
                size="small"
                style="width: 120px"
              ></el-input>
            </span>
            <span
              style="display: inline-block; margin-left: 10px; margin-right: 10px"
              >-</span
            >
            <span style="display: inline-block">
              <el-input
                v-model="max_DEF"
                placeholder="最大值(<=100)"
                size="small"
                style="width: 120px"
              ></el-input>
            </span>

            <span
              style="display: inline-block; margin-right: 10px; margin-left: 50px"
              >特攻：</span
            >
            <span style="display: inline-block">
              <el-input
                v-model="min_SP_ATK"
                placeholder="最小值(>=0)"
                size="small"
                style="width: 120px"
              ></el-input>
            </span>
            <span
              style="display: inline-block; margin-left: 10px; margin-right: 10px"
              >-</span
            >
            <span style="display: inline-block">
              <el-input
                v-model="max_SP_ATK"
                placeholder="最大值(<=100)"
                size="small"
                style="width: 120px"
              ></el-input>
            </span>
          </div>

          <div style="text-align: left; margin-bottom: 10px">
            <span style="display: inline-block; margin-right: 10px"
              >特防：</span
            >
            <span style="display: inline-block">
              <el-input
                v-model="min_SP_DEF"
                placeholder="最小值(>=0)"
                size="small"
                style="width: 120px"
              ></el-input>
            </span>
            <span
              style="display: inline-block; margin-left: 10px; margin-right: 10px"
              >-</span
            >
            <span style="display: inline-block">
              <el-input
                v-model="max_SP_DEF"
                placeholder="最大值(<=100)"
                size="small"
                style="width: 120px"
              ></el-input>
            </span>

            <span
              style="display: inline-block; margin-right: 10px; margin-left: 50px"
              >速度：</span
            >
            <span style="display: inline-block">
              <el-input
                v-model="min_SPEED"
                placeholder="最小值(>=0)"
                size="small"
                style="width: 120px"
              ></el-input>
            </span>
            <span
              style="display: inline-block; margin-left: 10px; margin-right: 10px"
              >-</span
            >
            <span style="display: inline-block">
              <el-input
                v-model="max_SPEED"
                placeholder="最大值(<=100)"
                size="small"
                style="width: 120px"
              ></el-input>
            </span>
          </div>

          <div style="text-align: left; margin-bottom: 10px">
            <span style="display: inline-block; margin-right: 10px"
              >关键字查找：</span
            >
            <span style="display: inline-block">
              <el-input
                v-model="keyword"
                placeholder="精灵编号/精灵名字/日文名字/英文名字/进化链/招式/特性"
                style="width: 420px"
              ></el-input>
            </span>
            <span style="display: inline-block; margin-left: 20px">
              <el-button-group>
                <el-button
                  type="primary"
                  icon="el-icon-refresh-left"
                  v-on:click="handleReset"
                  >重置</el-button
                >
                <el-button
                  type="primary"
                  icon="el-icon-search"
                  v-on:click="handleSelect"
                  >筛选</el-button
                >
              </el-button-group>
            </span>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="number" label="精灵编号" align="center">
      </el-table-column>
      <el-table-column prop="name" label="精灵名字" align="center">
        <template slot-scope="scope">
          <el-link @click="handleClick(scope.row)" type="primary">{{
            scope.row.name
          }}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="jp_name" label="日文名字" align="center">
      </el-table-column>
      <el-table-column prop="en_name" label="英文名字" align="center">
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-count="totalPage"
      :current-page.sync="currentPage"
      @current-change="handleCurrentChange"
      v-if="totalPage !== 0"
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
      currentPage: 0,
      totalPage: 0,
      attr: [],
      min_HP: "",
      max_HP: "",
      min_ATK: "",
      max_ATK: "",
      min_DEF: "",
      max_DEF: "",
      min_SP_ATK: "",
      max_SP_ATK: "",
      min_SP_DEF: "",
      max_SP_DEF: "",
      min_SPEED: "",
      max_SPEED: "",
      keyword: "",
      activeNames: []
    };
  },
  mounted() {
    this.currentPage = this.$route.query["page"]
      ? Number(this.$route.query.page)
      : 1;
    if (this.$route.query["attr"]) {
      for (let i = 0; i < this.$route.query["attr"].length; i++) {
        this.attr.push(this.$route.query.attr[i]);
      }
    }
    this.attr = this.$route.query["attr"]
      ? this.$route.query["attr"].trim().split(" ")
      : [];
    this.min_HP = this.$route.query["min_HP"]
      ? this.$route.query["min_HP"]
      : "";
    this.max_HP = this.$route.query["max_HP"]
      ? this.$route.query["max_HP"]
      : "";
    this.min_ATK = this.$route.query["min_ATK"]
      ? this.$route.query["min_ATK"]
      : "";
    this.max_ATK = this.$route.query["max_ATK"]
      ? this.$route.query["max_ATK"]
      : "";
    this.min_DEF = this.$route.query["min_DEF"]
      ? this.$route.query["min_DEF"]
      : "";
    this.max_DEF = this.$route.query["max_DEF"]
      ? this.$route.query["max_DEF"]
      : "";
    this.min_SP_ATK = this.$route.query["min_SP_ATK"]
      ? this.$route.query["min_SP_ATK"]
      : "";
    this.max_SP_ATK = this.$route.query["max_SP_ATK"]
      ? this.$route.query["max_SP_ATK"]
      : "";
    this.min_SP_DEF = this.$route.query["min_SP_DEF"]
      ? this.$route.query["min_SP_DEF"]
      : "";
    this.max_SP_DEF = this.$route.query["max_SP_DEF"]
      ? this.$route.query["max_SP_DEF"]
      : "";
    this.min_SPEED = this.$route.query["min_SPEED"]
      ? this.$route.query["min_SPEED"]
      : "";
    this.max_SPEED = this.$route.query["max_SPEED"]
      ? this.$route.query["max_SPEED"]
      : "";
    this.keyword = this.$route.query["keyword"]
      ? this.$route.query["keyword"]
      : "";

    let attrStr = "";
    for (let i = 0; i < this.attr.length; i++) {
      attrStr += this.attr[i] + " ";
    }

    this.$axios
      .get("/page_of_pokemons", {
        params: {
          attr: attrStr,
          min_HP: this.min_HP,
          max_HP: this.max_HP,
          min_ATK: this.min_ATK,
          max_ATK: this.max_ATK,
          min_DEF: this.min_DEF,
          max_DEF: this.max_DEF,
          min_SP_ATK: this.min_SP_ATK,
          max_SP_ATK: this.max_SP_ATK,
          min_SP_DEF: this.min_SP_DEF,
          max_SP_DEF: this.max_SP_DEF,
          min_SPEED: this.min_SPEED,
          max_SPEED: this.max_SPEED,
          keyword: this.keyword
        }
      })
      .then(response => {
        this.totalPage = response.data.data.page;
      })
      .catch(error => {
        this.$message.error("无法获取精灵列表页面数！");
        console.log(error);
      });
    this.updateData();
  },
  methods: {
    handleClick(row) {
      this.$router.push({
        path: "/pokemon",
        query: {
          name: row.name
        }
      });
    },
    handleCurrentChange(val) {
      let attrStr = "";
      for (let i = 0; i < this.attr.length; i++) {
        attrStr += this.attr[i] + " ";
      }
      this.$router.replace({
        path: this.$route.path,
        query: {
          page: val,
          attr: attrStr,
          min_HP: this.min_HP,
          max_HP: this.max_HP,
          min_ATK: this.min_ATK,
          max_ATK: this.max_ATK,
          min_DEF: this.min_DEF,
          max_DEF: this.max_DEF,
          min_SP_ATK: this.min_SP_ATK,
          max_SP_ATK: this.max_SP_ATK,
          min_SP_DEF: this.min_SP_DEF,
          max_SP_DEF: this.max_SP_DEF,
          min_SPEED: this.min_SPEED,
          max_SPEED: this.max_SPEED,
          keyword: this.keyword
        }
      });
      this.updateData();
    },
    updateData() {
      let attrStr = "";
      for (let i = 0; i < this.attr.length; i++) {
        attrStr += this.attr[i] + " ";
      }

      this.$axios
        .get("/pokemons", {
          params: {
            page: this.currentPage,
            attr: attrStr,
            min_HP: this.min_HP,
            max_HP: this.max_HP,
            min_ATK: this.min_ATK,
            max_ATK: this.max_ATK,
            min_DEF: this.min_DEF,
            max_DEF: this.max_DEF,
            min_SP_ATK: this.min_SP_ATK,
            max_SP_ATK: this.max_SP_ATK,
            min_SP_DEF: this.min_SP_DEF,
            max_SP_DEF: this.max_SP_DEF,
            min_SPEED: this.min_SPEED,
            max_SPEED: this.max_SPEED,
            keyword: this.keyword
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
    handleSelect() {
      this.totalPage = 0;
      this.currentPage = 1;
      let attrStr = "";
      for (let i = 0; i < this.attr.length; i++) {
        attrStr += this.attr[i] + " ";
      }

      this.$router.replace({
        path: this.$route.path,
        query: {
          page: 1,
          attr: attrStr,
          min_HP: this.min_HP,
          max_HP: this.max_HP,
          min_ATK: this.min_ATK,
          max_ATK: this.max_ATK,
          min_DEF: this.min_DEF,
          max_DEF: this.max_DEF,
          min_SP_ATK: this.min_SP_ATK,
          max_SP_ATK: this.max_SP_ATK,
          min_SP_DEF: this.min_SP_DEF,
          max_SP_DEF: this.max_SP_DEF,
          min_SPEED: this.min_SPEED,
          max_SPEED: this.max_SPEED,
          keyword: this.keyword
        }
      });

      this.$axios
        .get("/page_of_pokemons", {
          params: {
            attr: attrStr,
            min_HP: this.min_HP,
            max_HP: this.max_HP,
            min_ATK: this.min_ATK,
            max_ATK: this.max_ATK,
            min_DEF: this.min_DEF,
            max_DEF: this.max_DEF,
            min_SP_ATK: this.min_SP_ATK,
            max_SP_ATK: this.max_SP_ATK,
            min_SP_DEF: this.min_SP_DEF,
            max_SP_DEF: this.max_SP_DEF,
            min_SPEED: this.min_SPEED,
            max_SPEED: this.max_SPEED,
            keyword: this.keyword
          }
        })
        .then(response => {
          this.totalPage = response.data.data.page;
        })
        .catch(error => {
          this.$message.error("无法获取精灵列表页面数！");
          console.log(error);
        });
      this.updateData();
    },
    handleReset() {
      this.attr = [];
      this.min_HP = "";
      this.max_HP = "";
      this.min_ATK = "";
      this.max_ATK = "";
      this.min_DEF = "";
      this.max_DEF = "";
      this.min_SP_ATK = "";
      this.max_SP_ATK = "";
      this.min_SP_DEF = "";
      this.max_SP_DEF = "";
      this.min_SPEED = "";
      this.max_SPEED = "";
      this.keyword = "";
    }
  }
};
</script>

<style lang="scss">
.el-pagination {
  margin-top: 30px;
}
</style>
