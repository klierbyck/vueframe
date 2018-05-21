import Vue from 'vue';
import Router from 'vue-router';
import layout from '@/views/layout/Layout.vue';
import auth from '@/libs/auth.js'

Vue.use(Router);

export const appRouter = [{
    path: '/login',
    component: resolve => {
        require(['@/views/login/Login.vue'], resolve);
    }
},
{
    path: '/cp',
    component: layout,
    children: [{
        path: '',
        component: resolve => {
            require(['@/views/example/ExampleList.vue'], resolve);
        }
    },
    {
        path: ':id',
        component: resolve => {
            require(['@/views/example/ExampleDetail.vue'], resolve);
        }
    }]
},
{
    path: '/error',
    component: layout,
    children: [{
        path: '',
        component: resolve => {
            require(['@/views/error/Error.vue'], resolve);
        }
    }]
}
]

let route = new Router({
    mode: 'history',
    routes: appRouter
});

route.beforeEach((to, from, next) => {
    if (to.path !== '/login' && !auth.isLogin()) {
        next('/login');
    } else {
        next();
    }
});

export default route;