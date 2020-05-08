<template>
  <div id="indexContainer">
    <!-- 头部 -->
		<div class="header">
			<img class="logo" src="./images/logo.png" />
			<div class="searchInput">
				<i class="iconfont "></i>
				<input type="text" value="" placeholder="         搜索商品, 共26236款好物" placeholder-class="placeholder"/>
			</div>
			<div class="button">登录</div>
		</div>
		<!-- 导航区域 -->
		<div class="wrapper"  ref="wrapper">
  		<ul class="content" >
    		<li>推荐</li>
    		<li v-for="(item,index) in indexData.kingKongModule.kingKongList " :key="index">{{item.text}}</li>
				<div class="taggle">
					<div class="icon"></div>
				</div>
  		</ul>
		</div>
		<!-- 轮播 -->
		<Recommend :indexData='indexData'/>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import http from '../../http/index'
import Recommend from 'components/Recommend/Recommend'
  export default {
    data(){
			return{
				indexData:{}
			}
		},
		async mounted(){
			this.$nextTick(()=>{
				new BScroll(this.$refs.wrapper,{scrollX:true,click:true})
      })
			this.indexData = await http.index.getindexData()
		},
		components:{
			"Recommend":Recommend
		}
  }
</script>

<style lang="stylus" scoped>
#indexContainer
	.header 
		display flex
		height 88px
		width 100%
		padding 10px 0
		.logo 
			display block
			width 140px
			height 40px
			margin 10px 30px
		.searchInput
			position relative
			padding 0
			margin-top 5px
			width 442px
			height 56px
			.iconfont
				margin-left 20px
				position absolute
				left 0
				top 12px
				display block
				width 28px
				height 28px
				background-image url('./images/search.png')
				background-size cover
			input 
				width 100%
				height 100%
				line-height 56px
				background-color #ededed
		.button 
			width 74px
			height 40px
			line-height 40px
			text-align center
			color #DD1A21
			border 1px solid #DD1A21
			margin 10px 0 0 16px 
			font-size 24px
	
	.wrapper
		.content
			display inline-flex
			li
				white-space nowrap
				font-size 28px
				color #333
				padding 0 16px
				hiehgt 60px
				line-height 60px
				&.active
					color #DD1A21
	
	test
		font-size 0px
</style>