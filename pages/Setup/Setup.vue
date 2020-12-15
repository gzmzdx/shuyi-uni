<template>
	<view>
		<view class="top ">
			<!-- 分割线br1 -->
			<view class="br1"></view>
			<navigator url="../readLabel/readLabel">
			<view class="class1">
				<view class="neirong">阅读偏好</view>
				<image class="img2" src="../../static/images/right_arrow.png"></image>
			</view>
			</navigator>
			<!-- 分割线br1 -->
			<view class="br1"></view>
			<navigator url="../index/wuliu">
			<view class="class1">
				<view class="neirong">物流偏好</view>
				<image class="img2" src="../../static/images/right_arrow.png"></image> 
			</view>
			</navigator>
			<!-- 分割线br1 -->
			<view class="br1"></view>
			<!-- <navigator url="jszlist">
			<view class="class1">
				<view class="neirong"></view>
				<image class="img2" src="../../static/images/right_arrow.png"></image>
			</view>
			</navigator>
			<view class="br2"></view>
			
			<navigator url="../allOrders/index">
				<view class="class1">
					<view class="neirong"></view>
					<image class="img2" src="../../static/images/right_arrow.png"></image>
				</view>
			</navigator>
			
			<view class="br1"></view>
			<view class="class1">
				<view class="neirong"></view>
				<image class="img2" src="../../static/images/right_arrow.png"></image> 
			</view>
			<view class="br1"></view>
			<navigator url="../return/return">
				<view class="class1">
					<view class="neirong"></view>
					<image class="img2" src="../../static/images/right_arrow.png"></image>
				</view>
			</navigator>
			
			<view class="br1"></view>
			<view class="class1">
				<view class="neirong"></view>
				<image class="img2" src="../../static/images/right_arrow.png"></image>
			</view>
			<view class="br1"></view> -->
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

<style>
.br1 {
		width: 100%;
		height: 5rpx;
		background-color: #F5F5F5;
	}
.class1{
		display: flex;
		width: 100%;
		height: 80rpx;
	}
.neirong{
		width: 87%;
		height: 60rpx;
		margin-left: 30rpx;
		margin-top: 20rpx;
	}
.img2{
	width: 40rpx;
	height: 40rpx;
	margin-top: 20rpx;
	}
.br2 {
		width: 100%;
		height: 40rpx;
		background-color: #F5F5F5;
	}
</style>
