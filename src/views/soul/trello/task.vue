<template>
  <div class="task">
    <div @click="dialogFormVisible = true">{{ taskName }}</div>
    <span class="edit" @click="alert('b')"><i class="el-icon-edit"></i></span>

    <el-dialog title="edit" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="color" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="color">
            <el-option label="red" value="shanghai"></el-option>
            <el-option label="yellow" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >save</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  props: {
    taskName: {
      type: String,
      default: ""
    }
  },
  methods: {
    alert(x) {
      alert(x);
    }
  }
};
</script>

<style lang="scss" scoped>
.task {
  margin: 6px;
  // color:red;
  background-color: rgb(167, 190, 190);
  border-radius: 3px;
  position: relative;
  line-height: 24px;

  .edit {
    border-radius: 3px;
    opacity: 0.8;
    // padding: 2px;
    position: absolute;
    right: 2px;
    top: 0px;
    visibility: hidden;
    z-index: 40;
    &:hover {
      background-color: cadetblue;
    }
  }
  &:hover {
    background-color: rgb(137, 206, 206);
    .edit {
      visibility: visible;
    }
  }
}
</style>
