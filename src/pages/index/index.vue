<template>
  <div id="indexContainer">
		<div class="container">
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
				<ul class="content" v-if="indexData.kingKongModule" ref="list">
					<li :class="{active: navIndex === 0}" @click="changeNavIndex(0,0)">推荐</li>
					<li 
					v-for="(item,index) in indexData.kingKongModule.kingKongList " 
					:key="index"
					:class="{active: navIndex === index + 1}"
					@click="changeNavIndex((index + 1))"
					>
					{{item.text}}
					</li>
					<div class="taggle">
						<div class="icon"></div>
					</div>
				</ul>
			</div>
		</div>
		<!-- 轮播 -->
		<Recommend :indexData='indexData' style="margin-top='168px'"/>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import http from '../../http/index'
import Recommend from 'components/Recommend/Recommend'
  export default {
    data(){
			return{
				indexData:{},
				navIndex: 0,
			}
		},
		async mounted(){
			this.indexData = await http.index.getindexData()
			this.$nextTick(()=>{
				this.scrollObj=new BScroll(this.$refs.wrapper,{scrollX:true,click:true})
      })
		},
		components:{
			"Recommend":Recommend
		},
		methods:{
			changeNavIndex(navIndex,navId){
				this.navIndex = navIndex
				// console.log(document.querySelector(`.content >li:nth-of-type(${navIndex+1})`))
				this.scrollObj.scrollToElement(`.content >li:nth-of-type(${navIndex+1})`,300)
			}
		},
		computed:{
			
		}
  }
</script>

<style lang="stylus" scoped>
#indexContainer
	width 100%
	.container
		width 100%
		position fixed
		top 0
		left 0
		z-index 9
		background-color #fff
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
			width 100%
			overflow hidden
			.content
				display inline-flex
				li
					position relative
					white-space nowrap
					font-size 28px
					color #333
					padding 0 16px
					height 60px
					line-height 60px
					&.active
						&::after
							content ''
							position absolute
							left 0
							bottom 0
							width 100%
							height 4px
							background-color #DD1A21
</style>