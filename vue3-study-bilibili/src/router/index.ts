import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '../views/Home.vue';
import {routerConfig, IRouterConfigItem} from '@/common/routerConfig';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/demo',
      component: Home,
      children: routerConfig.map((config: IRouterConfigItem) => {
        return {
          path: config.routerName,
          component: config.component
        }
      })
    }
  ]
})

export default router