<template>
	<view>
		<!-- 导航栏 -->
		<view class="tab1" style="width: 100%; height: 90rpx;">
			<image class="back" src="../../static/images/back.png" style="width: 60rpx; height: 60rpx;"></image>
			<view class="tit1">爱读书的猫</view>
			<navigator url="../sousuo/sousuo">
			</navigator>
			</view>
		<view><image class="ima" src="../../static/images/头像.jpg" ></image></view>
		<view class="list">
			<view :class="['tit',index===1&&'blue']" @click="index=1">简介</view>
			<view :class="['tit',index===2&&'blue']" @click="index=2">图书</view>
			<view :class="['tit',index===3&&'blue']" @click="index=3">成员</view>
		</view>
		<jianj v-if="index===1"></jianj>
		<tushu v-if="index===2"></tushu>
		<chengy v-if="index===3"></chengy>
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
	.tab1 {
			display: flex;
			margin-top: 79rpx;
		}
		.tit1 {
			margin-top: 9rpx;
			/* text-align: center; */
			color: #555555 ;
			margin-left: 215rpx;
			font-size: 38rpx;
		}
		
		.back {
			margin-top: 8rpx;
			margin-left: 10rpx;
		}
.ima{
	width: 100%;
	height: 300rpx;
}
.list{
	display: flex;
}
.tit{
		margin: 10rpx 85rpx;
	}
	.blue{
		color: #007AFF;
		border-bottom: 2rpx solid #00AAFF;
	}
</style>
