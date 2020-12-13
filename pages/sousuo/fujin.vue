<template>
	<view>
		<!-- 导航栏 -->
		<view class="ta"></view>
		<!-- #ifdef APP-PLUS -->
		<view class="tab1" style="width: 100%; height: 90rpx;">
			<image @click="back" class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 64rpx; height: 64rpx;"></image>
			<view class="tit1">附近的书</viewk>
			<navigator url="sousuo">
				<image class="im" src="../../static/images/搜索icon@2x.png"style="width: 80rpx; height: 80rpx;"></image>
			</navigator>
			</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="tab1" style="width: 100%; height: 90rpx;">
			<image @click="back" class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 64rpx; height: 64rpx;"></image>
			<view class="tit3">附近的书</view>
			<navigator url="sousuo">
				<image class="im1" src="../../static/images/搜索icon@2x.png"style="width: 80rpx; height: 80rpx;"></image>
			</navigator>
			</view>
		<!-- #endif -->
		<!-- 范围 -->
		<view class="list">
			<navigator url="fujinB">
			<view class="td">1KM以内</view>
			</navigator>
			<navigator url="fujinB">
			<view class="td">1.5KM以内</view>
			</navigator>
			<navigator url="fujinB">
			<view class="td">2KM以内</view>
			</navigator>
			<navigator url="fujinB">
			<view class="td">同城</view>
			</navigator>
		</view>
		<view>
			<map class="map" circles=""></map>
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
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>
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
		margin-left: 230rpx;
		display: flex;
		font-size: 40rpx;
		width: 30%;
	}
	.tit3 {
		margin-top: 9rpx;
		color:#FFFFFF ;
		margin-left: 230rpx;
		display: flex;
		font-size: 40rpx;
		width: 40%;
	}
	.back {
		margin-top: 18rpx;
		margin-left: 10rpx;
	}
	.im{
		margin-top: 10rpx;
		margin-left: 200rpx;
	}
	.im1{
		margin-top: 10rpx;
		margin-left: 40rpx;
	}
	.list{
		height: 100rpx;
		margin-top: 10rpx;
		display: flex;
		background-color:#FFFFFF;
	}
	.td{
		margin: 20rpx 20rpx;
		height: 45rpx;
		width: 145rpx;
		font-size: 28rpx;
		text-align: center;
		/* width: 20%; */
		
		border-top: 1rpx solid #C0C0C0;
		border-bottom:1rpx solid #C0C0C0;
	}
	.map {
		/* margin-top: 30rpx; */
		width: 100%;
		height: 1400rpx;
	}
</style>
