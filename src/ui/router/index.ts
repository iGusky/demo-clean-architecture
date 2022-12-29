import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useMatterStore } from '../../data/core/local/pinia/MatterStore'

const routes: RouteRecordRaw[] = []
const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const matterStore = useMatterStore()
  console.log(matterStore)
})
export default router