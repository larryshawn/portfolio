import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import EventListView from '../views/EventListView.vue'
import EventDetailsView from '../views/EventDetailsView.vue'
import EventCreateView from '@/views/EventCreateView.vue'
import TodoAppView from '@/views/TodoAppView.vue'
import CafeAppView from '@/views/CafeAppView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/events',
      name: 'events',
      component: EventListView
    },
    {
      path: '/event/:id',
      name: 'eventDetails',
      props: true,
      component: EventDetailsView
    },
    {
      path: '/event-create',
      name: 'eventCreate',
      component: EventCreateView
    },
    {
      path: '/todo-app',
      name: 'todoApp',
      component: TodoAppView
    },
    {
      path: '/cafe-app',
      name: 'cafeApp',
      component: CafeAppView
    },
    {
      path: '/new',
      name: 'newCafe',
      component: () => import('@/views/NewCafePage.vue')
    },
    {
      path: '/cafe/:id',
      name: 'editCafe',
      component: () => import('@/views/EditCafePage.vue')
    },
    {
      path: '/sign-in',
      name: 'signIn',
      component: () => import('@/views/SignInPage.vue')
    }
  ]
})

export default router
