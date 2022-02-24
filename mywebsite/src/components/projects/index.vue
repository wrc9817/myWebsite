<template>
  <div class="main">
      <el-row>
            <el-col :span="setUp.span" :offset="setUp.offset">
                <div class="title-wrapper" :class="animateHeader">
                    <span class="title">Projects</span>
                    <span class="slogan">I'm a Web developer</span>
                </div>
            </el-col>
        </el-row>
  </div>
</template>

<script>
export default {
computed:{
            setUp:function(){
                return this.$store.state.setUp.layout
            },
            animate:function(){
                return this.$store.state.projects.animateContent
            },
            animateHeader:function(){
                return this.$store.state.projects.animateHeader
            }
        },
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