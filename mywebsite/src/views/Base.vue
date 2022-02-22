<template>
  <vue-particles color="#dedede" class="bg"></vue-particles>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<script>
  // @ is an alias to /src
  import Layout from '../components/layout/index.vue'

  export default {

    components: {
      Layout
    },
  }
</script>
<style>
/* 内置浏览器滚动条样式修改 */
::-webkit-scrollbar {
  opacity: 0.5;
  width: 7px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 14px;
  background: rgba(204, 204, 204, 0.26);
}

::-webkit-scrollbar-track {
  border-radius: 0;
  background: black;
}
</style>
<style scoped>
  .bg {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: black;
  }


</style>