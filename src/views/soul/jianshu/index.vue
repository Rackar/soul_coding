<template>
  <div class="main">
    <div class="link" @click="$router.push('/p/jianshu/')">简书</div>
    <div class="link" @click="$router.push('/p/jianshu/edit')">编辑</div>
    <div class="link" @click="$router.push('/p/jianshu/list')">列表</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {}
};
</script>

<style lang="scss">
.main {
  .link {
    display: inline-block;
    cursor: pointer;
    margin: 2px 8px;
  }
}
</style>
