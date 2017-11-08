<template>
  <div class="login">
    <el-dropdown :show-timeout="0" :hide-timeout="0">
      <span class="el-dropdown-link">登录</span>
      <i class="arrow-down bg-topList"></i>
      <el-dropdown-menu class="dropmenu" slot="dropdown">
        <el-dropdown-item v-for="(value, key) in login" :key="key">
            <i :class="'icon-'+key"></i>
            <em>{{value}}登录</em>
        </el-dropdown-item>
        <div class="arrow-up"></div>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<style lang="scss" scoped>
.login {
  float: right;
  position: relative;
  height: 45px;
  margin: 20px 0 0 20px;
  padding: 0 22px 0 0;
  background-position: right -46px;
}
</style>

<script>
export default {
  name: "login",
  data() {
    return {
      login: {
        mb: "手机号",
        wx: "微信",
        qq: "QQ",
        sina: "新浪微博",
        net: "网易邮箱"
      }
    };
  }
};
</script>