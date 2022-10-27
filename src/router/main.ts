import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    // redirect: '/main/example/second'
    redirect: '/login'
  },
  {
    path: '/regis',
    name: 'regis',
    component: () => import('@/views/regis/regis.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/admin/admin.vue'),
    children: [
      {
        path: '/admin/example/examine',
        name: 'examine',
        component: function () {
          return import('../views/admin/example/examine.vue')
        }
      },
      {
        path: '/admin/example/modif',
        name: 'admin-modif',
        component: function () {
          return import('../views/admin/example/modif.vue')
        }
      },
      {
        path: '/admin/example/details',
        name: 'details',
        component: function () {
          return import('../views/admin/example/details.vue')
        }
      }
    ]
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main/main.vue'),
    children: [
      {
        path: '/main/example/second',
        name: 'second',
        component: function () {
          return import('../views/main/example/second.vue')
        }
      },
      {
        path: '/main/example/thirdly',
        name: 'thirdly',
        component: function () {
          return import('../views/main/example/thirdly.vue')
        }
      },
      {
        path: '/main/example/fourthly',
        name: 'fourthly',
        component: function () {
          return import('../views/main/example/fourthly.vue')
        }
      },
      {
        path: '/main/example/mess',
        name: 'mess',
        component: function () {
          return import('../views/main/example/mess.vue')
        }
      },
      {
        path: '/main/example/modif',
        name: 'modif',
        component: function () {
          return import('../views/main/example/modif.vue')
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/main/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
