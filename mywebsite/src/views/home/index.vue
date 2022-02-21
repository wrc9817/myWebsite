<template>
  <div class="main">
    <div class="row">
      <el-carousel class="img-container animate__animated animate__bounceInLeft" indicator-position="inside" height="770px" interval="5000">
        <el-carousel-item v-for="src in imgList" :key="src">
          <img class="img" :src="src" />
        </el-carousel-item>
      </el-carousel>
      <div class="detail animate__animated animate__bounceInRight">
        <div class="quote">"自主研发的项目管理系统"</div>
        <div class="quote"> "项目，版本，任务管理" </div>
        <div class="quote">"权限"</div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="row">
      <div class="detail wow animate__animated animate__bounceInLeft">
        <div class="quote">"项目进度，OKR看板"</div>
      </div>
      <img class="img-container wow animate__animated animate__bounceInRight" src="../../assets/img/电子看板.png" />
    </div>
  </div>
</template>

<script>
  import {
    WOW
  } from 'wowjs'

  export default {
    mounted() {
      new WOW().init()
    },
    data() {
      return {
        imgList:[require('@/assets/img/数据中台.png'),require('@/assets/img/数据中台_2.png'),require('@/assets/img/数据中台_3.png')]
      }
    }
  }
</script>

<style scoped>
  .main {
    padding: 2%;
  }

  .title {
    padding: 1.5% 0;
    color: black;
    font-weight: 600;
    font-size: 16px;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
.img-container{
  width:80%;
}
  .img {
    width: 100%;
  }

  .detail {
    padding: 0 1%;
    width: 12%;
    text-align: center;
  }

  .divider {
    height: 110px;
  }
  .quote{
    margin:5px 0;
  }
</style>