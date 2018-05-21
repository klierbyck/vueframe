<template>
    <div>
        <p>数据ID{{detailId}}</p>
        <button @click="backPage">返回上一页</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                detailId: ''
            }
        },
        created() {
            this.detailId = this.$route.params.id;
        },
        methods: {
            backPage() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="less">
    @import url("./styles/example-detail");
</style>