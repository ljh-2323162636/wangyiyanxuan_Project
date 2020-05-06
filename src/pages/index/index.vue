<template>
  <div id="indexContainer">
    <!-- 头部 -->
		<div class="header">
			<image class="logo" src="/static/images/logo.png" mode=""></image>
			<div class="searchInput">
				<text class="iconfont icon-sousuo"></text>
				<input type="text" value="" placeholder="搜索商品, 共26236款好物" placeholder-class="placeholder"/>
			</div>
			<button>登录登录</button>
		</div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="stylus" scoped>
#indexContainer
	.header 
		display flex
		height 60px
		width 100%
		padding 10px 0
		.logo 
			width 140px
			height 40px
			margin 10px 30px
		.searchInput
			position relative
			height 60px
			width 420px
			background #ededed
			.iconfont 
				position absolute
				left 10px
				top 15px
				font-size 30px
			input
				width 370px
				margin-left 50px
				height 100%
				color #BB2C08
			.placeholder
				font-size 28px
				text-align center
				line-height 60px
		button
			font-size 24px
			width 144px
			height 60px
			margin 0 10px
			color #b4282d
			white-space nowrap
			overflow hidden
			text-overflow ellipsis
			padding 0 5px
</style>