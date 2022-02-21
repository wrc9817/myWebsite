<template>
    <el-row class="banner black">
        <el-col :span="4">

        </el-col>
        <el-col :span="16">
            <el-row class="inner">
                <el-col :span="4" class="left">
                    <div class="clickable home">My Website</div>
                </el-col>
                <el-col :span="14"></el-col>
                <el-col :span="2" class="flex">
                    <div class="clickable btn">Projects</div>
                </el-col>
                <el-col :span="2" class="flex">
                    <div class="clickable btn">Resume</div>
                </el-col>
                <el-col :span="2" class="flex">
                    <div class="clickable btn">Contact</div>
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
        font-size:24px ;
        font-weight: 600;
        font-family: headerFont;
        letter-spacing: -0.5px;
    }
    .btn{
        font-size:20px ;
        font-weight: 600;
        font-family: headerFont;
    }
</style>