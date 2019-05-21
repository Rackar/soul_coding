<template>
  <div>
    <markdown-editor v-model="content" ref="markdownEditor"></markdown-editor>
    <el-button @click="save">保存</el-button>
    {{ content }}
  </div>
</template>

<script>
import { markdownEditor } from "vue-simplemde";
export default {
  components: {
    markdownEditor
  },
  data() {
    return {
      content: "",
      configs: {
        spellChecker: false // 禁用拼写检查
      }
    };
  },
  methods: {
    save() {}
  }
};
</script>

<style lang="scss"></style>
