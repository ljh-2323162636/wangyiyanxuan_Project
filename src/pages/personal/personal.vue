<template>
  <div class="container">
    <div class="header">
      <span class="icon-home icon-home iconfont" @click="goto('/index')"></span>
      <div class="right">
        <span class="home">网易严选</span>
        <span class="icon-search icon-search iconfont" @click="goto('/search')"></span>
        <span class="icon-cart icon-gouwuche1 iconfont" @click="goto('/cart')"></span>
      </div>
    </div>
    <div class="cont">
      <div class="logoWrap">
        <img src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
      </div>
    </div>
    <div class="phoneButton">
      <i class="iconfont icon-shouji button"></i>
      <span class="text">手机号快捷登录</span>
    </div>
    <div class="emailButton">
      <i class="iconfont icon-email button"></i>
      <span class="text">邮箱帐号登录</span>
    </div>
    <div class="thirdWrap">
      <div class="itemWrap">
        <i class="iconfont icon-weixin connect"></i>
        <span class="txt">微信</span>
      </div>
      <div class="itemWrap" style="border-left: 1px solid #979797;border-right: 1px solid #979797;">
        <i class="iconfont icon-qq connect"></i>
        <span class="txt">QQ</span>
      </div><div class="itemWrap">
        <i class="iconfont icon-weibo connect"></i>
        <span class="txt">微博</span>
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
.container  
  width 100%
  height 100%
  .header
    position relative
    line-height 88px
    padding 0 8px 0 12px
    height 88px
    width 100%
    background-color #fff
    box-sizing border-box
    border-bottom 1px solid rgba(3,3,3,.5)
    .iconfont
      display inline-block
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
      .icon-search
        width 64px
        height 64px
      .icon-cart
        width 64px
        height 64px
  .cont
    width 100%
    height 480px
    .logoWrap
      padding 160px 0 232px
      img 
        display inline-block
        width 268px
        height 90px
  .phoneButton
    width 670px
    height 94px
    line-height 94px
    background-color #DD1A21
    border 1px solid #DD1A21
    margin 0 auto 32px
    .icon-shouji
      color #fff
    .text
      color #fff
      font-size 14px
  .emailButton
    width 670px
    height 94px
    line-height 94px
    background-color #fff
    margin 0 auto 32px
    border 1px solid #DD1A21
    .icon-email
      color #DD1A21
    .text
      font-size 14px
      color #DD1A21
  .button
    display inline-block
    width 40px
    height 40px
    margin-right 16px
  .thirdWrap
    display flex
    width 100%
    height 40px
    margin-top 400px
    .itemWrap
      width 100%
      padding 0 40px
      .connect
        display inline-block
        width 40px
        height 40px
      .txt
        white-space nowrap
        display inline-block
        height 32px
        width 42px
        font-size 14px
        line-height 32px
        color #7F7F7F
        margin-left 5px
</style>