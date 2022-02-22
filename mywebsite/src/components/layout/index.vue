<template>
        <el-container>
            <el-header height="96px" class="header">
                <Banner></Banner>
            </el-header>
            <el-main>
                <slot></slot>
            </el-main>
        </el-container>
</template>

<script>
    import Banner from '../banner/index.vue'

    export default {
        components: {
            Banner
        },
    }
</script>

<style scoped>

</style>