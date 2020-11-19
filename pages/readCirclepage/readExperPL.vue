<template name="Logistic">
	<view>
		<view class="lis">
			<view class="tit2">全部(50)</view>
			<view class="li">
				<image class="toux" src="../../static/images/头像2.jpg" style="width: 80rpx; height: 80rpx;"></image>
				<view class="name">爱书的猫</view>
				<view class="vip">LV.11</view>
				<view class="time">2017-05-05 15:32</view>
			</view>
			<view class="text1">光大证券首席金融业分析师王一峰认为，自7月份开始，货币市场短期与中长期资金利率运行出现明显分化迹象。</view>
			<view class="li">
				<image class="toux" src="../../static/images/头像2.jpg" style="width: 80rpx; height: 80rpx;"></image>
				<view class="name">爱书的猫</view>
				<view class="vip">LV.11</view>
				<view class="time">2017-05-05 15:32</view>
			</view>
			<view class="text1">光大证券首席金融业分析师王一峰认为，自7月份开始，货币市场短期与中长期资金利率运行出现明显分化迹象。</view>
			<view class="li">
				<image class="toux" src="../../static/images/头像2.jpg" style="width: 80rpx; height: 80rpx;"></image>
				<view class="name">爱书的猫</view>
				<view class="vip">LV.11</view>
				<view class="time">2017-05-05 15:32</view>
			</view>
			<view class="text1">光大证券首席金融业分析师王一峰认为，自7月份开始，货币市场短期与中长期资金利率运行出现明显分化迹象。</view>
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
.time {
	color: #8f8f94;
	font-size: 25rpx;
	margin-left: 200rpx;
	margin-top: 37rpx;
}
.text1 {
	margin: 10rpx 20rpx;
	font-size: 25rpx;
	margin-left: 100rpx;
	color: #808080;
}
.dzan{
	// background-color: #808080 ;
	font-size: 25rpx;
	margin-left: 0rpx;
	margin-top: 37rpx;
}
</style>
