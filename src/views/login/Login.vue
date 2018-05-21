<template>
    <div>
        <p>登录页面</p>
        <button @click="login">点击登录</button>
    </div>
</template>

<script>
    import auth from '@/libs/auth.js'
    export default {
        methods: {
            login() {
                auth.login('张三', 'djha8544dsdass4d54hg41d');
                this.$router.push('/cp');
            }
        }
    }
</script>

<style lang="less">
    @import url("./styles/login");
</style>