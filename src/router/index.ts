import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CategoryView from '@/views/CategoryView.vue'
import ArticleView from '@/views/ArticleView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/category/:slug',
      name: 'category',
      component: CategoryView
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticleView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
