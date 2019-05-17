<template>
  <div class="home">
    <div class="top">
      <h2>告白书</h2>
      <div class="left">
        <div>亲爱的 <span style="color:red;">XXX</span></div>
        <div style="padding:20px;width:200px;">
          大段肉麻情话 大段肉麻情话 大段肉麻情话 大段肉麻情话 大段肉麻情话
          大段肉麻情话大段肉麻情话 大段肉麻情话 大段肉麻情话 大段肉麻情话
          大段肉麻情话 大段肉麻情话大段肉麻情话 大段肉麻情话 大段肉麻情话
          大段肉麻情话 大段肉麻情话 大段肉麻情话大段肉麻情话 大段肉麻情话
        </div>
      </div>
      <div class="right">
        <img src="./pic/heart.jpg" alt="" srcset="" width="82px;" />
      </div>
    </div>
    <div class="footer">
      <div style="color:blue">
        落款：想你的要死的OOO
      </div>
      <div>2019年5月17日</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>

<style lang="scss">
.left {
  float: left;
  text-align: left;
  margin-left: 20px;
}
.left ::after {
  clear: both;
}
.right {
  float: right;
  margin-top: 30px;
}
.right ::after {
  clear: both;
}
.top {
  height: 300px;
  margin-top: 50px;
}
.footer {
  margin-top: 40px;
  text-align: right;
  margin-right: 16px;
}
</style>
