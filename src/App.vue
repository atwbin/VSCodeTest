<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h1>这是我的测试工程--wangbin</h1>
    <hr>
    <p>
      <router-link to="/hi/home">首页面</router-link>|
      <router-link to="/hi/list">进入票拍列表页</router-link>|
      <!-- :to 使用冒号to 进行传值 -->
      <router-link :to="{name:'detailRule',params:{username:'wbin',id:'888'}}">票拍规则</router-link>|
      <!-- <router-link to="/detailRule">票拍规则11</router-link> -->
      <router-link to="/component-custom">自定义组件</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
