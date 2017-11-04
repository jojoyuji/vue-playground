import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import Login from '@/components/pages/Login';
import Surveys from '@/components/pages/Surveys';
import localStorage from '@/store/localStorage';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {noAuth: true}
      },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/surveys',
      name: 'Surveys',
      component: Surveys,
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (!to.matched.some(record => record.meta.noAuth)) {
    if (!localStorage.get('authToken')) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
