<template>
  <div>
    <div>
      <!-- {{ l }} -->
      <!-- <router-link :to="'/p/' + l.path"></router-link> -->
      <ol class="ui">
        <li>
          <a href="#/">回首页 </a>
        </li>
        <li v-for="(l, index) in lists" :key="l.id">
          <a :href="'#/p/' + l.path"> {{ index + 1 }}.{{ l.name }}</a>
        </li>
      </ol>
    </div>
    <!-- <el-button></el-button> -->
  </div>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {
      list: ["2", "3"]
    };
  },
  computed: {
    lists() {
      return this.$router.options.routes[1].children;
    }
  }
};
</script>

<style lang="scss" scoped>
// ol li {
//   display: inline-block;
// }
.ui {
  text-align: left;
  // width: 700px;
  // height: 50px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.ui li {
  // width: 70px;
  display: inline-block;
  margin: 0 10px;
}

.ui li a {
  // width: 70px;
  // height: 50px;
  padding: 0 5px;
  font-size: 12px;
  // line-height: 50px;
  // background: red;
  display: inline-block;
}
</style>
