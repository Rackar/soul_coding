<template>
  <div>
    <h2>商品列表</h2>
    <!-- <product :product="lists[0]" />
    <product :product="lists[1]" /> -->
    <product v-for="list in lists" :key="list.id" :product="list" />
  </div>
</template>

<script>
import product from "./product.vue";
export default {
  data() {
    return {
      lists: [
        {
          name: "小米9",
          price: "899",
          label: "5万人购买",
          imgurl: "./img/pro.webp"
        },
        {
          name: "小米19",
          price: "1899",
          label: "15万人购买",
          imgurl: "./img/pro.webp"
        },
        {
          name: "小米139",
          price: "2899",
          label: "15万人购买",
          imgurl: "./img/pro.webp"
        },
        {
          name: "小米119",
          price: "6899",
          label: "15万人购买",
          imgurl: "./img/pro.webp"
        }
      ]
    };
  },
  components: {
    product
  }
};
</script>

<style lang="scss" scoped></style>
