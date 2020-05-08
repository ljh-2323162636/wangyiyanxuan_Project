<template>
<div class="recommendContainer">
  <!-- 轮播 -->
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item><img src="https://yanxuan.nosdn.127.net/84d82137e854e58bf26791db3ba203b8.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></van-swipe-item>
			<van-swipe-item><img src="http://yanxuan-miaobi.nos-jd.163yun.com/3988954_1_3_wap_ac032a0fccc1195727761846263f20ba.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></van-swipe-item>
			<van-swipe-item><img src="https://yanxuan.nosdn.127.net/b7f94a107096c60038eba24f542d62c5.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></van-swipe-item>
			<van-swipe-item><img src="https://yanxuan.nosdn.127.net/a16ac18c02bb26755dbcac1911631aa0.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></van-swipe-item>
			<van-swipe-item><img src="https://yanxuan.nosdn.127.net/7a64d2d49cdf598a486ddb1e6ff339ae.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></van-swipe-item>
			<van-swipe-item><img src="https://yanxuan.nosdn.127.net/0f00bf923cb91876dc9fbcc875148bbe.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></van-swipe-item>
			<van-swipe-item><img src="http://yanxuan-miaobi.nos-jd.163yun.com/3505026_1_1_wap_9944f32cae294bd124b5bd8ebf371fc4.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></van-swipe-item>
			<van-swipe-item><img src="https://yanxuan.nosdn.127.net/31b0c2a0424fe7b152950fa0ed53f8b6.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></van-swipe-item>
		</van-swipe>

  <!-- policyDescList  三个横向图标 -->
  <div class="policyDescList">
    <div class="policyItem" v-for="(item, index) in indexData.policyDescList" :key='index'>
      <img :src="item.icon" mode=""/>
      <span>{{item.desc}}</span>
    </div>
	</div>
  <!-- kingkongList 10个图标区域 -->
  <div class="kingkongList" v-if="indexData.kingKongModule">
    <div class="kingkongItem" v-for="(item) in indexData.kingKongModule.kingKongList" :key='item.L1Id' >
      <img :src="item.picUrl" mode=""/>
      <span>{{item.text}}</span>
    </div>
  </div>
  <div class="photo">
    <img src="https://yanxuan.nosdn.127.net/7db5ad89be165b82b6a3e261029d0122.gif?imageView&quality=75" alt="">
  </div>
  <div class="newPerson">
    <div class="moduleTitle">
      <span class="txt">新人专享礼</span>
    </div>
    <div class="content">
      <div class="left">
        <div class="name">新人专享礼包</div>
        <div class="imgWrap">
          <img src="https://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
        </div>
      </div>
      <div class="right">
        <div class="module1">
          <div class="activityItem">
            <div class="picWrap">
              <img src="https://yanxuan-item.nosdn.127.net/08d501dfd5c598ad82862a83d6c47d9a.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              <div class="discount">
                <div class="line1">¥89</div>
                <div class="line2">¥99</div>
              </div>
            </div>
            <div class="cnt">
              <div class="title">福利社</div>
              <div class="subTitle">今日特价</div>
            </div>
          </div>
        </div>
        <div class="module2">
          <div class="activityItem">
            <div class="picWrap">
              <img src="https://yanxuan-item.nosdn.127.net/431a09a43914483f4d70aeda8ecb8a59.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              <div class="discount">
                <div class="line1">¥9.9</div>
                <div class="line2">¥16.9</div>
              </div>
            </div>
            <div class="cnt">
              <div class="title">新人拼团</div>
              <div class="subTitle">1元起包邮</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
  export default {
    props:['indexData']
  }
</script>

<style lang="stylus" scoped>
.recommendContainer
  .my-swipe 
    width 100%
    height 296px
    .van-swipe-item 
      position relative
      width 750px
      color #fff
      font-size 20px
      line-height 296px
      text-align center
      background-color #39a9ed
      img 
        width 750px
        height 296px
        position absolute
        left 0
        top 0
    .van-swipe__indicator
      width 40px
      height 4px
  .policyDescList
    display flex
    width 690px
    height 72px
    padding 0 30px
    .policyItem
      line-height 72px
      text-align center
      flex 1
      img
        width 32px
        height 32px
        vertical-align middle
        margin-right 6px
      span
        font-size 24px
        vertical-align middle
  .kingkongList
    display flex
    flex-wrap wrap
    margin 20px 0
    .kingkongItem
      width 20%
      display flex
      flex-direction column
      align-items center
      img 
        display block
        width 110px
        height 110px
      span 
        font-size 24px
        margin-top 10px
        line-height 50px
  .photo
    width 100%
    height 240px
    img 
      display block
      width 100%
      height 100%
  .newPerson
    background-color #fff
    width 100%
    height 558px
    .moduleTitle
      width 100%
      height 90px
      margin-top 40px
      .txt
        position relative
        color #333
        font-size 32px
        &:before
          display block
          width 24px
          height 3px
          content ''
          position absolute
          left -40px
          top 50%
          background #333
        &:after
          display block
          width 24px
          height 3px
          content ''
          position absolute
          right -40px
          top 50%
          background #333
    .content
      padding 0 30px
      display flex
      justify-content space-around
      .left
        background-color #F9E9CF
        display block
        width 342px
        height 434px
        border-radius 4px
        margin-right 4px
        .name
          font-size 32px
          color #333
          padding 30px 0 0 30px
        .imgWrap
          margin 30px auto
          width 258px
          height 257px
          img 
            display block
            width 100%
            height 100%
      .right
        width 342px
        height 437px
        .module1
          background #FBE2D3
          border-radius 4px
          width 342px
          height 215px
          .activityItem
            .picWrap
              position relative
              img 
                position absolute
                top 0px
                right 0px
                display block
                overflow hidden
                width 200px
                height 200px
              .discount
                position absolute
                right 30px
                top 0
                background-color #F59524
                border-radius 50%
                width 80px
                height 80px
                color #fff
                padding-top 10px
                box-sizing border-box
            .cnt
              position relative
              left -100px
              top 20px
              .title
                font-size 32px
              .subTitle
                font-size 24px
        .module2
          background #FFECC2
          border-radius 4px
          width 342px
          height 215px
          margin-top 4px
          .activityItem
            .picWrap
              position relative
              img 
                position absolute
                top 0px
                right 0px
                display block
                overflow hidden
                width 200px
                height 200px
              .discount
                position absolute
                right 30px
                top 0
                background-color #F59524
                border-radius 50%
                width 80px
                height 80px
                color #fff
                padding-top 10px
                box-sizing border-box
            .cnt
              position relative
              left -100px
              top 20px
              .title
                font-size 32px
              .subTitle
                display inline
                background-color #CBB693
                font-size 24px
                color #fff
                margin-top 10px
              


</style>