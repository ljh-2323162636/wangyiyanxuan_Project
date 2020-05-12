<template>
  <div class="cartContainer">
    <div class="wrap">
      <div class="cartHd">
        <div class="title">购物车</div>
        <div class="right">领券</div>
    </div>
    </div>
    <div class="header">
      <ul>
        <li>30天无忧退货</li>
        <li>48小时快速退货</li>
        <li>满99元免邮费</li>
      </ul>
    </div>
    <div class="contentContainer">
      <div class="defaultPage">
        <img class="img" src="./images/cart.png" mode=""></img>
        <div class="txt">
          <button>登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMeta from 'vue-meta'
Vue.use(VueMeta)
  export default {
    data() {
			return {
				userInfo: {}
			}
    },
    methods:{
      
    },
    metaInfo: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=0.5,minimum-scale=0.5,maximum-scale=0.5,user-scalable=no' }
      ]
    }
  }
</script>

<style lang="stylus" scoped>
.cartContainer
  width 100%
  height 100%
  overflow hidden
  .wrap
    width 100%
    height 100$
    .cartHd
      position relative
      padding 0 30px
      height 87px
      box-sizing border-box
      .title
        position absolute
        left 30px
        top 0
        width 108px
        height 87px
        line-height 87px
        font-size 36px
      .right
        position absolute
        right 30px
        top 0
        width 90px
        height 87px
        line-height 87px
        color #DD1A21
        font-size 30px 
  .header
    width 100%
    height 70px
    background-color #eee
    line-height 70px
    ul
      display flex
      padding 0 30px
      width 100%
      height 100%
      li 
        flex 1
        white-space nowrap
        font-size 24px
        color #666
        width 170px
  .contentContainer
    width 100%
    height 100%
    background-color #f4f4f4
    .defaultPage
      width 100%
      height 100%
      .img
        display block
        width 248px
        height 248px
        margin 0 auto 8px
        padding-top 350px
      .txt
        width 100%
        height 92px
        button 
          margin auto
          width 480px
          height 92px
          font-size 30px
          background-color #DD1A21
          color #fff
          margin 0 135px
</style>