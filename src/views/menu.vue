<template>
    <el-menu theme="dark" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">
            <router-link :to="{ name: 'home'} ">主页</router-link>
        </el-menu-item>
        <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">表格</el-menu-item>
            <el-menu-item index="2-2">表单</el-menu-item>
            <el-menu-item index="2-3">关于</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">
            <router-link :to="{ name: 'login'}">登录</router-link>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: 'my-menu',
    props: ['activeIndex'],
    data() {
        return {
            
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            if (key === '2-1') {
                this.$router.push('table');
            } else if (key === '2-2') {
                this.$router.push('form');
            } else if (key === '2-3') {
                this.$router.push('readme');
            }
            console.log(key, keyPath);
        }
    }
}
</script>