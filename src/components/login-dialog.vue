<template>
  <div class="login-dialog">
    <el-dialog @close="closeDialog" title="手机号登录" width="20%" :modal="false" :visible="dialogVisible" center lock-scroll>
      <el-form ref="form" :model="UserForm" label-position="left" label-width="50px">
        <el-form-item label="手机" prop="phone">
          <el-input v-model="UserForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="UserForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>

</style>


<script>
  import { mapState, mapMutations } from "vuex";

  export default {
    name: "LoginDialog",
    data() {
      return {
        UserForm: {
          phone: "",
          password: ""
        }
      };
    },
    computed: {
      ...mapState(["dialogVisible"])
    },
    methods: {
      ...mapMutations(["openDialog", "closeDialog"]),
      hideDiaglog() {
        this.dialogVisible = false;
      },
      submit() {}
    }
  };
</script>
