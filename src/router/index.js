import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home.vue")
  },
  {
    path: '/about',
    name: 'About',
    component: () => import("../views/About.vue")
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import("../views/Service.vue")
  },
  {
    path: '/doctor',
    name: 'Doctor',
    component: () => import("../views/Doctor.vue")
  },
  {
    path: '/department',
    name: 'Department',
    component: () => import("../views/Department.vue")
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import("../views/Blog.vue")
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import("../views/Contact.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
