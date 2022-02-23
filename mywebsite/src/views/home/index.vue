<template>
  <div class="main">
    <Profile></Profile>
    <Experience></Experience>
    <Skill></Skill>
    <Projects></Projects>
    <Contact></Contact>
  </div>
</template>

<script>
  import {
    WOW
  } from 'wowjs'
  import Experience from '../../components/experience/index.vue'
import Profile from '../../components/profile/index'
import Skill from '../../components/abilities/index.vue'
import Projects from '../../components/projects/index.vue'
import Contact from '../../components/contact/index.vue'
  export default {
    components:{
      Profile,
      Experience,
      Skill,
      Projects,
      Contact
    },
    mounted() {
      new WOW({ live: false, scrollContainer: '.el-scrollbar__wrap' }).init();
    },
    data() {
      return {
        imgList1:[require('@/assets/img/数据中台.png'),require('@/assets/img/数据中台_2.png'),require('@/assets/img/数据中台_3.png')],
        imgList2:[require('@/assets/img/贴标签网站_1.png'),require('@/assets/img/贴标签网站_2.png')]
      }
    }
  }
</script>

<style scoped>
  
</style>