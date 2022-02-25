<template>
<router-view v-slot="{ Component }">
  <transition name="scale" mode="out-in">
    <component :is="Component" />
  </transition>
</router-view>
</template>
<script>
export default {
}
</script>
<style>

.scale-enter-active{
  -webkit-transform: none;
  transform: none;
  will-change:auto;
  transition: all 0.5s ease-out;

}
.scale-leave-active {
  -webkit-transform: none;
  transform: none;
  will-change:auto;
  transition: all 0.5s ease-in;
}


.scale-enter-from{
  opacity: 0.5;
  transform: scale(1.4);
}
.scale-leave-to {
  opacity: 0;
  transform: scale(1.2);
}
body{
  margin:0 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.el-main{
  padding:0 !important;
}
.black{
  color: #333;
}
.white{
  color:white;
}
</style>
