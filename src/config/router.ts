import { createRouter, createWebHistory } from 'vue-router'
export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', name: 'home', component: () => import('@/pages/Home/index.vue') },
    { path: '/catalog', name: 'catalog', component: () => import('@/pages/Catalog/index.vue') },
    { path: '/catalog/:id(\\d+)', name: 'product', component: () => import('@/pages/Product/index.vue'), props: true },
    { path: '/favorites', name: 'favorites', component: () => import('@/pages/Favorites/index.vue') },
    { path: '/cart', name: 'cart', component: () => import('@/pages/Cart/index.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})
