// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import { routes } from './routes';
import VueTyperPlugin from 'vue-typer'
import VueScrollReveal from 'vue-scroll-reveal'
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueTippy, { TippyComponent } from "vue-tippy";

Vue.use(VueTippy);
Vue.use(VueRouter);
Vue.use(VueTyperPlugin)
Vue.use(VueScrollReveal)
AOS.init();

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes 
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
