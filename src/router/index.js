import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/basetable',
            component: resolve => require(['../views/BaseTable.vue'], resolve)
        },        
        {
            path: '/baseform',
            component: resolve => require(['../views/BaseForm.vue'], resolve)
        },        
        {
            path: '/readme',
            component: resolve => require(['../views/Readme.vue'], resolve),
            children:[
                {
                    path: '',
                    component: resolve => require(['../views/Readme.vue'], resolve)
                },
                {
                    path: 'basetable',
                    component: resolve => require(['../views/BaseTable.vue'], resolve)
                },
                {
                    path: 'baseform',
                    component: resolve => require(['../views/BaseForm.vue'], resolve)
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../views/Login.vue'], resolve)
        },
    ]
})
