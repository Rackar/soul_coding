<template>
  <div class="home">
    <div class="top">
      <h2>告白书</h2>
      <div class="left">
        <div>亲爱的 <span style="color:red;">XXX</span></div>
        <div class="maintext" style="padding:20px;width:200px;">
          你的脸蛋美的像没有开美颜的西红柿，让我的小心脏剧烈跳动噗通通。
          在梦中的无数次相遇，也无法平息我想你的小波澜。要不，一起呗？
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
@keyframes change {
  form {
    font-size: 14px;
    color: red;
  }
  to {
    font-size: 22px;
    color: red;
  }
}

.left {
  float: left;
  text-align: left;
  margin-left: 20px;
}
.maintext {
  // font-size: 25px;
  animation: change 3s;
  animation-iteration-count: infinite;
  // -webkit-animation: change 5s;
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
