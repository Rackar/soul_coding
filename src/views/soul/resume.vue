<template>
  <div>
    <h2>赵XX的简历</h2>
    <div>
      <iframe
        frameborder="0"
        src="https://v.qq.com/txp/iframe/player.html?vid=c0805fzl1h8"
        allowFullScreen="true"
      ></iframe>
    </div>
    <div class="info">邮箱：xxx@xx.ccc 电话：183333333 地址：北京中关村</div>

    <div class="neirong">
      教育经历
      <ul class="edu">
        <li>小学：清华小学</li>
        <li>初中：北京初中</li>
        <li>高中：南开高中</li>
        <li>大学：普林斯顿大学</li>
      </ul>
      <br />
      工作经验
      <ul class="work">
        <li>百度</li>
        <li>腾讯</li>
        <li>阿里巴巴</li>
      </ul>
      自我吹捧：有300多项发明，2000多个开源项目。
    </div>
    <div>微信扫喵二维码，加我好友</div>
    <img src="./pic/qun.jpg" alt="" width="300px;" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.info {
  font-size: 20px;
  padding: 20px;
}

.neirong {
  // width: 300px;
  // height: 300px;
  border: 1px solid blue;
  font-size: 18px;
  padding: 12px;
  .edu {
    background-color: aqua;
  }
  .work {
    background-color: rgb(159, 57, 199);
  }
}
</style>
