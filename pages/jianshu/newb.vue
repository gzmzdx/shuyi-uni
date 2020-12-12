<template>
	<view>
		<!-- 导航栏 -->
		<view class="tr"></view>
		<!-- #ifdef APP-PLUS -->
		<view class="tab" style="width: 100%; height: 90rpx;">
			<image class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 64rpx; height: 64rpx;"></image>
			<view class="tit">新书上架</view>
			<image class="shua" src="../../static/images/换一批.icon.png" style="width: 55rpx; height: 45rpx;"></image>
			<view class="tit1">换一批</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="tab" style="width: 100%; height: 90rpx;">
			<image class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 64rpx; height: 64rpx;"></image>
			<view class="tit2">新书上架</view>
			<image class="shua1" src="../../static/images/换一批.icon.png" style="width: 55rpx; height: 40rpx;"></image>
			<view class="tit1">换一批</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="list">
			<view class="ta">
			<image class="biaoz" src="../../static/images/不可借.标识.icon.png" style="width: 60rpx; height: 60rpx;"></image>	
			</view>
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
			<view class="ta">
			<image class="biaoz" src="../../static/images/可借.标识.icon.png" style="width: 60rpx; height: 60rpx;"></image>	
			</view>
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
			<view class="ta">
			<image class="biaoz" src="../../static/images/不可借.标识.icon.png" style="width: 60rpx; height: 60rpx;"></image>	
			</view>
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
			<view class="ta">
			<image class="biaoz" src="../../static/images/可借.标识.icon.png" style="width: 60rpx; height: 60rpx;"></image>	
			</view>
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
			
		}
	}
</script>

<style>
.tr{
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
		margin-left: 230rpx;
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

	.shua1 {
		margin-top: 28rpx;
		margin-left: 60rpx;

	}

	.tit1 {
		margin-top: 28rpx;
		color:#FFFFFF ;
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
