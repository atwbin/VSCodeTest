import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import VueLazyload from 'vue-lazyload'
import DefaultPlaceHolder from "@/assets/images/common/default.png";


// import Hi from '@/components/Hi'
// import Home from '@/components/home'

//两种引入方式：
// import OrderList from '@/components/views/order/list'
// const orderList = () => import('@/components/views/order/list');


const OrderList = () => import('@/views2/order/list');

Vue.use(Router)
Vue.use(Meta)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: DefaultPlaceHolder,
  loading: DefaultPlaceHolder,
  attempt: 1
})


const routes = [

  {
    path: '/', //竞拍列表
    name: 'orderList',
    component: OrderList,
    meta: { title: '票据列表' }
  }

]

const router = new Router({
  routes
});

router.beforeEach((to,from,next)=>{
if(to.matched.some(record=>record.meta.requiresAuth)){
   //暂时忽略  判断登录 
}else{
  next();
}
});

router.afterEach((to, from) => {
  // if (_hmt) {
  //   _hmt.push(['_trackPageview', '/#' + to.path]);
  // }
});

export default router;
