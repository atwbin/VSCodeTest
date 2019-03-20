/**
 * api 接口的统一出口
 */

// 文章模块接口
import order from '@/api/order';
// import user from '@/api/user';

const version = '1.0.0';
const components = [
    order,
    // user
];

const install = Vue => {
    components.forEach(Component => {
      Vue.use(Component);
    });
  };  

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    order,
    // user
}

// 导出接口
export default {
    install,
    version
}

