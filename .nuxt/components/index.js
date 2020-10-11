export { default as Slogan } from '../../components/Slogan.vue'

export const LazySlogan = import('../../components/Slogan.vue' /* webpackChunkName: "components/Slogan" */).then(c => c.default || c)
