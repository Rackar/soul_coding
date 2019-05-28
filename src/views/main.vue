<template>
  <div>
    <!-- <div class="wrapper">
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
    <div class="main2">6</div> -->
    <div class="main">
      <h2>我是谁</h2>
      <el-card class="box-card">
        杨旭，注册测绘师，测绘高级工程师，业余码农。CSDN，简书。贪多嚼不烂，什么都喜欢。写过前端vue.js，用过数据库PostgreSQL,MongoDB，引擎Unity,Cocos，
      </el-card>

      <h2>我的软件</h2>
      <el-card class="box-card">
        <soft v-for="x in mysoft" :soft="x" :key="x.id" />
      </el-card>
    </div>
  </div>
</template>

<script>
import soft from "./soft.vue";
export default {
  components: {
    soft
  },
  data() {
    return {
      mysoft: [
        {
          name: "航测参数计算工具",
          type: "手机端、网页端",
          link: "http://www.codingyang.com/calc",
          content:
            "航空摄影中工作量和参数的计算。通过选择预设好的相机类型和飞机类型，输入分辨率和测区面积，得到相关参数如相对航高，基线和航线条数及飞行总小时。",
          img_url: "/img/calc.png"
        },
        {
          name: "航空影像统计树木数量",
          type: "桌面端",
          link:
            "https://jingyan.baidu.com/article/9faa7231e3f687473d28cb77.html",
          content:
            "通过加载航飞影像，软件自动提取和人工交互增补检查的流程，精确测定树木数量的软件。管理的公园、保护区、开发区、山头有多少棵树？当前主要采用抽样和统计的计算方法，数量统计准确率不高，不利于精细化管理。软件使用步骤见链接，桌面端软件暂未提供下载链接，请联系我获取。",
          img_url: "/img/tree.png"
        },
        {
          name: "航空影像快速质检",
          type: "桌面端",
          link: "/",
          content:
            "仅使用概略POS，快速评定航摄飞行质量。航摄质量检查的主要方法为传统人工检查法和软件自动检查法。人工检查耗时较长、效率偏低、容易漏检。自动检查效率较高，但需要准备相应的POS数据、影像数据和其他参数文件，其中影像数据需要一定时长，进行拼接匀色等处理才能得到结果。本软件仅使用POS数据直接定向，来快速评估飞行质量，定位可疑点。",
          img_url: "/img/zhijian.png"
        }
      ]
    };
  }
};
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
