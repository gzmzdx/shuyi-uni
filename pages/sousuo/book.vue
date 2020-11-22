<template>
	<view>
		<view class="tab1" style="width: 100%; height: 90rpx;">
			<image class="back" src="../../static/images/back.png" style="width: 60rpx; height: 60rpx;"></image>
			<view class="tit1">书易搜索</view>
			
			</view>
		<view class="tr"></view>
		<view class="list">
			<view class="list">
				<view :class="['tit',index===1&&'blue']" @click="index=1">图书</view>
				<view :class="['tit',index===2&&'blue']" @click="index=2">书评</view>
				<view :class="['tit',index===3&&'blue']" @click="index=3">关注</view>
				<view :class="['tit',index===4&&'blue']" @click="index=4">好友</view>
			</view>
		</view>
		<view class="tr"></view>
		<Sbook v-if="index===1"/>
		<Sping v-if="index===2"/>
		<Gzhu v-if="index===3"/>
		<Hyou v-if="index===4"/>
		<view class="tr"></view>
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
		margin-top: 79rpx;
		display: flex;
	}

	.tit1 {
		margin-top: 19rpx;
		color: #555555;
		margin-left: 215rpx;
		font-size: 45rpx;
	}

	.back {
		margin-top: 8rpx;
		margin-left: 10rpx;
	}

	.tr {
		height: 10rpx;
		background-color: #F8F8F8;
	}

	.list{
		align-items: center;
		height: 90rpx;
		display: flex;
	}
	.tit{
		margin: 30rpx 55rpx;
	}
	.blue{
		color: #007AFF;
		border-bottom: 2rpx solid #00AAFF;
	}
</style>
