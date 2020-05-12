<template>
  <div class="tabBar-wrap">
    <nav class="m-tabBar">
      <div class="item" @click="goto('/index')" >
        <i class="tabBar-index" :class="{active:$route.path===`/index`}"></i>
        <span class="txt">首页</span>
      </div>
      <div class="item" @click="goto('/cateList')" >
        <i class="tabBar-cateList" :class="{active:$route.path===`/cateList`}"></i>
        <span class="txt">分类</span>
      </div>
      <div class="item" @click="goto('/buy')" >
        <i class="tabBar-buy" :class="{active:$route.path===`/buy`}"></i>
        <span class="txt">值得买</span>
      </div>
      <div class="item" @click="goto('/cart')" >
        <i class="tabBar-cart" :class="{active:$route.path===`/cart`}"></i>
        <span class="txt">购物车</span>
      </div>
      <div class="item" @click="goto('/personal')" >
        <i class="tabBar-personal" :class="{active:$route.path===`/personal`}"></i>
        <span class="txt">个人</span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name:"Footer",
  data(){
    return{
      
    }
  },
  methods:{
    goto(path){
      this.$router.replace(path)
    }
  }
};
</script>

<style lang="stylus" scoped>
.tabBar-wrap
  position fixed
  left: 0;
  bottom: 0
  width: 100%
  background: #fff
  .m-tabBar
    display flex
    justify-content: space-around;
    height 98px
    width 100%
    border-top: 1px solid #d9d9d9
    .item
      text-align: center
      i  
        display block
        margin-top 10px
        background-size cover
        width 40px
        height 40px 
      .tabBar-index
        background-image url('./images/tabBar.png')
        background-position 0px -250px
        &.active
         background-position 0px -200px
      .tabBar-cateList
        background-image url('./images/tabBar.png')
        background-position 0px -145px
        &.active
         background-position 0px -95px
      .tabBar-buy
        background-image url('./images/tabBar.png')
        background-position 0px -350px
        margin-left 10px
        &.active
         background-position 0px -302px
      .tabBar-cart
        background-image url('./images/tabBar.png')
        background-position 0px -50px
        margin-left 10px
        &.active
         background-position 0px 0px
      .tabBar-personal
        background-image url('./images/tabBar.png')
        background-position 0px -450px
        &.active
         background-position 0px -400px
      span 
        display: block;
        margin-top: 10px
        font-size: 24px
        color: #666
        line-height: 1
</style>