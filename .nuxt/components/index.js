export { default as Button } from '../../components/Button.vue'
export { default as SideBar } from '../../components/SideBar.vue'
export { default as Slogan } from '../../components/Slogan.vue'

export const LazyButton = import('../../components/Button.vue' /* webpackChunkName: "components/Button" */).then(c => c.default || c)
export const LazySideBar = import('../../components/SideBar.vue' /* webpackChunkName: "components/SideBar" */).then(c => c.default || c)
export const LazySlogan = import('../../components/Slogan.vue' /* webpackChunkName: "components/Slogan" */).then(c => c.default || c)
