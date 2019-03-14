<template>
  <div id="detail">
    <h2 style="color:red">我是template标签里面的模板</h2>
    <h3>使用冒号to 进行传值--> {{$route.params.username}}--{{$route.params.id}}</h3>
    <h2>{{message}}</h2>

    <hr>
    <div class="detail-container">
      <div class="bill-title"></div>
      <p
        class="content haspadding"
      >拍益得是一个在线竞拍购买的交易平台，在拍品为汇票模式下，竞买者在集合汇票拍品结拍前进行自由出价，并授权系统在此集合下为竞买者自动对满足出价条件的单个汇票拍品进行出价。结拍时，单个汇票拍品出价最高、最早者获得该拍品。</p>
      <p class="title">起拍价：</p>
      <p class="content">一定票面金额对应的最低的拍卖价格。起拍价=票面金额-票面金额*剩余期限*持票利率/360。起拍价会因剩余期限的不同而不同。</p>
      <p class="content">剩余期限指当前日期距离汇票承兑日期的天数。</p>
      <p class="content haspadding">持票利率是指此汇票经承兑后，持有人在汇票尚未到期前转让给受让人，受让人用来计算所要扣除的贴现利息的利率。类比于贴现利率概念。</p>
      <p class="title">预期年化收益率：</p>
      <p
        class="content haspadding"
      >竞买人成功买入汇票后，根据实际成交价格、剩余期限和票面金额核算出来的收益率。预期年化收益率会根据剩余期限、竞买时加价多少的不同而不同。</p>
      <p class="title">保证金：</p>
    </div>
    <navbar :ifarrow="'detailRule'"></navbar>
   
  </div>
</template>

<script >
//script进入接口

import navbar from "@/components/navbar";

export default {
  name: "detailRule",
  data() {
    return {
      message: "detailrule详情页面"
    };
  },
  template: "#detail",
  metaInfo() {
    return {
      title: this.$route.meta.title,
      htmlAttrs: {
        lang: "zh",
        amp: undefined
      }
    };
  },
  components: {
    navbar
  }
};
</script>

<style lang="less" scoped>
@q: 37.5rem;
.detail-container {
  position: relative;
  top: 0;
  left: 0;
  z-index: 9999;
  min-width: 100%;
  padding: 0 30 @q 50 @q;
  background-color: #fff;
  .bill-title {
    height: 48 @q;
    line-height: 1.4rem;
    margin: 0 auto;
    font-size: 17 / @q;
    color: #418de6;
    text-align: center;
    background: url("http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg")
      center center no-repeat;
    background-size: 150 / @q 32 / @q;
  }
  .haspadding {
    padding-bottom: 35 / @q;
  }
  p.content {
    font-size: 15 / @q;
    color: #5c6d7d;
    text-align: center;
    line-height: 28 / @q;
  }
  p.title {
    margin-bottom: 14 / @q;
    font-size: 15 / @q;
    color: #5c6d7d;
    text-align: center;
    height: 15 / @q;
    line-height: 15 / @q;
    font-weight: 600;
  }
}
</style>
