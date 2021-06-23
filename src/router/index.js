import { createRouter, createWebHistory } from 'vue-router'
import top from '@/views/top'

const routes = [
  {
    path: '/',
    name: 'top',
    component: top,
  },
  {
    path: '/:notfind',
    redirect: '/', //重定向
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
