<template>
  <div class="login">
    <el-dropdown :show-timeout="0" :hide-timeout="0">
      <span class="el-dropdown-link">登录</span>
      <i class="arrow-down bg-topList"></i>
      <el-dropdown-menu class="dropmenu" slot="dropdown">
        <el-dropdown-item>
          <i class="icon-mb"></i>
          <em>手机号登录</em>
        </el-dropdown-item>
        <el-dropdown-item divided>
          <i class="icon-wx"></i>
          <em>微信登录</em>
        </el-dropdown-item>
        <el-dropdown-item divided>
          <i class="icon-qq"></i>
          <em>QQ登录</em>
        </el-dropdown-item>
        <el-dropdown-item divided>
          <i class="icon-sina"></i>
          <em>新浪微博登录</em>
        </el-dropdown-item>
        <el-dropdown-item divided>
          <i class="icon-net"></i>
          <em>网易邮箱账号登录</em>
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
  .arrow-down {
    position: absolute;
    top: -8px;
    left: 50%;
    width: 14px;
    height: 8px;
    margin-left: -7px;
    background-position: -20px 0;
  }
}
</style>

<script>
export default {
  name: "login"
};
</script>

