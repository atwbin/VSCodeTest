<template>
  <div>
    <h3>票据列表</h3>
    <div class="page-container">
      <div class="wrapper" ref="scroll">
        <ul class="content bill-list">
          <li
            v-for="order in listArr"
            @click="toOrderDeatail(order.sn,order.status.value)"
            :key="order.sn"
          >
            <div
              class="bill-status bill-status-2"
              v-if="order.status.value='live'"
            >{{order.status.f1}}</div>
            <div
              class="bill-status bill-status-3"
              v-if="order.status.value='closed'"
            >{{order.status.f1}}</div>
            <div
              class="bill-status bill-status-1"
              v-if="order.status.vaule='announced'"
            >{{order.status.f1}}</div>
            <p class="bill-name">{{order.name}}</p>
            <div class="bill-info clearfix">
              <img class="bill-pic" src="http://seopic.699pic.com/photo/00026/7248.jpg_wh1200.jpg">

              <div class="bill-detail">
                <p class="detail-item">
                  <span class="detail-title">距离到期日</span>
                  <span class="detail-content">{{order.itemSummary.maturityDate}}</span>
                  <span class="detail-pop">{{order.itemSummary.maturityDueDays}}天</span>
                </p>

                <p class="detail-item">
                  <span class="detail-title">預期年化收益</span>
                  <span class="detail-content">{{order.itemSummary.estProfitApr.f1+'%'}}</span>
                </p>

                <p class="detail-item">
                  <span class="detail-title">剩余可拍金额</span>
                  <span class="detail-content figure">{{order.itemSummary.supplyFaceValue.f2 + '元'}}</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <navbar :ifarrow="'list'"></navbar>
  </div>
</template>

<script>
import { order } from "@/api/index";
import navbar from "@/components/navbar";

export default {
  mounted() {
    order.marketList("1").then(res => {
      this.listArr = this.listArr.concat(res.data.data);
      this.nextPage = res.data.pager.next;
    });
  },
  data() {
    return {
      myScroll: null,
      listArr: [],
      currentPage: 1,
      nextPage: ""
    };
  },
  methods: {
    toOrderDeatail(sn, status) {
      this.$router.push({
        name: "orderDetail",
        query: { sn: sn, status: status }
      });
    }
  },
  components:{navbar}
};
</script>


<style lang="less" scoped>
@q: 37.5rem;
.page-container {
  padding-bottom: 50 / @q;
  background-color: #f3f4f6;

  .bill-list {
    li {
      position: relative;
      width: 100%;
      padding: 22 / @q 0 22 / @q 12 / @q;
      margin-top: 10 / @q;
      background-color: #fff;
      box-sizing: border-box;

      .bill-status {
        position: absolute;
        right: 0;
        top: 10;
        width: 54 / @q;
        height: 22 / @q;
        line-height: 22 / @q;
        color: #fff;
        font-size: 12 / @q;
        text-align: center;
        border-top-left-radius: 4 / @q;
        border-bottom-left-radius: 4 / @q;
      }
      // border-top-left-radius  向div的左上角添加圆角边框
      // linear-gradient  用于创建一个线性渐变图像

      .bill-status-1 {
        background: linear-gradient(lef, #73b5fc, #489efb);
      }

      .bill-status-2 {
        background: linear-gradient(left, #fc7373, #fb3a3a);
      }

      .bill-status-3 {
        background: linear-gradient(left, #cedbe5, #abc9dc);
      }

      .bill-name {
        margin-bottom: 17 / @q;
        height: 16 / @q;
        line-height: 16 / @q;
        font-size: 16 @q;
        color: #1d2835;
        text-align: left;
      }

      .bill-info {
        .bill-pic {
          float: left;
          width: 86 / @q;
          height: 86 / @q;
          margin-right: 16 / @q;
        }

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
              display: inline-block;
              width: 39 / @q;
              height: 16 / @q;
              padding-left: 3 / @q;
              line-height: 16 / @q;
              background: url("../../assets/images/order/icon_pop_day.png")
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
              line-height: 14 / @q;
              margin-right: 14 / @q;
            }
            .figure {
              color: #4a92e3;
            }
          }
        }
      }
    }
  }
}
</style>


