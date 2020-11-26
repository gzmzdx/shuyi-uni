<template>
	<view>
		<!-- 顶部部分 -->
		<view class="head">
			<view class="header-wrap">
				<navigator url="../personal/personal_home">
				<view class="index-header">
					<image class="address" src="../../static/images/back.png"></image>
					<view class="name">个人中心</view>
					<view class="map-wrap" @click="rightClick">
						<image class="iconfont" src="../../static/images/search_icon.png"></image>
					</view>
				</view>
				</navigator>
			</view>
			<view class="blank"></view>
		</view>
		<!-- 分割线br -->
		<view class="br"></view>
		<!-- 列表 -->
		<view class="lie">
			<navigator url="../personal/personal_home">
			<view class="neirou"> 
				<image class="img" src="../../static/images/userface.png"></image>
				<view class="tit">
					<view class="name1">伍辉</view>
					<view class="zhanghao">账号：www.wuhui2100.com</view>
				</view>
				<image class="img1" src="../../static/images/中心.向右箭头.icon.png"></image>
			</view>
			</navigator>
			
			<!-- 分割线br2 -->
			<view class="br2"></view>
			<navigator url="../personal/personal_home">
			<view class="class1">
				<image class="tupian" src="../../static/images/中心.主页.icon.png"></image>
				<view class="neirong">我的主页</view>
				<image class="img2" src="../../static/images/right_arrow.png"></image>
			</view>
			</navigator>
			<!-- 分割线br1 -->
			<view class="br1"></view>
			<navigator url="../personal/Mynotice">
			<view class="class1">
				<image class="tupian" src="../../static/images/信息-1.png"></image>
				<view class="neirong">通知信息</view>
				<image class="img2" src="../../static/images/right_arrow.png"></image> 
			</view>
			</navigator>
			<!-- 分割线br1 -->
			<view class="br1"></view>
			<navigator url="jszlist">
			<view class="class1">
				<image class="tupian" src="../../static/images/中心.借书卡.icon.png"></image>
				<view class="neirong">借书卡</view>
				<image class="img2" src="../../static/images/right_arrow.png"></image>
			</view>
			</navigator>
			<!-- 分割线br2 -->
			<view class="br2"></view>
			
			<navigator url="../allOrders/index">
				<view class="class1">
					<image class="tupian" src="../../static/images/我的预约-2.png"></image>
					<view class="neirong">我的预约</view>
					<image class="img2" src="../../static/images/right_arrow.png"></image>
				</view>
			</navigator>
			
			<!-- 分割线br1 -->
			<view class="br1"></view>
			<view class="class1">
				<image class="tupian" src="../../static/images/中心.阅读.icon.png"></image>
				<view class="neirong">正在阅读</view>
				<image class="img2" src="../../static/images/right_arrow.png"></image> 
			</view>
			<!-- 分割线br1 -->
			<view class="br1"></view>
			<navigator url="../return/return">
				<view class="class1">
					<image class="tupian" src="../../static/images/中心.还书.icon.png"></image>
					<view class="neirong">我要还书</view>
					<image class="img2" src="../../static/images/right_arrow.png"></image>
				</view>
			</navigator>
			
			<!-- 分割线br1 -->
			<view class="br1"></view>
			<view class="class1">
				<image class="tupian" src="../../static/images/中心.读书历史.icon.png"></image>
				<view class="neirong">读书历史</view>
				<image class="img2" src="../../static/images/right_arrow.png"></image>
			</view>
			<!-- 分割线br1 -->
			<view class="br1"></view>
			<navigator url="../borrow_and_return/borrow_and_return">
			<view class="class1">
				<image class="tupian" src="../../static/images/jiehuanjilu.png"></image>
				<view class="neirong">借还记录</view>
				<image class="img2" src="../../static/images/right_arrow.png"></image>
			</view>
			</navigator>
			<!-- 分割线br2 -->
			<view class="br2"></view>
			
			<view class="class1">
				<image class="tupian" src="../../static/images/中心.书评.icon.png"></image>
				<view class="neirong">我的书评</view>
				<image class="img2" src="../../static/images/right_arrow.png"></image>
			</view>
			<!-- 分割线br1 -->
			<view class="br1"></view>
			<navigator url="../mycollection/mycollection">
			<view class="class1">
				<image class="tupian" src="../../static/images/我的收藏.png"></image>
				<view class="neirong">我的收藏</view>
				<image class="img2" src="../../static/images/right_arrow.png"></image> 
			</view>
			</navigator>
			<!-- 分割线br1 -->
			<view class="br1"></view>
			<navigator url="mylibrary">
				<view class="class1">
					<image class="tupian" src="../../static/images/中心.个人图书馆.icon.png"></image>
					<view class="neirong">个人图书管</view>
					<image class="img2" src="../../static/images/right_arrow.png"></image>
				</view>
			</navigator>
			<!-- 分割线br1 -->
			<view class="br1"></view>
			<navigator url="../readCircle/readCircle">
				<view class="class1">
					<image class="tupian" src="../../static/images/圈子.png"></image>
					<view class="neirong">阅读圈子</view>
					<image class="img2" src="../../static/images/right_arrow.png"></image>
				</view>
			</navigator>
			<!-- 分割线br1 -->
			<view class="br1"></view>
			<navigator url="../index/MyExperience">
				<view class="class1">
					<image class="tupian" src="../../static/images/woyaofabu.png" ></image>
					<view class="neirong">我的心得</view>
					<image class="img2" src="../../static/images/right_arrow.png"></image>
				</view>
			</navigator>
			<!-- 分割线br2 -->
			<view class="br2"></view>
			
			<navigator url="../mineFriend/mineFriend">
				<view class="class1">
					<image class="tupianO" src="../../static/images/contacts_blue.png"></image>
					<view class="neirong">我的好友</view>
					<image class="img2" src="../../static/images/right_arrow.png"></image>
				</view>
			</navigator>
			<!-- 分割线br1 -->
			<view class="br1"></view>
			<view class="class1">
				<image class="tupian" src="../../static/images/我的关注.png"></image>
				<view class="neirong">我的关注</view>
				<image class="img2" src="../../static/images/right_arrow.png"></image> 
			</view>
			<!-- 分割线br1 -->
			<view class="br1"></view>
			<navigator url="../Setup/Setup">
			<view class="class1">
				<image class="tupian" src="../../static/images/中心.设置.icon.png"></image>
				<view class="neirong">系统设置</view>
				<image class="img2" src="../../static/images/right_arrow.png"></image>	
			</view>
			</navigator>
			<!-- 分割线br1 -->
			<view class="br1"></view>
			<view class="class1">
				<image class="tupian" src=""></image> 
				<view class="neirong">快捷登录绑定设置</view>
				<image class="img2" src="../../static/images/right_arrow.png"></image>
			</view>
			<!-- 分割线br1 -->
			<view class="br1"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	// 顶部页面
	$color-base: #fff;
	$words-color-base: #333333;
	$words-color-light: #999999;

	.header-wrap {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 999;

		.index-header {
			display: flex;
			height: 110rpx;
			line-height: 110rpx;
			padding: 0 30rpx;
			padding-top: 40rpx;
			background-color: $color-base;
			font-size: 28rpx;
			color: #fff;
			align-items: center;
			justify-content: space-between;

			.address {
				// margin-left: 50upx;
				width: 60rpx;
				height: 60rpx;
				font-size: 26rpx;
				margin-top: 20rpx;
			}

			.name {
				color: #3C3C3C;
				width: 100%;
				height: 60rpx;
				font-size: 40rpx;
				margin-top: -35rpx;
			}

			.map-wrap {
				.iconfont {
					margin-top: 50rpx;
					width: 60rpx;
					height: 60rpx;
					font-size: 32rpx;
					margin-right: 5rpx;
				}

				text {
					font-size: 26rpx;
				}
			}
		}
	}

	.blank {
		height: 126upx;
	}

	.br {
		margin-top: 30rpx;
		width: 100%;
		height: 15rpx;
		background-color: #F5F5F5;
	}
	/* 列表 */
	.lie{
		width: 100%;
		height: 250rpx;
	}
	.neirou{
		display: flex;
		width: 100%;
		height: 190rpx;
	}
	.img{
		margin-left: 30rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
	}
	.br1 {
		width: 100%;
		height: 3rpx;
		background-color: #F5F5F5;
	}
	.tit{
		margin-left: 30rpx;
		margin-top: 20rpx;
		padding-top: 20rpx;
		width: 63%;
		height: 150rpx;
		// background-color: red;
	}
	.name1{
		width: 100%;
		height: 60rpx;
		font-size: 40rpx;
	}
	.zhanghao{
		width: 100%;
		height: 80rpx;
		font-size: 28rpx;
	}
	.img1{
		width: 40rpx;
		height: 40rpx;
		margin-top: 60rpx;
	}
	.class1{
		display: flex;
		width: 100%;
		height: 80rpx;
	}
	.tupian{
		width: 60rpx;
		height: 60rpx; 
		margin-top: 10rpx;
		margin-left: 30rpx;
	}
	.tupianO{
		width: 55rpx;
		height: 50rpx; 
		margin-top: 10rpx;
		margin-left: 30rpx;
	}
	.neirong{
		width: 72%;
		height: 60rpx;
		margin-left: 40rpx;
		margin-top: 20rpx;
		// background-color: yellow;
	}
	
	.img2{
		width: 50rpx;
		height: 50rpx;
		margin-top: 15rpx;
	}
	.br2 {
		width: 100%;
		height: 30rpx;
		background-color: #F5F5F5;
	}
</style>
