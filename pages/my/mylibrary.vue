<template>
	<view class="all">
		<view class="ta"></view>
		<view class="tab1" style="width: 100%; height: 90rpx;">
			<image class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 64rpx; height: 64rpx;"></image>
<!-- #ifdef APP-PLUS -->
			<view class="tit1">个人图书馆</view>
<!-- #endif -->
<!-- #ifdef MP-WEIXIN -->
			<view class="tit2">个人图书馆</view>
<!-- #endif -->
			<navigator url="../sousuo/sousuo">
				<image class="im" src="../../static/images/搜索icon@2x.png"style="width: 80rpx; height: 80rpx;"></image>
			</navigator>
			</view>
			<!-- #ifdef APP-PLUS -->
			<navigator url="lib">
			<view class="td">
			<view class="tex">我的图书馆</view>
			<image  class="ima" src="../../static/images/右箭头.png" style="width: 64rpx; height: 64rpx;"></image>
			</view>
			</navigator>
			<navigator url="mylib">
			<view class="td">
			<view class="tex">好友图书馆</view>
			<image  class="ima" src="../../static/images/右箭头.png" style="width: 64rpx; height: 64rpx;"></image>
			</view>
			</navigator>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<view class="td1">
			<view class="tex1">我的图书馆</view>
			<image  class="ima1" src="../../static/images/右箭头.png" style="width: 64rpx; height: 64rpx;"></image>
			</view>
			<view class="td1">
			<view class="tex1">好友图书馆</view>
			<image  class="ima1" src="../../static/images/右箭头.png" style="width: 64rpx; height: 64rpx;"></image>
			</view>
			<!-- #endif -->
			<!-- <view class="tr">
			<view :class="['tit',index===1&&'blue']" @click="index=1">我的</view>
			<view :class="['tit',index===2&&'blue']" @click="index=2">已加入</view>
			</view>
			<mylib v-if="index===1"></mylib>
			<join v-if="index===2"></join> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 1
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.all{
		background-color: #F1F1F1;
		height: 1500rpx;
	}
.ta{
			height: 70rpx;
			background-color:#6C40F3;
		}
	.tab1 {
			display: flex;
			background-color:#6C40F3;
		}
		.tit1 {
		margin-top: 9rpx;
			color:#FFFFFF ;
			margin-left: 210rpx;
			display: flex;
			font-size: 40rpx;
		}
		.tit2 {
		margin-top: 9rpx;
			color:#FFFFFF ;
			margin-left: 210rpx;
			display: flex;
			font-size: 40rpx;
			width: 35%;
		}
		.back {
			margin-top: 8rpx;
			margin-left: 10rpx;
		}
		.im{
			margin-top: 10rpx;
			margin-left: 180rpx;
		}
		
.tit{
	/* color: #007AFF; */
	height: 60rpx;
	width: 160rpx;
	text-align: center;
	background-color: ;
	margin-left: 140rpx;
}
.tr{
	height: 80rpx;
	display: flex;
	align-items: center;
	background-color: #F8F8F8;
}
.blue{
		color: #007AFF;
		border-bottom: 2rpx solid #00AAFF;
	}
	.td{
		margin-top: 20rpx;
		width: 100%;
		height: 100rpx;
		background-color:#FFFFFF; 
		display: flex;
	}
	.td1{
		margin-top: 20rpx;
		width: 100%;
		height: 100rpx;
		background-color:#FFFFFF; 
		display: flex;
	}
	.tex{
		font-size: 34rpx;
		margin-left: 20rpx;
		/* text-align: center; */
		align-items: center;
		/* margin-top: 20rpx; */
		padding-top: 25rpx;
		color: #333333;
		width: 60%;
	}
	.tex1{
		font-size: 34rpx;
		margin-left: 20rpx;
		/* text-align: center; */
		align-items: center;
		margin-top: 12rpx;
		padding-top: 25rpx;
		color: #333333;
		width: 60%;
	}
	.ima{
		margin-top: 20rpx;
		margin-left: 270rpx;
	}
	.ima1{
		margin-top: 20rpx;
		margin-left: 270rpx;
	}
</style>
