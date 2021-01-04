<template>
  <div class="pokemon" style="width: 50%;margin: auto">
    <el-button-group>
      <el-button
        type="primary"
        icon="el-icon-arrow-left"
        v-on:click="handlePrevPage"
        >上一页</el-button
      >
      <el-button
        type="primary"
        icon="el-icon-edit"
        @click="dialogFormVisible = true"
        >编辑</el-button
      >

      <el-dialog
        title="编辑精灵"
        :visible.sync="dialogFormVisible"
        width="600px"
      >
        <el-form :model="form" inline label-width="auto">
          <el-form-item label="精灵类型">
            <el-input v-model="form.category"></el-input>
          </el-form-item>
          <el-form-item label="总能力">
            <el-input v-model="form.total"></el-input>
          </el-form-item>
          <el-form-item label="主属性">
            <el-input v-model="form.first_type"></el-input>
          </el-form-item>
          <el-form-item label="副属性">
            <el-input v-model="form.second_type"></el-input>
          </el-form-item>
          <el-form-item label="HP">
            <el-input v-model="form.HP"></el-input>
          </el-form-item>
          <el-form-item label="攻击">
            <el-input v-model="form.ATK"></el-input>
          </el-form-item>
          <el-form-item label="防御">
            <el-input v-model="form.DEF"></el-input>
          </el-form-item>
          <el-form-item label="特攻">
            <el-input v-model="form.SP_ATK"></el-input>
          </el-form-item>
          <el-form-item label="特防">
            <el-input v-model="form.SP_DEF"></el-input>
          </el-form-item>
          <el-form-item label="速度">
            <el-input v-model="form.SPEED"></el-input>
          </el-form-item>
        </el-form>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="handleEdit">确定</el-button>
        </div>
      </el-dialog>

      <el-button
        type="primary"
        icon="el-icon-refresh"
        v-on:click="handleRefresh"
        >刷新</el-button
      >
    </el-button-group>
    <el-row :gutter="24">
      <el-col :span="12">
        <el-divider content-position="center">精灵编号</el-divider>
        <span>{{ this.number }}</span>
      </el-col>
      <el-col :span="12">
        <el-divider content-position="center">精灵名字</el-divider>
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
      <el-divider content-position="center">官方绘图</el-divider>
      <el-image :src="this.img"></el-image>
    </el-row>

    <el-row :gutter="12">
      <el-col :span="8">
        <el-divider content-position="center">精灵类型</el-divider>
        <span>{{ this.category }}</span>
      </el-col>
      <el-col :span="8">
        <el-divider content-position="center">主属性</el-divider>
        <span>{{ this.first_type }}</span>
      </el-col>
      <el-col :span="8">
        <el-divider content-position="center">副属性</el-divider>
        <span>{{ this.second_type }}</span>
      </el-col>
    </el-row>

    <el-row :gutter="24">
      <el-divider content-position="center">总能力</el-divider>
      <span>{{ this.total }}</span>
    </el-row>

    <el-row :gutter="24">
      <el-col :span="8">
        <el-divider content-position="center">HP</el-divider>
        <span>{{ this.HP }}</span>
      </el-col>
      <el-col :span="8">
        <el-divider content-position="center">攻击</el-divider>
        <span>{{ this.ATK }}</span>
      </el-col>
      <el-col :span="8">
        <el-divider content-position="center">防御</el-divider>
        <span>{{ this.DEF }}</span>
      </el-col>
    </el-row>

    <el-row :gutter="24">
      <el-col :span="8">
        <el-divider content-position="center">特攻</el-divider>
        <span>{{ this.SP_ATK }}</span>
      </el-col>
      <el-col :span="8">
        <el-divider content-position="center">特防</el-divider>
        <span>{{ this.SP_DEF }}</span>
      </el-col>
      <el-col :span="8">
        <el-divider content-position="center">速度</el-divider>
        <span>{{ this.SPEED }}</span>
      </el-col>
    </el-row>

    <el-row :gutter="24">
      <el-col :span="8">
        <el-divider content-position="center">进化链</el-divider>
        <el-row v-for="item in this.evolution" :key="item">
          <span
            ><el-link type="primary" @click="handlePokemon(item)">{{
              item
            }}</el-link></span
          >
        </el-row>
      </el-col>

      <el-col :span="8">
        <el-divider content-position="center">特性</el-divider>
        <el-row v-for="item in this.features" :key="item">
          <span
            ><el-link type="primary" @click="handleFeature(item)">{{
              item
            }}</el-link></span
          >
        </el-row>
      </el-col>

      <el-col :span="8">
        <el-divider content-position="center">招式</el-divider>
        <el-row v-for="item in this.moves" :key="item">
          <span
            ><el-link type="primary" @click="handleMove(item)">{{
              item
            }}</el-link></span
          >
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Pokemon",
  data() {
    return {
      number: "",
      name: "",
      jp_name: "",
      en_name: "",
      img: "",
      category: "",
      first_type: "",
      second_type: "",
      total: "",
      HP: "",
      ATK: "",
      DEF: "",
      SP_ATK: "",
      SP_DEF: "",
      SPEED: "",
      evolution: [],
      features: [],
      moves: [],
      dialogFormVisible: false,
      formLabelWidth: "60px",
      form: {
        category: "",
        first_type: "",
        second_type: "",
        total: "",
        HP: "",
        ATK: "",
        DEF: "",
        SP_ATK: "",
        SP_DEF: "",
        SPEED: ""
      }
    };
  },
  mounted() {
    this.name = this.$route.query.name;
    this.$axios
      .get("/pokemon", {
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
        this.img = "https:" + data["img"];
        this.category = data["category"];
        this.first_type = data["first_type"];
        this.second_type = data["second_type"];
        this.total = data["total"];
        this.HP = data["HP"];
        this.ATK = data["ATK"];
        this.DEF = data["DEF"];
        this.SP_ATK = data["SP_ATK"];
        this.SP_DEF = data["SP_DEF"];
        this.SPEED = data["SPEED"];
        this.evolution = data["evolution"];
        this.features = data["features"];
        this.moves = data["moves"];

        this.form.category = data["category"];
        this.form.first_type = data["first_type"];
        this.form.second_type = data["second_type"];
        this.form.total = data["total"];
        this.form.HP = data["HP"];
        this.form.ATK = data["ATK"];
        this.form.DEF = data["DEF"];
        this.form.SP_ATK = data["SP_ATK"];
        this.form.SP_DEF = data["SP_DEF"];
        this.form.SPEED = data["SPEED"];
      })
      .catch(error => {
        this.$message.error("无法获取精灵详细信息！");
        console.log(error);
      });
  },
  methods: {
    handlePrevPage() {
      this.$router.go(-1);
    },
    handleEdit() {
      this.dialogFormVisible = false;
      this.$axios
        .post("/edit_pokemon", {
          name: this.name,
          category: this.form.category,
          first_type: this.form.first_type,
          second_type: this.form.second_type,
          total: this.form.total,
          HP: this.form.HP,
          ATK: this.form.ATK,
          DEF: this.form.DEF,
          SP_ATK: this.form.SP_ATK,
          SP_DEF: this.form.SP_DEF,
          SPEED: this.form.SPEED
        })
        .then(response => {
          console.log("response");
          if (response.data["status"] !== 200) {
            this.$message.error("提交表单失败：" + response.data["error_msg"]);
          } else {
            this.$message.success("提交表单成功！");
          }
        })
        .catch(error => {
          this.$message.error("提交表单失败：" + error);
        });
      this.handleRefresh();
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
    handleFeature(name) {
      this.$router.push({
        path: "/feature",
        query: {
          name: name
        }
      });
    },
    handleMove(name) {
      this.$router.push({
        path: "/move",
        query: {
          name: name
        }
      });
    }
  }
};
</script>
