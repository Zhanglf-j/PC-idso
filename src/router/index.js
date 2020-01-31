import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import workbenches from '@/components/workbenches' // 工作台
import outpatient from '@/components/outpatient' // 早会看板
import reception from '@/components/reception' // 接诊系统
import signin from '@/components/signin' // 早会签到
import projectDetail from '@/components/projectDetail' // 早会签到

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/workbenches',
          name: 'workbenches',
          component: workbenches
        }, {
          path: '/outpatient',
          name: 'outpatient',
          component: outpatient
        }, {
          path: '/reception',
          name: 'reception',
          component: reception
        }, {
          path: '/signin',
          name: 'signin',
          component: signin
        }, {
          path: '/projectDetail',
          name: 'projectDetail',
          component: projectDetail
        }
      ]
    }
  ]
})
