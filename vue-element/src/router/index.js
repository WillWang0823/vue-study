import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        meta: { title: '登录' }
    },
    {
        path: '/',
        component: () => import('@/layout/index'),
        meta: { title: '首页' }
    }
]

const router = new Router({
    routes
})
export default router
