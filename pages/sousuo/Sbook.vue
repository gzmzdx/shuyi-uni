<template>
	<view>
			<view class="list1">
				<!-- #ifdef APP-PLUS -->
				<image class="im" src="../../static/images/封面.png" ></image>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<image class="im1" src="../../static/images/封面.png" ></image>
				<!-- #endif -->
				<view class="tabs">
					<view class="li">
					<view class="name">书名....</view>
					<navigator url="../Bdetail/Bdetail">
					</navigator>
					</view>
					<view class="tex">作者 ：哈哈</view>
					<view class="tex">出版社 ：华科出版社</view>
					<view class="tex1"></view>
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
		},
	}
</script>

<style>
	.tit1{
		margin: 30rpx 55rpx; 
		width: 80rpx;
	}
	.blue{
		color: #007AFF;
		border-bottom: 2rpx solid #00AAFF;
	}

	
	.list1 {
		height: 300rpx;
		width: 100%;
		/* margin-left: -200rpx; */
		border-bottom: 1rpx solid #C8C7CC;
		display: flex;
	}
	
	.im{
		margin: 40rpx 40rpx;
		/* width: 40%; */
		width: 150rpx;
		height: 200rpx;
	}
	.im1{
		margin: 40rpx 40rpx;
		width: 150rpx;
		height: 200rpx;
	}
	.name {
		width: 30%;
		margin-top: 30rpx;
		font-size: 38rpx;
	}
	
	.tex {
		font-size: 28rpx;
		margin-top: 10rpx;
		color: #808080;
	}
	
	.tex1 {
		height: 1rpx;
		width: 450rpx;
		margin-top: 15rpx;
		/* background-color: #C0C0C0; */
	}
	.tabs{
		width: 500rpx;
	}
	.te{
		font-size: 28rpx;
		color: #8F8F94;
		margin-left: 300rpx;
		margin-top: 35rpx;
	}
	.li{
		display: flex;
	}
</style>
