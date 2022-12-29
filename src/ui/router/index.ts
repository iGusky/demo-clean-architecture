import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from '../../App.vue'
import About from '../../About.vue'
import Main from '../../Main.vue'


const routes: RouteRecordRaw[] = [
  { path: '/', component: Main },
  { path: '/about', component: About },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to)
  next()
})
export default router