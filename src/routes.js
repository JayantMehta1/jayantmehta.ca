import Home from './components/Home.vue'
import About from './components/about/About.vue'
import Resume from './components/resume/Resume.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/resume', component: Resume }
];