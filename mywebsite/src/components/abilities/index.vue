<template>
  <div class="main">
      <el-row>
            <el-col :span="setUp.span" :offset="setUp.offset">
                <div class="title-wrapper">
                    <span class="title">Abilities</span>
                    <span class="slogan">I'm a Web developer</span>
                </div>
            </el-col>
        </el-row>
        <el-row  class="body">
            <el-col :span="setUp.span" :offset="setUp.offset">
                <el-row>
                    <el-col :span="24">
                        <div class="title-wrapper"><span class="title">Skills</span></div>
                    </el-col>
                </el-row>
                <el-row class="skills" :gutter="20">
                    <el-col :span="12" v-for="item in skillList" :key="item.name">
                        <el-row>
                            <el-col :span="12" class="name-wrapper">
                                <div class="name">{{item.name}}</div>
                            </el-col>
                            <el-col :span="12">
                                <div class="value">
                                    <el-rate 
                                        v-model="item.value" 
                                        disabled
                                        :colors="{3:'#99A9BF',4:'#F7BA2A',5:'#FF9900'}"
                                        :texts="['未学习', '学习中', '了解 ', '熟练', '精通']"
                                        show-text
                                    ></el-rate>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <div class="title-wrapper"><span class="title">Tools</span></div>
                    </el-col>
                </el-row>
                <el-row class="tools" :gutter="20">
                    <el-col :span="12" v-for="item in toolList" :key="item.name">
                        <el-row>
                            <el-col :span="12" class="name-wrapper">
                                <div class="name">{{item.name}}</div>
                            </el-col>
                            <el-col :span="12">
                                <div class="value">
                                    <el-rate 
                                        v-model="item.value" 
                                        disabled
                                        :colors="{3:'#99A9BF',4:'#F7BA2A',5:'#FF9900'}"
                                        :texts="['未学习', '学习中', '了解 ', '熟练', '精通']"
                                        show-text
                                    ></el-rate>
                                </div>
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
    computed:{
            setUp:function(){
                return this.$store.state.setUp
            }
        },
    data(){
        return{
            skillList:[
            {
                name:'Javascript',
                value:4
            },
            {
                name:'SQL',
                value:3
            },
            {
                name:'Java',
                value:3
            },
            {
                name:'PHP',
                value:3
            },
            {
                name:'Vue',
                value:4
            },
            {
                name:'React',
                value:3
            },

            ],
            toolList:[
            {
                name:'Excel',
                value:3
            },
            {
                name:'Git/Github',
                value:4
            },
            {
                name:'Vscode',
                value:4
            },
            {
                name:'Android Studio',
                value:3
            },
            ]
        }
    }
}
</script>

<style scoped>
.main {
        padding: 2.5% 10%;
        background: white;
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
    .body{
        padding-bottom:5%;
    }
    .body .title-wrapper {
        padding: 6% 0 2% 0;
        text-align: left;
        border: none;

    }

    .body .title-wrapper .title {
        font-size: 28px;
    }
    .skills{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        border-bottom:1px solid lightgrey;
        padding-bottom:6%;
    }
    .skills .name{
        text-align: left;
        font-size: 16px;
    }
    .skills .name-wrapper{
        display:flex;
        align-items: center;
    }
    .skills .value{
        text-align: right;
    }
    .tools{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .tools .name{
        text-align: left;
        font-size: 16px;
    }
    .tools .name-wrapper{
        display:flex;
        align-items: center;
    }
    .tools .value{
        text-align: right;
    }
</style>