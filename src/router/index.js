import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '../routes/routes'
Vue.use(VueRouter)

// 1. 生成路由器, 管理路由
const router = new VueRouter({
  mode: 'history', 
  routes
})
export default router