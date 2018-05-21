<template>
    <div class="layout">
        <div class="layout-header">
            网页公共头部
        </div>
        <div class="layout-content">
            <!-- <keep-alive> -->
            <router-view></router-view>
            <!-- </keep-alive> -->
        </div>
        <div class="layout-footer">
            网页公共尾部
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>
<style lang="less" scoped>
    @import url("./styles/layout");
</style>