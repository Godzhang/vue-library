export interface IRouterConfigItem {
  routerName: string;
  name: string;
  component: () => Promise<typeof import("*.vue")>;
};

export const routerConfig: IRouterConfigItem[] = [{
  routerName: 'demo',
  name: 'demo',
  component: () => import(/* webpackChunkName: "demo" */ '@/components/home/demo/Demo.vue')
},{
  routerName: 'lifecycle',
  name: 'lifecycle',
  component: () => import(/* webpackChunkName: "demo" */ '@/components/LifeCycle.vue')
}];
