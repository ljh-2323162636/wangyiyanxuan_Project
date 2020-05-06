import index from 'pages/index/index'
import cateList from 'pages/cateList/cateList'
import buy from 'pages/buy/buy'
import cart from 'pages/cart/cart'
import personal from 'pages/personal/personal'

export default [
  {
    path: '/index',
    component: index,
  },
  {
    path: '/cateList',
    component: cateList,
  },
  {
    path: '/buy',
    component: buy,
  },
  {
    path: '/cart',
    component: cart,
  },
  {
    path: '/personal',
    component: personal,
  },
  {path:'/',redirect:'/index'}
]