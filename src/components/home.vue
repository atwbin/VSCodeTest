<template>
  <div>
    <h2>{{msg}}</h2>
    <hr>

    <navbar :ifarrow="'home'"></navbar>
  </div>
</template>

<script>
import navbar from "@/components/navbar";

export default {
  data() {
    return {
      msg: "i am home test page"
    };
  }
};
</script>

<style scoped>
</style>
