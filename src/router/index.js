import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Prices from '../views/Prices.vue'
import Contact from '../views/Contact.vue'
import Concept from '../views/Concept.vue'
import Achievements from '../views/Achievements.vue'
import Saloon from '../views/Saloon.vue'
import WomanPrices from '../views/prices/Woman.vue'
import MenPrices from '../views/prices/Men.vue'
import KidPrices from '../views/prices/Kid.vue'
import carePrices from '../views/prices/Care.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'acceuil',
      component: Home
    },
    {
      path: '/prices',
      name: 'prices',
      component: Prices
    },
    {
      path:'/contact',
      name:'contact',
      component: Contact
    },
    {
      path: '/concept',
      name: 'concept',
      component: Concept
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: Achievements
    },
    {
      path: '/saloon',
      name: 'saloon',
      component: Saloon
    },
    {
      path: '/womanPrices',
      name: 'womanPrices',
      component: WomanPrices
    },
    {
      path: '/menPrices',
      name: 'menPrices',
      component: MenPrices
    },
    {
      path: '/kidPrices',
      name: 'kidPrices',
      component: KidPrices
    },
    {
      path: '/carePrices',
      name: 'carePrices',
      component: carePrices
    }
  ]
})

export default router
