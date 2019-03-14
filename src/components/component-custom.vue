<template>
  <div >
   asd
    <!-- <wangbin :here="msg"></wangbin> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "BeiJing"
    };
  },
  // components: { 
  //   wangbin: {
  //     template: '<div style="color:red;">wangbin is in here</div>',
  //     props: ['here']
  //   }
  // }
};
</script>

<style scoped>
</style>
