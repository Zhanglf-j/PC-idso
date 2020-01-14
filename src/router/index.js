import Vue from 'vue'
import Router from 'vue-router'
import workbenches from '@/components/workbenches' // 工作台
import outpatient from '@/components/outpatient' // 门诊工作
import reception from '@/components/reception' // 接诊系统
import login from '@/components/login'
import home from '@/components/home'

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
        }
      ]
    }
  ]
})
