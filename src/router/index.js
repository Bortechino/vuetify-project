
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
/*import { routes } from 'vue-router/auto-routes'*/
import index from '@/pages/index.vue'
import About from '@/pages/About.vue'
import Contacts from '@/pages/Contacts.vue'
import WebProduct from '@/pages/WebProduct.vue'
import Services from '@/pages/Services.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'index',
    component: index,
  },
  {
    path: '/About',
    name: 'about',
    component: About,
  },
  {
    path: '/Contacts',
    name: 'contacts',
    component: Contacts,
  },
  {
    path: '/WebProduct',
    name: 'webProduct',
    component: WebProduct,
  },
  {
    path: '/Services',
    name: 'services',
    component: Services,
  },],
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})
export default router
/*export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});*/
