import router from "./router"
import {getToken} from '@/utils/token'
import {getPageTitle} from '@/utils/common'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
    document.title = getPageTitle(to.meta.title)
    if (getToken()) {
        if (whiteList.indexOf(to.path) !== -1) {
            next('/')
        } else {
            next()
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
        }
    }
})
