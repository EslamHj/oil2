import { createRouter, createWebHistory } from "vue-router";
import home from '../views/home.vue'
import home2 from '../views/home2.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home,
  },

  {
    path: '/home2',
    name: 'home2',
    component: home2,
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
