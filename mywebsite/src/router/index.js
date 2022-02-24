import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'
import {
  MY_ROUTES,
  MY_ROUTE_NAMES
} from './routes/index'
const routes = [
  {
    path:'/',
    redirect:MY_ROUTES.HOME
  },
  {
    name: MY_ROUTE_NAMES.HOME,
    path:MY_ROUTES.HOME,
    component: Home,

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
