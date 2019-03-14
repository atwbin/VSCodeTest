import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Hi from '@/components/Hi'
import Home from '@/components/home'

//两种引入方式：
// import OrderList from '@/components/views/order/list'

const orderList = () => import('@/components/views/order/list');
const detailRule = () => import('@/components/views/order/detailRule');
const componentCustom = () => import('@/components/component-custom')

Vue.use(Router)
Vue.use(Meta)

const routes = [
  {
    path: '/Hi',
    component: Hi,
    children: [
      {
        path: '/',
        component: Hi
      },
      {
        path: 'home',
        component: Home
      },
      {
        path: 'list',
        component: orderList,
        meta: {
          title: '票据列表'
        }
      }
    ]
  },
  {
    path: '/detailRule/:username/:id',
    name: 'detailRule',
    component: detailRule,
  }, {
    path: '/component-custom',
    name: 'componentCustom',
    component: componentCustom
  }

]

const router = new Router({
  routes
});


export default router;
