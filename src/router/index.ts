import { createRouter, createWebHistory } from 'vue-router'
import data from '../../public/atl.json'

const generateProjectRoutes = () => {
  const routes: Array<any> = []

  Object.entries(data.projects).forEach(([category, categoryProjects]) => {
    // Add category route
    routes.push({
      path: `/projects/${category}`,
      name: `${category}-category`,
      component: () => import('../views/ProjectsView.vue'),
      props: { category }
    })

    // Add individual project routes
    Object.entries(categoryProjects).forEach(([projectSlug, project]) => {
      routes.push({
        path: `/projects/${category}/${projectSlug}`,
        name: projectSlug,
        component: () => import('../views/ProjectPageView.vue'),
        props: {
          category,
          projectSlug,
          project
        }
      })
    })
  })

  return routes
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/awards',
      name: 'Awards',
      component: () => import('../views/AwardsView.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue')
    },
    // Add dynamic project routes
    ...generateProjectRoutes()
  ]
})

export default router
