<template>
  <div class="calc">
    <h2>航摄参数计算</h2>
    <div class="copy">杨旭</div>
    <el-card class="box-card">
      <el-form ref="form" :inline="false" :model="form" label-width="140px">
        <el-form-item label="航摄仪选择">
          <el-select
            v-model="form.cam"
            placeholder="请选择航摄仪"
            @change="setCam"
          >
            <el-option
              v-for="cam in cams"
              :label="cam.name"
              :value="cam.name"
              :key="cam.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="飞机选择">
          <el-select
            v-model="form.plane"
            placeholder="请选择飞机"
            @change="setPlane"
          >
            <el-option
              v-for="plane in planes"
              :label="plane.name"
              :value="plane.name"
              :key="plane.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="地面分辨率（米）">
          <el-input v-model="form.fenbianlv"></el-input>
        </el-form-item>
        <el-form-item label="旁向重叠度（%）">
          <el-input v-model="form.pxchongdie"></el-input>
        </el-form-item>
        <el-form-item label="航向重叠度（%）">
          <el-input v-model="form.hxchongdie"></el-input>
        </el-form-item>
        <el-form-item label="测区长度（公里）">
          <el-input v-model="form.changdu"></el-input>
        </el-form-item>
        <el-form-item label="测区宽度（公里）">
          <el-input v-model="form.kuandu"></el-input>
        </el-form-item>
        <el-form-item label="单架次航时（时）">
          <el-input v-model="form.dancixiaoshi"></el-input>
        </el-form-item>
        <el-divider></el-divider>
        <!-- <el-button type="primary" @click="onSubmit">计算</el-button> -->

        <div class="result">
          <el-row :gutter="20">
            <!-- <el-row type="flex" class="row-bg" justify="space-around"> -->
            <el-col :span="24"
              ><el-tag>相对航高</el-tag>{{ XDhanggao }}米</el-col
            >
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12"><el-tag>基线长度</el-tag>{{ jixian }}米</el-col>
            <el-col :span="12"><el-tag>航线间隔</el-tag>{{ jiange }}米</el-col>
          </el-row>
          <el-row :gutter="20">
            <!-- <el-row type="flex" class="row-bg" justify="space-around"> -->
            <el-col :span="12"
              ><el-tag>航片数量</el-tag>{{ hangpian }}片</el-col
            >
            <el-col :span="12"
              ><el-tag>航线数量</el-tag>{{ hangxian }}条</el-col
            >
          </el-row>
          <el-row :gutter="20">
            <!-- <el-row type="flex" class="row-bg" justify="space-around"> -->
            <el-col :span="12"
              ><el-tag>作业航程</el-tag>{{ hangcheng }}公里</el-col
            >
            <el-col :span="12"
              ><el-tag>作业小时</el-tag>{{ xiaoshi }}小时</el-col
            >
          </el-row>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        cam: "UCE80",
        plane: "运5",
        fenbianlv: 0.1,
        pxchongdie: 35,
        hxchongdie: 65,
        changdu: 10,
        kuandu: 10,
        dancixiaoshi: 3
      },
      cams: [
        {
          type: "",
          status: "",
          name: "UCE80",
          pxpx: 20010,
          hxpx: 13080,
          jiaoju: 80,
          xiangyuan: 5.2
        },
        {
          type: "",
          status: "",
          name: "UCLp",
          pxpx: 11704,
          hxpx: 7920,
          jiaoju: 70,
          xiangyuan: 6
        },
        {
          type: "",
          status: "",
          name: "AX80",
          pxpx: 10328,
          hxpx: 7760,
          jiaoju: 50,
          xiangyuan: 5.2
        },
        {
          type: "",
          status: "",
          name: "UCD",
          pxpx: 11500,
          hxpx: 7500,
          jiaoju: 100,
          xiangyuan: 9
        },
        {
          type: "",
          status: "",
          name: "UCX",
          pxpx: 14430,
          hxpx: 9420,
          jiaoju: 100,
          xiangyuan: 7.2
        },
        {
          type: "",
          status: "",
          name: "UCXP",
          pxpx: 17310,
          hxpx: 11310,
          jiaoju: 100,
          xiangyuan: 6
        },
        {
          type: "",
          status: "",
          name: "UCXP-WA",
          pxpx: 17310,
          hxpx: 11310,
          jiaoju: 70,
          xiangyuan: 6
        },
        {
          type: "",
          status: "",
          name: "5DmarkII-24",
          pxpx: 5616,
          hxpx: 3744,
          jiaoju: 24,
          xiangyuan: 6.4
        },
        {
          type: "",
          status: "",
          name: "5DmarkII-35",
          pxpx: 5616,
          hxpx: 3744,
          jiaoju: 35,
          xiangyuan: 6.4
        },
        {
          type: "",
          status: "",
          name: "DMC",
          pxpx: 13824,
          hxpx: 7680,
          jiaoju: 120,
          xiangyuan: 12
        },
        {
          type: "",
          status: "",
          name: "UCOp",
          pxpx: 11674,
          hxpx: 7514,
          jiaoju: 80,
          xiangyuan: 6
        },
        {
          type: "",
          status: "",
          name: "DMC2 140",
          pxpx: 12096,
          hxpx: 11200,
          jiaoju: 92,
          xiangyuan: 7.2
        },
        {
          type: "",
          status: "",
          name: "DMC2 250",
          pxpx: 17216,
          hxpx: 14656,
          jiaoju: 112,
          xiangyuan: 5.6
        },
        {
          type: "",
          status: "",
          name: "DMC2 230",
          pxpx: 15552,
          hxpx: 14144,
          jiaoju: 92,
          xiangyuan: 5.6
        },
        {
          type: "",
          status: "",
          name: "SWDC",
          pxpx: 16000,
          hxpx: 12000,
          jiaoju: 50,
          xiangyuan: 6
        },
        {
          type: "",
          status: "",
          name: "SWDC-5",
          pxpx: 8176,
          hxpx: 6132,
          jiaoju: 100,
          xiangyuan: 6
        }
      ],
      planes: [
        { name: "运5", type: "", status: "", speed: 160, turn_time: 0.08 },
        { name: "运12", type: "", status: "", speed: 230, turn_time: 0.08 },
        { name: "塞斯纳", type: "", status: "", speed: 250, turn_time: 0.08 },
        { name: "国王", type: "", status: "", speed: 400, turn_time: 0.1 },
        { name: "运8", type: "", status: "", speed: 550, turn_time: 0.11 }
      ],
      cam: {},
      plane: {}
    };
  },

  methods: {
    onSubmit() {
      //   console.log("submit!");
    },
    setCam(value) {
      //   console.log(value);
      let selectCam = this.cams.filter(cam => cam.name == value);
      //   console.log(selectCam[0]);
      this.cam = selectCam[0];
    },
    setPlane(value) {
      //   console.log(value);
      let selectPlane = this.planes.filter(plane => plane.name == value);
      //   console.log(selectPlane[0]);
      this.plane = selectPlane[0];
    }
  },
  //   zxiangduihanggao = fenbianlv.value * jiaoju.value /xiangyuandaxiao.value *1000;
  // zjx = fenbianlv.value * hangxiangpx.value * (100-hangxiangcd.value)/100;
  // zjg = fenbianlv.value * pangxiangpx.value * (100-pangxiangcd.value)/100;
  // zhx = Math.round(cequkd.value / zjg * 1000)+1;
  // zhc = cequcd.value * zhx;
  // var zxs1=zhc/fjsudu/0.85;
  // var zxs2=fjzw*(zhx-1);
  // zxs=zxs1+zxs2;
  // zhp=cequcd.value/zjx*zhx*1000;
  mounted() {
    this.cam = this.cams[0];
    this.plane = this.planes[0];
  },
  computed: {
    XDhanggao() {
      return Math.round(
        ((this.form.fenbianlv * this.cam.jiaoju) / this.cam.xiangyuan) * 1000
      );
    },
    jixian() {
      return (
        (this.form.fenbianlv * this.cam.hxpx * (100 - this.form.hxchongdie)) /
        100
      );
    },
    jiange() {
      return Math.round(
        (this.form.fenbianlv * this.cam.pxpx * (100 - this.form.pxchongdie)) /
          100
      );
    },
    hangcheng() {
      return this.form.kuandu * this.hangxian;
    },
    hangxian() {
      return Math.round((this.form.kuandu / this.jiange) * 1000) + 1;
    },
    hangpian() {
      return Math.round(
        (this.form.kuandu / this.jixian) * this.hangxian * 1000
      );
    },
    xiaoshi() {
      return (
        this.hangcheng / this.plane.speed / 0.85 +
        this.plane.turn_time * (this.hangxian - 1)
      ).toFixed(2);
    }
  }
};
</script>

<style lang="scss">
.calc {
  .copy {
    position: fixed;
    right: 4px;
    top: 4px;
    font-size: 24px;
    // opacity: 0.5;
    color: rgba(202, 223, 226, 0.322);
  }
  div.el-form-item {
    margin-bottom: 4px;
  }
  input.el-input__inner {
    width: 140px;
  }
  .result {
    text-align: left;
  }
  span.el-tag {
    margin-right: 5px;
  }
}
</style>
