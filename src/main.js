import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import App from './App.vue'
import './style.css'
import Home from "./views/Home.vue"
import About from "./views/About.vue"
import Projects from "./views/Projects.vue"
import Blogs from "./views/Blogs.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/about', name: 'About', component: About},
        {path: '/projects', name: 'Projects', component: Projects},
        {path: '/blogs', name: 'Blogs', component: Blogs}
    ]
})
createApp(App)
.use(router)
.mount('#app')