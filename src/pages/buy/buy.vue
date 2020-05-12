<template>
  <div class="buycontainer">
    <div class="header">
      <span class="icon-home icon-home iconfont" @click="goto('/index')"></span>
      <div class="right">
        <span class="home">值得买</span>
        <span class="icon-search icon-search iconfont" @click="goto('/search')"></span>
        <span class="icon-cart icon-gouwuche1 iconfont" @click="goto('/cart')"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMeta from 'vue-meta'
Vue.use(VueMeta)
  export default {
    metaInfo: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' }
      ]
    },
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" scoped>
.buycontainer  
  width 100%
  height 100%
  .header
    position relative
    line-height 100px
    padding 0 26px 0 24px
    height 100px
    width 100%
    background-color #fff
    box-sizing border-box
    border-bottom 1px solid rgba(3,3,3,.5)
    .iconfont
      display inline-block
      font-size 44px
    .icon-home
      float left 
      width 48px
      height 44px
    .right
      float right
      .home
        position absolute
        left 50%
        top 0
        transform translateX(-48px)
        font-size 36px
      .icon-search
        width 62px
        height 100px
        font-size 60px
        margin-right 20px
      .icon-cart
        width 50px
        height 100px
</style>