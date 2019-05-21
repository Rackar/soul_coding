<template>
  <div class="listwrap">
    <div class="title">
      <span class="name">list</span>
      <span class="more">
        <a href>...</a>
      </span>
    </div>
    <task v-for="task in tasks" :taskName="task.name" :key="task.id" />
  </div>
</template>

<script>
import task from "./task.vue";
export default {
  components: {
    task
  },
  data() {
    return {
      tasks: [
        {
          name: "task1"
        },
        {
          name: "task2"
        },
        {
          name: "task3"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.listwrap {
  width: 100%;
  background-color: #dfe1e6;
  border-radius: 4px;
  .title {
    width: 100%;
    // background-color: rgb(189, 108, 158);
    // padding:  4px;
    .name {
      display: inline-block;
      text-align: left;
      width: 50%;
      background-color: aqua;
      margin-left: 6px;
      margin-right: -6px;
      // margin: 1px 4px;
    }
    .more {
      display: inline-block;
      width: 50%;
      text-align: right;
      // margin: 1px 4px;
      margin-left: -6px;
      margin-right: 6px;
    }
  }
}
</style>
