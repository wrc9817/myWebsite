<template>
    <div class="main">
        <el-row :class="PROFILE_HEADER">
            <el-col :span="LAYOUT.SPAN" :offset="LAYOUT.OFFSET">
                <div class="title-wrapper">
                    <span class="title">Profile</span>
                    <span class="position">I'm a Web developer</span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="LAYOUT.SPAN" :offset="LAYOUT.OFFSET">
                <el-row class="detail-wrapper">
                    <el-col :span="8">
                        <div class="about-wrapper animate__delay-1s" :class="PROFILE_CONTENT">
                            <div class="title">About Me</div>
                            <div class="content">I am an allround web developer. I am a senior programmer with good
                                knowledge of front-end techniques. I love structure and order and I also stand for
                                quality. I love spending time on fixing little details and optimizing web apps. Also I
                                like working in a team, you'll learn faster and much more. As the saying goes: 'two
                                heads are better than one'.</div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="pic-wrapper">
                            <div class="pic">
                                <img src="@/assets/img/头像.png" />
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="personal-info-wrapper">
                            <div class="personal-info">
                                <div class="name animate__delay-1_5s" :class="PROFILE_CONTENT">
                                    <div class="label">Name:</div>
                                    <div class="value">Ruochan Wang</div>
                                </div>
                                <div class="age animate__delay-2s" :class="PROFILE_CONTENT">
                                    <div class="label">Age:</div>
                                    <div class="value">24</div>
                                </div>
                                <div class="address animate__delay-2_5s" :class="PROFILE_CONTENT">
                                    <div class="label">Address:</div>
                                    <div class="value">武汉市东西湖区金地格林春岸泽园</div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="quote-wrapper animate__delay-3s" :class="PROFILE_CONTENT">"Have A Great Day"</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {PROFILE_CONTENT,PROFILE_HEADER} from '../../constants/style/index'
import {LAYOUT} from '../../constants/layout/index'

    export default {
        data(){
            return{
                LAYOUT,PROFILE_CONTENT,PROFILE_HEADER
            }
        },
    }
</script>
<style>
.animate__delay-05s{
animation-delay: .5s;
}
.animate__delay-1s{
animation-delay: 1s;
}
.animate__delay-1_5s{
animation-delay: 1.5s;
}
.animate__delay-2_5s{
    animation-delay: 2.5s;

}
</style>
<style scoped>
    .main {
        padding: 2.5% 10%;
    }

    .title {
        font-weight: bold;
        display: block;
        font-size: 54px;
    }

    .position {
        display: block;
        padding: 15px 0;
        font-size: 21px;
    }

    .title-wrapper {
        font-family: englishFont;
        border-bottom: 1px solid lightgrey;
        padding-bottom: 3%;
    }

    .about-wrapper {
        font-family: englishFont;

    }

    .about-wrapper .title {
        font-size: 34px;
        padding: 5% 0;
    }

    .about-wrapper .content {
        font-size: 18px;
        
    }

    .pic-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pic {
        padding: 10%;
        border: 1px solid lightgrey;
        border-radius: 50%;
    }

    .personal-info-wrapper {
        width: 100%;
        height: 100%;
        font-family: englishFont;
        text-align: left;
    }

    .personal-info {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .personal-info .label {
        font-size: 24px;
        font-weight: 600;
    }

    .personal-info .value {
        font-size: 22px;
    }
    .personal-info .address .value{
        font-size: 16px;
    }
    .quote-wrapper {
        font-family: englishFont;
        font-size: 24px;
        letter-spacing: 5px;
        padding: 2% 0;
    }

</style>