<template>
  <div style="width:280px;">
    <!-- <h2 style="text-align:center">登录</h2> -->
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-width="80px"
      status-icon
      v-loading="loading"
    >
      <el-form-item label="用户名" prop="user_name">
        <el-input v-model="form.user_name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>

      <!-- <el-form-item>
      
        <el-button @click="$router.replace('/login')">注册</el-button>
      </el-form-item> -->
    </el-form>
    <el-button type="primary" round @click="onSubmit('form')">登录</el-button>
  </div>
</template>

<script>
export default {
  name: "sighup",
  data() {
    return {
      loading: false,
      form: {
        user_name: "",
        real_name: "",
        // tel: "",
        birthday: "",
        sex: "",
        password: "",
        password2: ""
      },
      rules: {
        user_name: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "change" }]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      console.log("submit!");

      // this.$emit("refreshID", this.form.user_name);
      this.$refs[formName].validate(valid => {
        if (valid) {
          // fetch("http://localhost:3012/users/login", {
          //   method: "POST",
          //   mode: "cors",
          //   body: JSON.stringify(this.form),
          //   headers: {
          //     "content-type": "application/json"
          //   }
          // })
          this.loading = true;
          this.$axios
            .post("users/login", this.form)
            .then(res => {
              // console.log(res);
              if (res.statusText == "OK") {
                //   this.totalstars -= stars;
                this.$emit("refreshID", this.form.user_name);
                this.loading = false;
                this.$message({
                  type: "success",
                  message: "登录成功"
                });
              } else {
                this.$message({
                  type: "error",
                  message: "登录失败，用户名或者密码错误"
                });
              }
            })
            .catch(err => {
              console.log(err);
              this.$message({
                type: "error",
                message: err.response.data
              });
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
