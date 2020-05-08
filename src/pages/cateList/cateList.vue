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
  		<div class="left" >
        <ul class="content" >
          <li class="item" v-for="(item,index) in cateNavData.categoryL1List " :key="index" @click='changeCurrent(index)' :class='currentIndex===index?"active":""'>
            <span>{{item.name}}</span>
          </li>
  		  </ul>
      </div>
      <!-- 右侧图片 -->
      <div class="right" ref="right">
        <div class="subCateContainer">
          <div class="banner"><img src="https://yanxuan.nosdn.127.net/a41ddf5b8d7921d5d09987022dd71cac.jpg?quality=75&type=webp&imageView&thumbnail=0x196" alt=""></div>
          <div class="catelist" v-if='cateList.length>0'>
              <div class="cateItem" v-for="(cateItem,index) in cateList[currentIndex].categoryList?cateList[currentIndex].categoryList:cateList[currentIndex].subCateList" :key="index">
                <img :src="cateItem.bannerUrl?cateItem.bannerUrl:cateItem.wapBannerUrl" alt="">
                <span class="name">{{cateItem.name}}</span>
              </div>
          </div>
        </div>
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
      cateNavData:{},
      cateList:[],
      currentIndex:0
    }
  },
  async mounted(){
    this.$nextTick(()=>{
      new BScroll(this.$refs.right,{scrollY:true,click:true})
    })
    this.cateNavData = await http.index.getcateNavData()
    this.cateList = await http.index.getCateListData()
  },
  methods:{
    changeCurrent(index){
      this.currentIndex=index;
    }
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
          &.active
            &::after
              content ''
              position absolute
              top 0
              left 0
              width 6px
              height 50px
              background-color #ab2b2b
          span  
            line-height 50px
    .right
      padding 30px 30px 21px
      height 100%
      width 588px
      overflow hidden
      .subCateContainer
        .banner
          img 
            width 528px
            height 192px
        .catelist
          display flex
          flex-wrap wrap
          width 528px
          .cateItem
            width 144px
            height 216px
            margin-right 20px
            display flex
            flex-direction column
            align-items center
            &>img
              width 144px
              height 144px

</style>