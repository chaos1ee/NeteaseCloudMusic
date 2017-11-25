<template>
  <div class="footer">
    <div class="ft-main">
      <div class="ft-wr clearfix">
        <div class="copy">
          <p class="cl">
            <a href="javascript:void(0)">关于网易</a>
            <span class="line">|</span>
            <a href="javascript:void(0)">客户服务</a>
            <span class="line">|</span>
            <a href="javascript:void(0)">服务条款</a>
            <span class="line">|</span>
            <a href="javascript:void(0)">网站导航</a>
            <span class="line">|</span>
            <a href="javascript:void(0)">意见反馈</a>
          </p>
          <p class="cr">
            <span class="group">网易公司版权所有&#169;1997-2017</span>
            杭州乐读有限公司运营：
            <a href="javascript:void(0)">
              浙网[2015] 0415-135号
            </a>
          </p>
        </div>
        <ul class="enter">
          <li>
            <a href="javascript:void(0)">独立音乐人</a>
          </li>
          <li>
            <a href="javascript:void(0)">音乐专栏</a>
          </li>
          <li>
            <a href="javascript:void(0)">自媒体</a>
          </li>
          <li>
            <a href="javascript:void(0)">赞赏</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .footer {
    position: relative;
    height: 140px;
    overflow: hidden;
    border-top: 1px solid #d3d3d3;
    background-color: #f2f2f2;
    .ft-main {
      width: 980px;
      margin: 0 auto;
    }
    .copy {
      float: left;
      width: 490px;
      padding-top: 35px;
      line-height: 24px;
    }
    .cl a {
      color: #999;
    }
    .line {
      margin: 0 8px 0 10px;
      color: #c2c2c2;
    }
    .cr,
    .cr a {
      color: #666;
    }
    .group {
      margin-right: 14px;
    }
    .enter {
      float: right;
      width: 330px;
      margin-top: 21px;
    }
    .enter a {
      float: left;
      width: 60px;
      height: 70px;
      font-size: 0;
      margin-left: 30px;
      background-image: url("../assets/image/foot_enter.png");
      background-repeat: no-repeat;
    }
    .enter li:nth-child(1) a {
      margin-left: 0;
      background-position: -60px -80px;
    }
    .enter li:nth-child(2) a {
      background-position: 0 -80px;
    }
    .enter li:nth-child(3) a {
      background-position: 0 0;
    }
    .enter li:nth-child(4) a {
      background-position: -60px 0;
    }
  }
</style>

<script>
  export default {
    name: "cloud-footer"
  };
</script>
