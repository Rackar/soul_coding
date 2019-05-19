<template>
  <div class="product">
    <!-- <h4>
      商品名称
    </h4> -->
    <div>
      <img :src="product.imgurl" alt="" srcset="" width="200px;" />
    </div>
    <div class="price">{{ product.price }}</div>
    <div class="label">{{ product.label }}</div>
    <div class="title">{{ product.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {
          name: "",
          price: "",
          label: "",
          imgurl: ""
        };
      }
    },
    // projuct: Object,
    name: {
      type: String,
      default: ""
    },
    price: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    imgurl: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  margin: 20px;
  margin-bottom: 40px;
  width: 350px;
  position: relative;
  .title {
    font-size: 18px;
  }
  .price {
    display: block;
    text-align: left;
    float: left;
    color: red;
  }
  .label {
    text-align: right;
  }
}
</style>
