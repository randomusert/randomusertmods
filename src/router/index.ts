import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import ModListComponent from '@/components/ModListComponent.vue'

const routes = [
    {path: '/', component: ModListComponent }
]

const router = createRouter({
    history: createWebHashHistory("/"),
    routes
})

export default router