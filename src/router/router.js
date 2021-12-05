import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

// create router
const router = createRouter({
    history: createWebHistory(),
    routes
})

// use guard
router.beforeEach(() => {
    // scroll to top because we went to new page
    scrollTo({
        top: 0,
        behavior: 'smooth'
    })

    return true
})

export default router