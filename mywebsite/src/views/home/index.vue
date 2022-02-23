<template>
  <div class="main">
    <Nav class="nav"></Nav>
    <Profile id="Profile"></Profile>
    <Experience id="Experience"></Experience>
    <Abilities id="Abilities"></Abilities>
    <Projects id="Projects"></Projects>
    <Contact id="Contact"></Contact>
  </div>
</template>

<script>
  import {
    WOW
  } from 'wowjs'
  import Experience from '../../components/experience/index.vue'
import Profile from '../../components/profile/index'
import Abilities from '../../components/abilities/index.vue'
import Projects from '../../components/projects/index.vue'
import Contact from '../../components/contact/index.vue'
import Nav from '../../components/nav/index.vue'
  export default {
    components:{
      Profile,
      Experience,
      Abilities,
      Projects,
      Contact,
      Nav
    },
    mounted() {
      new WOW({ live: false, scrollContainer: '.el-scrollbar__wrap' }).init();
    },
    computed:{
      page:function(){
        return this.$store.state.page
      }
    },
    watch:{
      "$store.state.page":{
        handler:function(newVal){
          if(newVal){
            this.handleClickToScroll(newVal)
          }
        }
      }
    },
    methods:{
      handleClickToScroll(name){
        var top = document.getElementById(name).offsetTop
        window.scrollTo({
          top:top,
          behavior:'smooth'
        })
      }
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
  .nav{
    position: absolute;
    right:200px;
  }
</style>