<template>
	<view>
		<!-- 顶部部分 -->
		<view class="head">
			<view class="header-wrap">
				<view class="index-header" style="  background-color: #5E49F5; line-height: 45rpx;">
					<image class="address" src="../../static/images/back.png"></image>
					<view class="name2">个人空间</view>
				</view><!--  -->
				
				<view class="map-wrap" style="display: flex; margin-left: 330rpx;" @click="rightClick">
					<view class="bn1" style="background-color: #00BFFF; color: #F8F8F8">加好友</view>
					<view class="bn1" style="background-color: #4CD964; color: #F8F8F8">关注</view>
					<view class="bn1" style="background-color: #F3F3F3; color: #CCCCCC">发消息</view>
				</view>
			</view>
			<view class="blank"></view>
		</view>
		<!-- 分割线br -->
		<view class="br"></view>
		<!-- 列表 -->
		<view class="lie">
			<view class="neirou"> 
				<image class="img" src="../../static/images/4.jpg"></image>
				<view class="tit">
					<view class="name1">小明</view>
					<view class="zhanghao">count：22181099665</view>
				</view>
			</view>
			
			<!-- 分割线br1 -->
			<view class="br1"></view>
			<view class="class1">
				<image class="tupian" src="../../static/images/me_blue.png"></image>
				<view class="neirong">我的好友</view>
			</view>
			<!-- 分割线br1 -->
			<view class="br1"></view>
			
			<!-- <view class="br1"></view> -->
			<!-- <view class="class1">
				<image class="tupian" src="../../static/images/me_blue.png"></image>
				<view class="neirong">我的关注</view>
			</view> -->
			<!-- 分割线br1 -->
			<!-- <view class="br1"></view> -->
		</view>
		
		<view class="show">
			
				<view class="top">
					<view class="person">
						<view class="tou">
							<image class="image-bg" src="../../static/images/4.jpg" style="width: 100rpx;height: 100rpx;border-radius: 50%;"></image>
						</view>
						<view class="bn">
							<text class="name">小明</text>
						</view>
						<view class="tw">
							<view class="time">2020-08-09 14:10</view>
						</view>
					</view>
					<view class="zy">
						<view class="">添加好友是为了让读书笔记可以只公开给好友；添加好友可以为数据挖掘提供依据添加好友以后在创建个人图书馆时可以把好友加入到个人图书馆中。成功添加了某读者作为好友。
						</view>
					</view>
				</view>
				<view class="qt">
					<view class="dz">
						<image class="wave" src="../../static/images/点赞.png"></image>
						<text id="ct">1</text>
					</view>
					<!-- <view class="pl">
						<image class="wave" src="../../static/images/评论.png"></image>
						<text id="t">1</text>
					</view> -->
					<view class="zf">
						<image class="wave" src="../../static/images/转发-1.png"></image>
		
					</view>
				</view>
		</view>
		<!-- 分割线br1 -->
		<view class="br1" style="margin-top: 20rpx;"></view>
		
		<view class="show">
			
				<view class="top">
					<view class="person">
						<view class="tou">
							<image class="image-bg" src="../../static/images/4.jpg" style="width: 100rpx;height: 100rpx;border-radius: 50%;"></image>
						</view>
						<view class="bn">
							<text class="name">小明</text>
						</view>
						<view class="tw">
							<view class="time">2020-08-09 14:10</view>
						</view>
					</view>
					<view class="zy">
						<view class="">添加好友是为了让读书笔记可以只公开给好友；添加好友可以为数据挖掘提供依据添加好友以后在创建个人图书馆时可以把好友加入到个人图书馆中。成功添加了某读者作为好友。
						</view>
					</view>
				</view>
				<view class="qt">
					<view class="dz">
						<image class="wave" src="../../static/images/点赞.png"></image>
						<text id="ct">1</text>
					</view>
					<!-- <view class="pl">
						<image class="wave" src="../../static/images/评论.png"></image>
						<text id="t">1</text>
					</view> -->
					<view class="zf">
						<image class="wave" src="../../static/images/转发-1.png"></image>
		
					</view>
				</view>
		</view>
		<!-- 分割线br1 -->
		<view class="br1" style="margin-top: 20rpx;"></view>
	
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
		// display: flex;
		.index-header {
			display: flex;
			height: 100rpx;
			line-height: 100px;
			padding: 0 30rpx;
			padding-top: 40rpx;
			background-color: $color-base;
			font-size: 28rpx;
			color: #fff;
			align-items: center;
			justify-content: space-between;

			.address {
				// margin-left: 50upx;
				width: 70rpx;
				height: 60rpx;
				font-size: 26rpx;
				margin-top: -40rpx;
				line-height: 45rpx;
			}

			

			.map-wrap {
				.iconfont {
					margin-top: 50rpx;
					width: 60rpx;
					height: 40rpx;
					font-size: 32rpx;
					margin-right: 5rpx;
					color: #3C3C3C;
					width: 30rpx;
				}

				text {
					font-size: 26rpx;
				}
				display: flex;
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
		height: 5rpx;
		background-color: #F5F5F5;
	}
	.tit{
		margin-left: 30rpx;
		margin-top: 20rpx;
		padding-top: 20rpx;
		width: 70%;
		height: 150rpx;
	}
	.name1{
		width: 100%;
		height: 60rpx;
		font-size: 40rpx;
	}
	.name2 {
		color: #FFFFFF;
		width: 100%;
		height: 60rpx;
		font-size: 40rpx;
		margin-top: -35rpx;
	}
	
	.zhanghao{
		width: 100%;
		height: 80rpx;
		font-size: 28rpx;
	}
	.img1{
		width: 60rpx;
		height: 60rpx;
		margin-top: 60rpx;
	}
	.class1{
		display: flex;
		width: 100%;
		height: 70rpx;
	}
	.tupian{
		width: 50rpx;
		height: 50rpx; 
		margin-left: 30rpx;
		margin-top: 10rpx;
	}
	.neirong{
		width: 73%;
		height: 60rpx;
		margin-left: 20rpx;
		margin-top: 20rpx;
		font-size: 26rpx;
	}
	.img2{
		width: 60rpx;
		height: 60rpx;
		margin-top: 10rpx;
	}
	.br2 {
		width: 100%;
		height: 40rpx;
		background-color: #F5F5F5;
	}
	.bn1{
		font-size: 28rpx;
		margin-left: 30rpx;
		width: 100rpx;
		height: 45rpx;
		text-align: center;
		line-height: center;
		margin-top: 20rpx;
		border-radius: 10rpx;
		// box-shadow: @at-root ;
		// padding-left: 100rpx;
		border: 1rpx solid #CCCCCC ;
	}
	/* 动态 */
	
	.show{
		margin-top: 55rpx;
		width: 95%;
		align-items: center;
		text-align: left;
		margin-left: 20rpx;
	}
	.person {
		line-height: 20rpx;
		display: flex;
		margin-right: 100rpx;
	}
	.bn {
		height: 100%;
		margin-top: 55rpx;
		// width: 90%;
	
	}
	.name {
		font-size: 28rpx;
		margin: 20rpx;
		top: 100rpx;
		/* margin-top: 20rpx; */
	
	}
	.tw {
		margin-top: -110rpx;
		text-align: right;
	}
	
	.time {
		font-size: 22rpx;
		
		margin-top: 160rpx;
		margin-left: 200rpx;
		color: #999999;
	}
	.zy {
		margin-top: 10rpx;
		line-height: 40rpx;
		margin-left: 20rpx;
		font-size: 30rpx;
	}
	.dz {
		margin-left: 500rpx;
		display: flex;
	}
	.wave {
		z-index: 3;
		right: 0;
		bottom: 0;
		opacity: 0.725;
		height: 40rpx;
		width: 40rpx;
		padding-top: 10rpx;
		margin-top: 50rpx;
		/* animation: wave 10s linear infinite;  */
	}
	
	#ct{
		margin-top: 50rpx;
		color: #CCCCCC;
	}
	.zf {
		margin-left: 70rpx;
	}
	.qt {
		display: flex;
		border-top: none;
		height: 80rpx;
		font-size: 15rpx;
		align-items: center;
	
	}
	
</style>
