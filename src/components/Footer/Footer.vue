<template>
  <div class="tabBar-wrap">
    <nav class="m-tabBar">
      <div class="item">
        <i class="tabBar-index"></i>
        <span class="txt">首页</span>
      </div>
      <div class="item">
        <i class="tabBar-cateList"></i>
        <span class="txt">分类</span>
      </div>
      <div class="item">
        <i class="tabBar-buy"></i>
        <span class="txt">值得买</span>
      </div>
      <div class="item">
        <i class="tabBar-cart"></i>
        <span class="txt">购物车</span>
      </div>
      <div class="item">
        <i class="tabBar-personal"></i>
        <span class="txt">个人</span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
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
        background-position 0px -150px
        &.active
         background-position 0px -100px
      .tabBar-buy
        background-image url('./images/tabBar.png')
        background-position 3px -350px
        margin-left 10px
        &.active
         background-position 3px -300px
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