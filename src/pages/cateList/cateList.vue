<template>
  <div class="cateListContainer">
  <!-- 头部区域 -->
    <div class="header">
			<div class="searchInput">
				<i class="iconfont "></i>
        <span class="placeholder">搜索商品, 共26236款好物</span>
			</div>
		</div>
    
    <!-- 内容去 -->
    <div class="wrapper" >
      <!-- 左侧导航 -->
  		<div class="left" ref="left">
        <ul class="content" >
    		<li class="item" v-for="(item,index) in cateNavData.categoryL1List " :key="index">
          <span>{{item.name}}</span>
        </li>
  		</ul>
      </div>
      <!-- 右侧图片 -->
      <div class="right">

      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import http from '../../http/index'

export default {
  data(){
    return{
      cateNavData:{}
    }
  },
  async mounted(){
    this.$nextTick(()=>{
      new BScroll(this.$refs.left,{scrollY:true,click:true})
    })
    this.cateNavData = await http.index.getcateNavData()
  }
}
</script>

<style lang="stylus" scoped>
.cateListContainer
  font-size 28px
  color #666
  .header
    height 88px
    padding 0 30px
    .searchInput
      margin 20px 0
      position relative
      height 56px
      line-height 56px
      background-color #EDEDED
      .iconfont
        position absolute
        left 150px
        top 14px
        background-image url('./images/search.png')
        background-size cover
        display block
        width 28px
        height 28px
  .wrapper
    display flex
    height 1148px
    width 100%
    overflow scroll
    .left
      border 1px solid #eee 
      width 162px
      height 100%
      .content
        .item
          position relative
          width 100%
          height 50px
          text-align center
          boder none 
          font-size 28px
          margin 40px 0
          &.avtive:after
            content ''
            position absolute
            top 0
            left 0
            bottom 0
            width 6px
            height 50px
            background-color #ab2b2b
          span  
            color #ab2b2b
            line-height 50px
    .right
      padding 30px 30px 21px
      height 100%
      width 588px
      overflow hidden
</style>