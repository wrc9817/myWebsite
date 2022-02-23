<template>
    <el-affix :offset="120" :position="'top'">
        <div class="main">
            <div class="item hvr-grow" v-for="item in hightlight" :key="item" :class="{isActive:item.active}"
                @click="handleClickToScroll(item.name)">
                <span>{{item.name}}</span>
            </div>
        </div>
    </el-affix>
</template>

<script>
    export default {
        data() {
            return {
                hightlight: []
            }
        },
        created() {
            this.init()
        },
        methods: {
            handleClickToScroll(name) {
                this.$store.commit('handleChangePage', name)
                for (var i in this.hightlight) {
                    if (this.hightlight[i].name == name) {
                        this.hightlight[i].active = true
                    } else {
                        this.hightlight[i].active = false
                    }
                }
            },
            init() {
                this.hightlight = [{
                        name: 'Profile',
                        active: true,
                    },
                    {
                        name: 'Experience',
                        active: false,
                    },
                    {
                        name: 'Abilities',
                        active: false,
                    },
                    {
                        name: 'Projects',
                        active: false,
                    },
                    {
                        name: 'Contact',
                        active: false,
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .main {
        width: 120px;
    }

    .item {
        display: block !important;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: bold;
        padding: 20% 0;
        background: #434242;
        color: white;
    }

    .item:hover {
        cursor: pointer;
    }

    .isActive {
        background: whitesmoke;
        color: #2c3e50;
    }
</style>