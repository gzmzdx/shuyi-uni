<template>
	<view>
		<!-- 导航栏 -->
		<view class="ta"></view>
		<view class="tab1" style="width: 100%; height: 90rpx;">
			<image @click="back" class="back" src="../../static/images/向左箭头.二级.返回@2x.png" style="width: 64rpx; height: 64rpx;"></image>
			<!-- #ifdef APP-PLUS -->
			<view class="tit1">爱读书的猫</view>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<view class="tit5">爱读书的猫</view>
			<!-- #endif -->
			<navigator url="../sousuo/sousuo">
			</navigator>
		</view>
		<!-- #ifdef APP-PLUS -->
		<view>
			<image class="ima" src="../../static/images/头像.jpg"></image>
		</view>
		<view class="list">
			<view :class="['tit',index===1&&'blue']" @click="index=1">简介</view>
			<view :class="['tit',index===2&&'blue']" @click="index=2">图书</view>
			<view :class="['tit',index===3&&'blue']" @click="index=3">成员</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view>
			<image class="ima1" src="../../static/images/头像.jpg"></image>
		</view>
		<view class="list1">
			<view :class="['tit',index===1&&'blue']" @click="index=1">简介</view>
			<view :class="['tit',index===2&&'blue']" @click="index=2">图书</view>
			<view :class="['tit',index===3&&'blue']" @click="index=3">成员</view>
		</view>
		<!-- #endif -->

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
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style>
	.ta {
		height: 70rpx;
		background-color: #6C40F3;
	}

	.tab1 {
		display: flex;
		background-color: #6C40F3;
	}

	.tit1 {
		margin-top: 9rpx;
		color: #FFFFFF;
		margin-left: 220rpx;
		display: flex;
		font-size: 40rpx;
	}

	.tit5 {
		margin-top: 9rpx;
		color: #FFFFFF;
		margin-left: 220rpx;
		display: flex;
		font-size: 40rpx;
		width: 40%;
	}

	.back {
		margin-top: 8rpx;
		margin-left: 10rpx;
	}

	.ima {
		width: 100%;
		height: 400rpx;
	}

	.ima1 {
		width: 100%;
		height: 400rpx;
	}

	.list {
		display: flex;
	}

	.list1 {
		display: flex;
		height: 100rpx;
	}

	.tit {
		font-size: 34rpx;
		margin: 10rpx 90rpx;
	}

	.blue {
		color: #6C40F3;
		border-bottom: 2rpx solid #6C40F3;
	}
</style>
