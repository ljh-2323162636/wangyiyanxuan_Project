import index from 'pages/index/index'
import cateList from 'pages/cateList/cateList'
import buy from 'pages/buy/buy'
import cart from 'pages/cart/cart'
import personal from 'pages/personal/personal'

export default [
  {
    path: '/index',
    component: index,
    meta:{showFooter:true}
  },
  {
    path: '/cateList',
    component: cateList,
    meta:{showFooter:true}
  },
  {
    path: '/buy',
    component: buy,
    meta:{showFooter:true}
  },
  {
    path: '/cart',
    component: cart,
    meta:{showFooter:true}
  },
  {
    path: '/personal',
    component: personal,
    meta:{showFooter:false}
  },
  {path:'/',redirect:'/buy'}
]