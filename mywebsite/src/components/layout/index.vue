<template>
  <el-container class="bg">
    <el-header height="96px" class="header">
        <Banner></Banner>
    </el-header>
    <el-main>
        <slot></slot>
    </el-main>
  </el-container>
</template>

<script>
import Banner from '../banner/index.vue'
export default {
    components:{
        Banner
    }
}
</script>

<style scoped>
.bg{
    position: absolute;
        background-image: url('../../assets/img/主背景.png');
        background-repeat: no-repeat;
        background-size: 100%;
}
</style>