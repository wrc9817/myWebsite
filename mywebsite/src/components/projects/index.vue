<template>
  <div class="main">
      <el-row>
            <el-col :span="12" :offset="6">
                <div class="title-wrapper">
                    <span class="title">Projects</span>
                    <span class="slogan">I'm a Web developer</span>
                </div>
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
        background: #F3EFE0;
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
        border-bottom: 1px solid lightgrey;
        padding-bottom: 3%;
    }
</style>