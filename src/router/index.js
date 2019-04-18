import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

export const appRouter = [{
        path: '*', //*号表示匹配任意内容
        title: '404',
        component: resolve => {
            require(['@/views/error/error.vue'], resolve);
        }
    },
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: resolve => {
            require(['@/views/home/home.vue'], resolve);
        }
    }
]

let route = new Router({
    mode: 'history',
    routes: appRouter
});

/* route.beforeEach((to, from, next) => {
    if (to.path !== '/login' && !auth.isLogin()) {
        next('/login');
    } else {
        next();
    }
}); */

export default route;