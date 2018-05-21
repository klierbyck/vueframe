<template>
    <div class="error">
        <div class="error-body-con">
            <Card>
                <img src="../../assets/no_auth.jpg" alt="">
                <p class="error-body-con-message">Sorry，没有找到您需要的页面！</p>
                <div class="error-btn-con">
                    <button @click="backPage">返回上一页</button>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            backPage() {
                this.$router.go(-1);
            }
        }
    };
</script>
<style lang="less">
    @import url("./styles/error");
</style>