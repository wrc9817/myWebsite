<template>
    <div class="main">
        <el-row>
            <el-col :span="12" :offset="6">
                <div class="title-wrapper"><span class="title">Experience</span><span class="slogan">where I learn
                        things from</span></div>
            </el-col>
        </el-row>
        <el-row class="body">
            <el-col :span="12" :offset="6">
                <el-row>
                    <el-col :span="24">
                        <div class="title-wrapper"><span class="title">Education</span></div>
                    </el-col>
                </el-row>
                <el-row class="row">
                    <el-col :span="10">
                        <div class="school-wrapper">
                            <div class="school">University of Melbourne</div>
                            <div class="period">2022.03 - 2023.12</div>
                        </div>
                    </el-col>
                    <el-col :span="14">
                        <div class="detail-wrapper">
                            <div class="major">Master - Cybersecurity</div>
                            <div class="award">
                                <div>TBA</div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="row">
                    <el-col :span="10">
                        <div class="school-wrapper">
                            <div class="school">University of British Columbia</div>
                            <div class="period">2017.09 - 2021.12</div>
                        </div>
                    </el-col>
                    <el-col :span="14">
                        <div class="detail-wrapper">
                            <div class="major">Undergraduate - Computer Science</div>
                            <div class="award">
                                <div>Vice president's scholarship</div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="row">
                    <el-col :span="10">
                        <div class="school-wrapper">
                            <div class="school">Wuhan No.2 high school</div>
                            <div class="period">2014.09 - 2017.06</div>
                        </div>
                    </el-col>
                    <el-col :span="14">
                        <div class="detail-wrapper">
                            <div class="major">International department - St. Mary high school
                            </div>
                            <div class="award">
                                <div>TBA</div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <div class="title-wrapper"><span class="title">Career</span></div>
                    </el-col>
                </el-row>
                <el-row class="row">
                    <el-col :span="10">
                        <div class="school-wrapper">
                            <div class="school">武汉众娱信息技术有限公司</div>
                            <div class="period">2021.09 - 至今</div>
                        </div>
                    </el-col>
                    <el-col :span="14">
                        <div class="detail-wrapper">
                            <div class="major">实习 - 前端可视化工程师</div>
                            <div class="award">
                                <div>TBA</div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {}
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

    .body .title-wrapper {
        padding: 3.5% 0;
        text-align: left;
        border: none;

    }

    .body .title-wrapper .title {
        font-size: 28px;
    }

    .school-wrapper {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 18px;
        text-align: left;
    }

    .school-wrapper .school {
        font-weight: bold;
    }

    .school-wrapper .period {
        font-size: 17px;
        color: grey;
        padding: 3% 0;
    }

    .detail-wrapper {
        font-size: 17px;

        text-align: left;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    }

    .detail-wrapper .major {

        font-weight: bold;

    }
    .detail-wrapper .award{
         color: grey;
        padding: 3% 0;
    }
    .row{
        margin-bottom:50px;
    }
</style>