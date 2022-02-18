import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Resume from '../views/resume/index.vue'
import {
  MY_ROUTES,
  MY_ROUTE_NAMES
} from './routes/index'
const routes = [
  {
    path: '/',
    name: MY_ROUTE_NAMES.HOME,
    redirect:MY_ROUTES.RESUME,
    component: HomeView,
    children:[{
      path:MY_ROUTES.RESUME,
      component:Resume,
    }]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export function setupRouter(app){
  app.use(router)
}
export default router
