<template>
    <el-row class="banner white">
        <el-col :span="4">

        </el-col>
        <el-col :span="16">
            <el-row class="inner">
                <el-col :span="4" class="left">
                    <div class="clickable home hvr-bounce-in">My Website</div>
                </el-col>
                <el-col :span="16"></el-col>
                <!-- <el-col :span="2" class="flex">
                    <div class="clickable btn hvr-bounce-in">Projects</div>
                </el-col> -->
                <el-col :span="2" class="flex">
                    <div class="clickable btn hvr-bounce-in">Resume</div>
                </el-col>
                <el-col :span="2" class="flex">
                    <div class="clickable btn hvr-bounce-in">Contact</div>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="4">

        </el-col>
    </el-row>
</template>

<script>
    export default {

    }
</script>
<style>
    .clickable:hover {
        cursor: pointer;
    }
</style>
<style scoped>
    .banner {
        height: 100%;
        display:flex;
        align-items: flex-end;
        
    }


    .flex {
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
    .left{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: left;
    }
    .inner{
        align-items: center;
        padding:15px 0;
        border-bottom:1px solid lightgrey;
    }
    .home{
        font-size:22px ;
        font-family: englishFont;
        letter-spacing: -0.5px;
    }
    .btn{
        font-size:22px ;
        font-family: englishFont;
    }
</style>