import { Router } from './router.js'
import { Page } from './validatePage.js'

const router = new Router()
router.add('/', '/pages/home_universe.html')
router.add('/universe', '/pages/about_universe.html')
router.add('/exploration', '/pages/exploration_universe.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

const page = Page()
page.validatePage()
