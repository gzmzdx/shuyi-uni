<template>
	<view>
		<!-- 导航栏 -->
		<!-- #ifdef APP-PLUS -->
		<view class="tq"></view>
		<view class="tab" style="width: 100%; height: 90rpx;">
			<image @click="back" class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 64rpx; height: 64rpx;"></image>
			<view class="tit">热门推荐</view>
			<image class="im" src="../../static/images/分类.png"style="width: 80rpx; height: 80rpx;"></image>
			<image class="im1" src="../../static/images/搜索icon@2x.png"style="width: 80rpx; height: 80rpx;"></image>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="tq"></view>
		<view class="tab" style="width: 100%; height: 90rpx;">
			<image @click="back" class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 64rpx; height: 64rpx;"></image>
			<view class="tit2">热门推荐</view>
			<image class="im" src="../../static/images/分类.png"></image>
			<image class="im1" src="../../static/images/搜索icon@2x.png"></image>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="list">
			<image class="ima1" src="../../static/images/封面.png" ></image>
			<view>
				<view class="name">书名....</view>
				<view class="tex">作者 ：哈哈</view>
				<view class="tex">出版社 ：浙江大学出版社</view>
				<!-- <view class="tex">出版时间 ：2020-09</view> -->
				<!-- <view class="tex1">广东省图书馆、广东中山图书馆</view> -->
			</view>
		</view>
		<view class="list">
			<image class="ima1" src="../../static/images/封面.png" ></image>
			<view>
				<view class="name">书名....</view>
				<view class="tex">作者 ：哈哈</view>
				<view class="tex">出版社 ：浙江大学出版社</view>
				<!-- <view class="tex">出版时间 ：2020-09</view> -->
				<!-- <view class="tex1">广东省图书馆、广东中山图书馆</view> -->
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS -->
		<view class="list">
			<image class="ima" src="../../static/images/封面.png" style="width: 200rpx; height: 250rpx;"></image>
			<view>
				<view class="name">书名....</view>
				<view class="tex">作者 ：哈哈</view>
				<view class="tex">出版社 ：浙江大学出版社</view>
				<!-- <view class="tex">出版时间 ：2020-09</view> -->
				<!-- <view class="tex1">广东省图书馆、广东中山图书馆</view> -->
			</view>
		</view>
		<view class="list">
			<image class="ima" src="../../static/images/封面.png" style="width: 200rpx; height: 250rpx;"></image>
			<view>
				<view class="name">书名....</view>
				<view class="tex">作者 ：哈哈</view>
				<view class="tex">出版社 ：浙江大学出版社</view>
				<!-- <view class="tex">出版时间 ：2020-09</view> -->
				<!-- <view class="tex1">广东省图书馆、广东中山图书馆</view> -->
			</view>
		</view>
		<!-- #endif -->
		</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>
.tq{
		height: 70rpx;
		background-color:#6C40F3;
	}
.tab {
		display: flex;
		background-color:#6C40F3;
	}

	.tit {
		margin-top: 9rpx;
		color:#FFFFFF ;
		margin-left: 250rpx;
		display: flex;
		font-size: 40rpx;
		width: 60%;
	
	}
.tit2 {
		margin-top: 9rpx;
		color:#FFFFFF ;
		margin-left: 230rpx;
		display: flex;
		font-size: 40rpx;
		width: 30%;
	
	}
	.back {
		margin-top: 15rpx;
		margin-left: 10rpx;
	}

	/* .tab1 {
		height: 10rpx;
		background-color: #F1F1F1;
	} */

	.tit1 {
		margin-top: 28rpx;
		color:#FFFFFF ;
		margin-left: 20rpx;
		font-size: 28rpx;
		width: 20%;
	}
.im{
		margin-top: 10rpx;
		width: 60rpx;
		height: 60rpx;
		margin-left: 40rpx;
	}
	.im1{
			/* margin-top: 10rpx; */
			width: 60rpx;
			height: 60rpx;
			margin-left: 0rpx;
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
	.ta{
		/* margin-left: 100rpx; */
		width: 0rpx;
	}
.biaoz{
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
