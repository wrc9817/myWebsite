<template>
  <div class="main">
      <el-row>
            <el-col :span="12" :offset="6">
                <div class="title-wrapper">
                    <span class="title">Contact</span>
                    <span class="slogan">I'm a Web developer</span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12" :offset="6" class="body">
                <el-row>
                    <el-col :span="12">
                        <el-row class="flex">
                            <el-col :span="2">
                                <span class="iconfont icon">&#xe672;</span>
                            </el-col>
                            <el-col :span="21" :offset="1">
                                <div class="email">wrc9817@gmail.com</div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="12">
                        <el-row class="flex">
                            <el-col :span="2">
                                <span class="iconfont icon">&#xe96d;</span>
                            </el-col>
                            <el-col :span="21" :offset="1">
                                <div class="phone">131-6333-8455</div>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                
            </el-col>
        </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main {
        padding: 2.5% 10%;
        background: #434242;
        color:white;
    }

    .title {
        font-weight: bold;
        display: block;
        font-size: 54px;
    }

    .slogan {
        display: block;
        padding: 15px 0;
        font-size: 21px;
    }

    .title-wrapper {
        font-family: englishFont;
        border-bottom: 1px solid rgba(128, 128, 128, 0.6);
        padding-bottom: 3%;
    }
    .body{
        padding:2.5%;
        border-bottom: 1px solid rgba(128, 128, 128, 0.6);
    }
    .icon{
        font-size: 26px;
    }
    .flex{
        display:flex;
        align-items: center;
        padding:2% 0;
        opacity: 0.6;
    }
    .email{
        text-align: left;
    }
    .phone{
        text-align: left;
    }
</style>