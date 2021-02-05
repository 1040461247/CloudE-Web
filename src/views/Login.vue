<template>
  <div id="login">
    <el-form ref="loginForm" :model="loginForm" class="loginContainer" :rules="rules">
      <h1 class="loginTitle">系统登陆</h1>
      <el-form-item prop="username">
        <el-input type="text" auto-complete v-model="loginForm.username" placeholder="请输入用户名"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="请输入密码"/>
      </el-form-item>
      <el-form-item prop="code">
        <el-input type="text" auto-complete="false" v-model="loginForm.code" placeholder="点击图片更换验证码" style="width: 250px; margin-right: 5px;"/>
        <img :src="captchaUrl"/>
      </el-form-item>
        <el-checkbox class="loginRemember">记住我</el-checkbox>
        <el-button type="primary" style="width:100%" @click="submitLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      captchaUrl: '',
      loginForm: {
        username: 'admin',
        password: '123',
        code: ''
      },
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: 'blur' }],
        password: [{ required: true, message: "请输入密码", trigger: 'blur' }],
        code: [{ required: true, message: "请输入验证码", trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          this.$message.error("请输入索引字段")
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
 .loginContainer {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
 }
 .loginTitle {
   margin: 5px auto 30px auto;
   text-align: center;
 }
 .loginRemember {
   text-align: left;
   margin: 0 0 15px 0;
 }
</style>