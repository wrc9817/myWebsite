<template>
  <el-row class="banner" >
      <el-col :span="1" class="flex home">
            <span class="clickable">MY WEBSITE</span>
      </el-col>
      <el-col :span="1" class="flex btn">
            <span class="clickable">项目</span>
      </el-col>
      <el-col :span="1" class="flex btn">
            <span class="clickable">简历</span>
      </el-col>
      <el-col :span="20">

      </el-col>
      <el-col :span="1">
          <!-- 登录头像 -->
      </el-col>
  </el-row>
</template>

<script>
export default {

}
</script>
<style>
.clickable{
font-weight: 600;
font-size: 14px;
}
.clickable:hover{
    color:rgba(255, 255, 255, 0.685);
    cursor: pointer;
}
</style>
<style scoped>
.banner{
    height:100%;
}
.home{
    margin:0 15px;
}
.flex{
    color:white;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
}
.btn{
    margin:0 10px !important;
}
</style>