/** 
 * 账户中心模块
 */

import axios from '@/request/http'; // 导入http中创建的axios实例

const user = {
  // 检测登录状态
  checkSession() {
    return axios.get('/site/session');
  },
  // 用户信息
  getUserInfo() {
    return axios.get('/cm/user/user/info');
  },
  getUserCenter(){
    return axios.get(`/cm/user/user/info`);
  },
  getUserOrderList(status,page){
    return axios.get(`/cm/user/order/list`,{
      params: {auctionStatus:status,expand:'market',page:page}
    });
  },
  getUserOrderDetail(sn){
    return axios.get(`/cm/user/order/info`,{
      params: {orderSn:sn,expand:'market,auction'}
    });
  },
  getUserOrderRecord(sn,page){
    if(!page){
      return axios.get(`/cm/user/bid/list`,{
        params: {orderSn:sn,expand:'item',isWinner:1,page:page}
      });
    }else{
      return axios.get(`/cm/user/bid/list`,{
        params: {orderSn:sn,expand:'item',isWinner:1}
      });
    }
  }
}

export default user;