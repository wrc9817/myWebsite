<template>
  <div class="main">
      <el-row>
            <el-col :span="LAYOUT.SPAN" :offset="LAYOUT.OFFSET">
                <div class="title-wrapper" :class="PROJ_HEADER">
                    <span class="title">Projects</span>
                    <span class="slogan">I'm a Web developer</span>
                </div>
            </el-col>
        </el-row>
  </div>
</template>

<script>
import {PROJ_CONTENT,PROJ_HEADER} from '../../constants/style/index'
import {LAYOUT} from '../../constants/layout/index'

export default {
    data(){
        return{
            LAYOUT,PROJ_CONTENT,PROJ_HEADER
        }
    }
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