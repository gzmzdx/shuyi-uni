<template>
	<view>
		<!-- 顶部部分 -->
		<view class="head">
			<view class="header-wrap">
				<view class="index-header">
					<image class="address" src="../../static/images/turn_left_two_return2x.png"></image>
					<view class="name">新书上架</view>
					<view class="map-wrap" @click="rightClick">
						<image class="iconfont" src="../../static/images/change_icon.png"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="blank"></view>
		
		<view class="list">
			<view class="ta">
				<image class="biaoz" src="../../static/images/不可借.标识.icon.png" style="width: 60rpx; height: 60rpx;"></image>
			</view>
			<image class="ima1" src="../../static/images/封面.png"></image>
			<view>
				<view class="name">书名....</view>
				<view class="tex">作者 ：哈哈</view>
				<view class="tex">出版社 ：浙江大学出版社</view>
				<!-- <view class="tex">出版时间 ：2020-09</view> -->
				<!-- <view class="tex1">广东省图书馆、广东中山图书馆</view> -->
			</view>
		</view>
		<view class="list">
			<view class="ta">
				<image class="biaoz" src="../../static/images/可借.标识.icon.png" style="width: 60rpx; height: 60rpx;"></image>
			</view>
			<image class="ima1" src="../../static/images/封面.png"></image>
			<view>
				<view class="name">书名....</view>
				<view class="tex">作者 ：哈哈</view>
				<view class="tex">出版社 ：浙江大学出版社</view>
				<!-- <view class="tex">出版时间 ：2020-09</view> -->
				<!-- <view class="tex1">广东省图书馆、广东中山图书馆</view> -->
			</view>
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
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss">
	// 顶部页面
	$color-base: #6C40F3;
	$words-color-base: #333333;
	$words-color-light: #999999;
	.header-wrap {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 999;
	
		.index-header {
			display: flex;
			height: 150rpx;
			line-height: 110rpx;
			padding: 0 30rpx;
			padding-top: 40rpx;
			background-color: $color-base;
			font-size: 28rpx;
			color: #fff;
			align-items: center;
			// justify-content: space-between;
	
			.address {
				// margin-left: 50upx;
				width: 60rpx;
				height: 60rpx;
				font-size: 26rpx;
				margin-top: 20rpx;
			}
	
			.name {
				color: #FFFFFF;
				width: 80%;
				height: 60rpx;
				font-size: 36rpx;
				margin-top: -32rpx;
				text-align: center;
			}
	
			.map-wrap {
				.iconfont {
					margin-top: 50rpx;
					width: 60rpx;
					height: 60rpx;
					font-size: 36rpx;
					margin-right: 5rpx;
				}
	
				text {
					font-size: 26rpx;
				}
			}
		}
	}
	.blank {
		height: 150rpx;
	}
	
	.tq {
		height: 70rpx;
		background-color: #6C40F3;
	}

	.tab {
		display: flex;
		background-color: #6C40F3;
	}

	.tit {
		margin-top: 9rpx;
		color: #FFFFFF;
		margin-left: 250rpx;
		display: flex;
		font-size: 40rpx;
		width: 60%;

	}

	.tit2 {
		margin-top: 9rpx;
		color: #FFFFFF;
		margin-left: 230rpx;
		display: flex;
		font-size: 40rpx;
		width: 50%;

	}

	.back {
		margin-top: 15rpx;
		margin-left: 10rpx;
	}

	/* .tab1 {
		height: 10rpx;
		background-color: #F1F1F1;
	} */
	.shua {
		margin-top: 28rpx;
		margin-left: 60rpx;

	}

	.shua1 {
		margin-top: 28rpx;
		margin-left: 60rpx;

	}

	.tit1 {
		margin-top: 28rpx;
		color: #FFFFFF;
		margin-left: 20rpx;
		font-size: 28rpx;
		width: 20%;
	}

	.list {
		height: 330rpx;
		border-bottom: 1rpx solid #C8C7CC;
		display: flex;
	}

	.ima {
		margin: 40rpx 40rpx;
	}

	.ima1 {
		margin: 40rpx 40rpx;
		width: 200rpx;
		height: 250rpx;
	}

	.ta {
		/* margin-left: 100rpx; */
		width: 0rpx;
	}

	.biaoz {
		/* margin-top: 60rpx; */
		margin-left: 180rpx;
	}

	.name {
		margin-top: 50rpx;
		font-size: 40rpx;
	}

	.tex {
		font-size: 28rpx;
		margin-top: 5rpx;
		color: #808080;
	}

	.tex1 {
		margin-top: 15rpx;
		font-size: 35rpx;
		color: #F0AD4E;
	}

	.top {
		top: -170rpx;
		margin-left: 680rpx;
	}
</style>
