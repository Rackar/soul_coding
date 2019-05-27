<template>
  <div class="editer">
    <el-input v-model="title"></el-input>
    <markdown-editor
      v-model="content"
      :configs="configs"
      ref="markdownEditor"
    ></markdown-editor>

    <el-button @click="save">保存</el-button>
    <!-- {{ content }} -->

    <div>浏览页</div>
    <div v-html="output" class="markdown-body"></div>
  </div>
</template>

<script>
// import { markdownEditor } from "vue-simplemde";
import markdownEditor from "vue-simplemde/src/markdown-editor";
export default {
  components: {
    markdownEditor
  },
  computed: {
    simplemde() {
      return this.$refs.markdownEditor.simplemde;
    }
  },
  mounted() {
    // console.log(this.simplemde);
    // this.simplemde.togglePreview();
  },
  data() {
    return {
      title: "",
      output: "",
      content: "",
      configs: {
        spellChecker: false // 禁用拼写检查
      },
      configs2: {
        spellChecker: false, // 禁用拼写检查
        toolbar: false,
        toolbarTips: false
      }
    };
  },
  methods: {
    save() {
      // console.log(this.content);
      this.output = this.simplemde.markdown(this.content);
      this.$store.commit("saveTempContent", this.output);
      let body = {
        title: this.title,
        content: this.content.substring(0, 50),
        output: this.output,
        time: new Date(),
        count_some: 0,
        count_view: 0,
        count_comit: 0,
        count_like: 0
      };
      // body = JSON.stringify(body);
      this.$axios.post("http://localhost:3000/article", body).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~simplemde/dist/simplemde.min.css";
.editer {
  text-align: left;
  width: 100%;
  div.markdown-editor {
    text-align: left;
    // width: 50%;
    // display: inline-block;
  }
}
</style>
