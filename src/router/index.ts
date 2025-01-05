import { createRouter, createWebHistory } from 'vue-router'
import data from '../../public/atl.json'
import { compile } from 'vue'

const generateProjectRoutes = () => {
  const routes: Array<any> = []

  // Helper function to create URL-safe slugs
  const createUrlSlug = (text: string): string => {
    return encodeURIComponent(text)
      .toLowerCase()
      .replace(/%[0-9a-f]{2}/g, '-')
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
  }

  // Helper function to store original names for props while using safe URLs
  const createRouteEntry = (path: string, originalName: string, component: any, props: any) => {
    return {
      path,
      name: createUrlSlug(originalName), // Safe route name
      component,
      props: {
        ...props,
        originalName // Store the original name for display
      }
    }
  }

  Object.entries(data.projects).forEach(([category, categoryProjects]) => {
    // Add category route with safe URL
    const safeCategoryPath = createUrlSlug(category)
    routes.push(
      createRouteEntry(
        `/projects/${safeCategoryPath}`,
        `${category}-category`,
        () => import('../views/ProjectsView.vue'),
        { category }
      )
    )

    // Add individual project routes with safe URLs
    Object.entries(categoryProjects).forEach(([projectSlug, project]) => {
      const safeProjectSlug = createUrlSlug(projectSlug)
      routes.push(
        createRouteEntry(
          `/projects/${safeCategoryPath}/${safeProjectSlug}`,
          projectSlug,
          () => import('../views/ProjectPageView.vue'),
          {
            category,
            projectSlug,
            project
          }
        )
      )
    })
  })

  Object.entries(data.news).forEach(([title]) => {
    const safeTitlePath = createUrlSlug(title)
    routes.push(
      createRouteEntry(`/news/${safeTitlePath}`, title, () => import('../views/NewsPageView.vue'), {
        title
      })
    )
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
