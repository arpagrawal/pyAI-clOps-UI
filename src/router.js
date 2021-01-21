import Vue from 'vue';
import Router from 'vue-router';
import psaiDashboard from './components/psai-dashboard/psai-dashboard.vue';

const routes = [
  { path: '/', component: psaiDashboard },
];

Vue.use(Router);

const router = new Router({
  routes,
});

export default router;
