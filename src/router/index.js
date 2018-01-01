import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            // redirect: '/home'
            redirect: {name: 'home'}
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/table',
            name: 'table',
            component: resolve => require(['@/views/BaseTable.vue'], resolve)
        },
        {
            path: '/form',
            name: 'form',
            component: resolve => require(['@/views/BaseForm.vue'], resolve)
        },
        {
            path: '/readme',
            component: resolve => require(['@/views/Readme.vue'], resolve),
            children:[
                {
                    path: '',
                    name: 'readme',
                    component: resolve => require(['@/views/Readme.vue'], resolve)
                },
                {
                    path: 'table',
                    component: resolve => require(['@/views/BaseTable.vue'], resolve)
                },
                {
                    path: 'form',
                    component: resolve => require(['@/views/BaseForm.vue'], resolve)
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: resolve => require(['@/views/Login.vue'], resolve)
        },
    ]
})
