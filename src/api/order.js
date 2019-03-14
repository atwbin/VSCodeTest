/**
 * 竞拍模块
 */

 import axios from '@/request/http'

 // 设置post请求头
 // 所有的请求接口
 const order ={
     //竞拍列表
     marketList(page){
         if(!page){
             return axios.get(`/cm/market/list/`,{
                 params:{page:page}
             });
         }else{
             return axios.get('/cm/market/list/');
         }
     },
     //竞拍详情
     getOrderDetail(id,status){
         if(status=="live"){
             return axios.get(`/cm/market/info`,{
                 params:{sn:id,expand:'drawee,activeAuction'}
             });
         }else if(status=='closed'){
             return axios.get(`/cm/market/info`,{
                 params:{sn:id,expand:'drawee'}
             });
         }else{
             return axios.get(`/cm/market/info`,{
                 params:{sn:id,expand:'drawee,announcedAuction'}
             });
         }
     }
 }

 export default order;