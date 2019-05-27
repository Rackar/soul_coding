<template>
  <div class="wrapper">
    <h1>
      首页 看到这个已经可以吹一波了 基础环境搭建成功
      后续教程页面会在上方导航栏陆续增加
    </h1>

    <div class="intro">1</div>
    <div class="header">2</div>
    <div class="nav">个人介绍，博客文章，自编软件，模块</div>
    <div class="main">
      <div>111</div>
      <div>222</div>
      <div>333</div>
      <div>333</div>
    </div>
    <div class="nav">4</div>
    <div class="main2">6</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$ww: 2000px;
.wrapper {
  // background-image: url(/img/bg.jpg);
  // width: 100%;
  // height: 100%;
  // width: $ww;
  // display: flex;
  // flex-direction: column;
  // flex-wrap: wrap;
  div {
    margin: 20px;
    // height: 100px;
    // width: 600px;
    // background-color: bisque;
  }
  .main {
    width: 100%;

    /*flex布局（作用于容器）*/
    display: flex;

    /*两端对齐（作用于容器）*/
    justify-content: space-around;

    /*侧轴方向对齐方式（作用于容器）*/
    align-items: flex-end;

    /*换行（作用于容器）*/
    flex-wrap: wrap;
    div {
      width: 300px;
      // height: 50px;
      background: #444;
      margin: 20px;
    }
  }
}
</style>
