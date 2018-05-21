<template>
    <div>
        <p class="data-list">数据列表页</p>
        <button @click="toDetail('10086')">点击跳转数据详情页10086</button>
        <button @click="toError">跳到错误页</button>
        <button @click="backPage">退出登录</button>
    </div>
</template>

<script>
    import auth from '@/libs/auth.js'
    export default {
        methods: {
            toDetail(id) {
                this.$router.push(`/cp/${id}`);
            },
            backPage() {
                this.$router.push('/login');
                auth.logout();
            },
            toError() {
                this.$router.push('/error');
            }
        }
    }
</script>

<style lang="less">
    @import url("./styles/example-list");
</style>