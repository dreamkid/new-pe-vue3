import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// import Home from '../views/home.vue'
import About from '../views/About.vue'
import Home from '../views/home/Home.vue'
import ActDetail from '../views/act/ActivityDetail.vue'
import Login from '../views/userCenter/Login.vue'

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/about', component: About },
    { path: '/home', component: Home },
    { path: '/actDetail', component: ActDetail },
    { path: '/login', component: Login },
]
const router = createRouter({
    history: createWebHistory(), //createWebHistory()
    routes
})

export default router