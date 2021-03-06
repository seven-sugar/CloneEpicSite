import { createRouter, createWebHistory } from 'vue-router'
import home from '../pages/home.vue'
import IconTable from '../components/templates/IconTable.vue'

const routes = [
    {
        path: '/',
        component: home,
        meta: {
            title: 'Epic 游戏商城',
        }
    },
    {
        path: '/icon',
        component: IconTable,
        meta: {
            title: '图标',
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = 'Epic 游戏商城'
    }
    next()
})


export default router;