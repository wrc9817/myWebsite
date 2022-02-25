<template>
  <div class="flex">
    <vue-particles color="#dedede" class="bg" 
></vue-particles>
    <div class="header" @click="handleEnterHome">
    <span>Ruochan Wang</span>
    </div>
  </div>
</template>

<script>
import {MY_ROUTES} from '../../constants/routes/index'
export default {
  methods:{
    handleEnterHome(){
      this.$router.push(MY_ROUTES.HOME)
    }
  }
}
</script>

<style scoped>
.flex{
  height:100vh;
  display:flex;
  align-items: center;
  justify-content: center;
}
.header{
  position: absolute;
  z-index:10;
  background: transparent;
  color:whitesmoke;
  padding:1%;
  font-family: englishFont;
  font-size: 70px;
  font-weight: bold;
}
.header:hover{
  cursor: pointer;
}
.bg {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: black;
  }
</style>