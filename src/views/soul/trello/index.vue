<template>
  <div class="main">
    <div>主界面</div>
    <list class="list" />
    <list class="list" />
    <list class="list" />
    <list class="list" />
    <list class="list" />
    <list class="list" />
    <div id="clear"></div>
  </div>
</template>

<script>
import list from "./list.vue";
export default {
  components: {
    list
  }
};
</script>

<style lang="scss" scoped>
.main {
  margin-top: 30px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  white-space: nowrap; //横向撑开页面

  overflow-x: auto;
  background-color: #89609e;
  // overflow-y: hidden;
  .list {
    width: 200px;
    // border: 1px solid #000;

    display: inline-block;
    margin: 5px 10px;
  }
}
</style>
