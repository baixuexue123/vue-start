import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Layout from '@/components/Layout/Layout';

Vue.use(Router);
NProgress.configure({ showSpinner: false })// NProgress Configuration

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'dashboard',
          meta: {
            title: '主页',
            requiredAuth: true,
            requiredPerms: [],
            activeName: '1'
          },
          component: () =>
            import('@/views/dashboard')
        }
      ]
    },

    {
      path: '/login',
      name: 'login',
      meta: {
        title: 'Login - 登录',
        requiredAuth: false,
        requiredSuperUser: false,
      },
      component: () => import('@/views/login/login')
    },

    {
      path: '/*',
      name: '404',
      meta: {
        title: '404-页面不存在',
        requiredAuth: false,
        requiredSuperUser: false,
      },
      component: () => import('@/views/404')
    },
    {
      path: '/403',
      name: '403',
      meta: {
        title: '403-权限不足',
        requiredAuth: false,
        requiredSuperUser: false,
      },
      component: () => import('@/views/403')
    },
    {
      path: '/500',
      name: '500',
      meta: {
        title: '500-服务端错误',
        requiredAuth: false,
        requiredSuperUser: false,
      },
      component: () => import('@/views/500')
    }
  ],
});

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  next();
  document.title = to.meta.title;
  window.activeName = to.meta.activeName;
});

router.afterEach((to) => {
  NProgress.done() // finish progress bar
  window.scrollTo(0, 0);
});

export default router;
