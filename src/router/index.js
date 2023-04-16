import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import Layout from '@/layout/layout.vue'

export const asyncRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        meta: { title: 'Dashboard'},
        children: [
          {
            path: '/dashboard',
            component: () => import('@/views/dashboard/index.vue'),
            name: 'Dashboard',
            meta: { title: 'Dashboard'}
          }
        ]
    },
    {
        path: '/renwu',
        component: Layout,
        redirect: '/renwu/list',
        meta: { title: '任务'},
        children: [
          {
            path: '/renwu/list',
            component: () => import('@/views/renwu/list.vue'),
            name: 'renwuList',
            meta: { title: '任务1'}
          },
          {
            path: '/renwu/piniaList',
            component: () => import('@/views/renwu/piniaList.vue'),
            name: 'piniaList',
            meta: { title: 'pinia'}
          }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(), // 带#的hash路由模式
    // history: createWebHistory(), //不带#的history路由模式
    routes: [
        ...asyncRoutes   
    ]
})

router.beforeEach((to,from, next)=>{
    next()
})

export default router