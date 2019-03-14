<template>
  <div>
    <div @click="toList" class="bottom-item" :class="ifarrow=='list'?'bottom-item1':'bottom-item2'"><p>票据列表页</p></div>
   
    <div @click="toHome" class="bottom-item" :class="ifarrow=='home'?'bottom-item3':'bottom-item4'"><p>首页面</p></div>

  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {}
  },
  props: ['ifarrow'],
  mounted() {},
  methods: {
    toHome() {
      this.$router.push({ name: "Home" });
    },
    toList() {
      this.$router.push({ name: "orderList" });
    }
  }
};
</script>

<style lang="less"  scoped>
@q: 37.5rem;
.bottom-table {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50 / @q;
  background-color: #fff;
  border-top: 1px solid #d6d6d6;
  z-index: 100000;
  div.bottom-item {
    float: left;
    width: 50%;
    height: 100%;
    padding-top: 36 / @q;
    box-sizing: border-box;
    p {
      text-align: center;
      height: 10 / @q;
      line-height: 10 / @q;
      font-size: 10 / @q;
    }
  }
  .bottom-item1 {
    background: url("../assets/images/public/icon_footer1.png")
      center 10 / @q no-repeat;
    background-size: 24 / @q 20 / @q;
    p {
      color: #418de6;
    }
  }
  .bottom-item2 {
    background: url("../assets/images/public/icon_footer2.png")
      center 10 / @q no-repeat;
    background-size: 21 / @q 20 / @q;
    p {
      color: #98989d;
    }
  }
  .bottom-item3 {
    background: url("../assets/images/public/icon_footer3.png")
      center 10 / @q no-repeat;
    background-size: 21 / @q 20 / @q;
    p {
      color: #418de6;
    }
  }
  .bottom-item4 {
    background: url("../assets/images/public/icon_footer4.png")
      center 10 / @q no-repeat;
    background-size: 24 / @q 20 / @q;
    p {
      color: #98989d;
    }
  }
  div.blank {
    float: left;
    width: 10%;
    height: 100%;
  }
}
</style>
