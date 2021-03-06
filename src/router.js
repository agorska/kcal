import Vue from 'vue';
import Router from 'vue-router';
import home from './views/Home.vue';
import mainPage from './views/MainPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
    }, {
      path: '/',
      name: 'main-page',
      component: mainPage,
    },
  ],
});
