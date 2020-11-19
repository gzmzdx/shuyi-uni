<template name=" Orders">
	<view>
		<view class="lis">
			<view class="tit2">全部(3)</view>
			<view class="li">
				<image class="toux" src="../../static/images/头像2.jpg" style="width: 80rpx; height: 80rpx;"></image>
				<view class="Ntitle">
					<view class="name">爱书的小猫咪</view>
					<view class="vip">LV.11</view>
				</view>
				<view class="dzan"><image src="../../static/images/dianzan.png" style="width: 40rpx; height: 40rpx;"></image></view>
			</view>
			<view class="li">
				<image class="toux" src="../../static/images/头像2.jpg" style="width: 80rpx; height: 80rpx;"></image>
				<view class="Ntitle">
					<view class="name">爱书的猫</view>
					<view class="vip">LV.11</view>
				</view>
				<view class="dzan"><image src="../../static/images/dianzan.png" style="width: 40rpx; height: 40rpx;"></image></view>
			</view>
			<view class="li">
				<image class="toux" src="../../static/images/头像2.jpg" style="width: 80rpx; height: 80rpx;"></image>
				<view class="Ntitle">
					<view class="name">爱书的大只小蜜蜂</view>
					<view class="vip">LV.11</view>
				</view>
				<view class="dzan"><image src="../../static/images/dianzan.png" style="width: 40rpx; height: 40rpx;"></image></view>
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
			
		}
	}
</script>

<style lang="scss" scoped>
/* 点赞*/
.lis {
	height: 750rpx;
	// border-bottom: 1rpx solid #c0c0c0;
}
.tit2 {
	margin: 20rpx 50rpx;
	color: #f0ad4e;
}
.toux {
	border-radius: 50%;
	margin: 20rpx 20rpx;
}
.Ntitle{
	width: 550rpx;
	// background-color: yellow;
	display: flex;
}
.li {
	display: flex;
}
.name {
	color: #00aaff;
	margin-top: 35rpx;
	font-size: 30rpx;
	// background-color: #007AFF;
}
.vip {
	color: #f0ad4e;
	font-size: 25rpx;
	border-radius: 10rpx;
	border: 1rpx solid #f0ad4e;
	height: 35rpx;
	margin-top: 38rpx;
	background-color: #ffffff;
	text-align: center;
	width: 80rpx;
	margin-left: 10rpx;
}
.dzan{
	// background-color: #808080 ;
	font-size: 25rpx;
	margin-left: 0rpx;
	margin-top: 37rpx;
}
</style>
