<template>
  <div class="page-container">
    <div class="wrapper" ref="scroll">
      <ul class="content bill-list">
        <li
          v-for="order in listArr"
          @click="toOrderDeail(order.sn,order.status.value)"
          :key="order.on"
        >
          <!-- <p class="bill-name">{{order.name}}</p> -->
         
        </li>
         <div class="bill-detail">
            <p class="detail-item">
              <span class="detail-title">距离到期日</span>
              <span class="detail-content">自如宝洁汇票</span>
              <span class="detail-pop">200天</span>
            </p>
            <p class="detail-item">
              <span class="detail-title">预期年化收益</span>
              <span class="detail-content">3.5%</span>
            </p>
            <p class="detail-item">
              <span class="detail-title">剩余可怕金额</span>
              <span class="detail-content figure">10000元</span>
            </p>
          </div>
      </ul>
    </div>
    <hr>
    <navbar :ifarrow="'list'"></navbar>
  </div>
</template>

<script>

// import navbar from "@/components/navbar";
import { order } from "@/api/index";

export default {
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  mounted() {
    order.marketList("1").then(res => {
      //执行操作
      this.listArr = this.listArr.concat(res.data.data);
      // this.nextPage = res.data.pager.next;
    });
  },
  data() {
    return {
      myScroll: null,
      listArr: [],
      currentPage: 1
      // nextPage: ""
    };
  },
  toOrderDetail(sn, status) {
    this.$router.push({
      name: "orderDetail",
      query: { sn: sn, status: status }
    });
  },
  metaInfo() {
    return {
      title: this.$route.meta.title,
      htmlAttrs: {
        lang: "zh",
        amp: undefined
      }
    };
  }
};
</script>


 <style lang="less" scoped>
@q: 37.5rem;
.page-container {
  padding-bottom: 50 / @q;
  background-color: #f3f4f6;
}
.bill-list {
  li {
    position: relative;
    width: 100%;
    padding: 22 / @q 0 22 / @q 12 / @q;
    margin-top: 10 / @q;
    background-color: #fff;
    box-sizing: border-box;

    .bill-detail {
      float: left;

      .detail-item {
        margin-bottom: 8 / @q;
        text-align: left;
        height: 14 / @q;
        line-height: 14 / @q;
        .detail-pop {
          position: relative;
          left: 6 / @q;
          bottom: 18%;
          padding-top: 50%;
          display: inline-block;
          width: 39 / @q;
          height: 16 / @q;
          padding-left: 3 / @q;
          line-height: 16 / @q;
          background: url("http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg")
            no-repeat;
          background-size: 100%;
          text-align: center;
          font-size: 11 / @q;
          color: #418de6;
        }
        .detail-title {
          font-size: 14 / @q;
          color: #8f9eaf;
          height: 14 / @q;
          line-height: 14 / @q;
          margin-right: 22 / @q;
        }
        .detail-content {
          font-size: 14 / @q;
          color: #7e848c;
          height: 14 / @q;
          line-height: 14 / @q;
        }
        .figure {
          color: #4a92e3;
        }
      }
    }
  }
}
</style>





