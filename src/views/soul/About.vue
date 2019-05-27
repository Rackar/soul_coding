<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button>按钮</button>
    <el-button>按钮</el-button>
    <div></div>
    <div v-for="item in lists_format()" :key="item.id">
      <span v-for="t in item" :key="t.id">
        {{ t }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [1, 2, 3, 4, 5, 6, 7, 3, 4, 5, 6, 2, 3, 4, 5, 6, 7, 8]
    };
  },
  methods: {
    lists_format() {
      let count = 3;
      let outside = [];
      let inside = [];
      for (let index = 0; index < this.lists.length; index++) {
        inside.push(this.lists[index]);
        if ((index + 1) % count == 0 || index + 1 == this.lists.length) {
          outside.push(inside);
          inside = [];
        }
      }
      return outside;
    }
  }
};
</script>
