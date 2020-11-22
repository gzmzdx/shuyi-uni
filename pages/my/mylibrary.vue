<template>
	<view>
		<view class="tab1" style="width: 100%; height: 90rpx;">
			<image class="back" src="../../static/images/back.png" style="width: 60rpx; height: 60rpx;"></image>
			<view class="tit1">个人图书馆</view>
			<navigator url="../sousuo/sousuo">
			<image class="im" src="../../static/images/搜索.png"style="width: 55rpx; height: 55rpx;"></image>
			</navigator>
			</view>
			<view class="tr">
			<view :class="['tit',index===1&&'blue']" @click="index=1">我的</view>
			<view :class="['tit',index===2&&'blue']" @click="index=2">已加入</view>
			</view>
			<mylib v-if="index===1"></mylib>
			<join v-if="index===2"></join>
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
			color: #555555 ;
			/* margin-left: 215rpx; */
			font-size: 38rpx;
		}
		
		.back {
			margin-top: 8rpx;
			margin-left: 10rpx;
		}
		.im{
			margin-top: 10rpx;
			margin-left: 410rpx;
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
</style>
