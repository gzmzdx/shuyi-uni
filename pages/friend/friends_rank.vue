<template>
	<view>
		<view class="top">
			<view class="ima">
				<view class="imaone">
					<image src="../../static/images/头像2.jpg" style="width: 110rpx;height: 110rpx;border-radius: 50%"></image>
				</view>
				<view class="imatwo">	
					<image src="../../static/images/冠军.icon.png" style="width: 60rpx;height: 60rpx;"></image>
				</view>
				<view class="mz">肖石榴</view>
			</view>
			<view class="shulian">
				<view class="number">2021</view>
				<view class="danwei">本书</view>
			</view>
		</view>
		<view class="br2"></view>
		<view class="top">
			<view class="ima">
				<view class="imaone">
					<image src="../../static/images/头像2.jpg" style="width: 110rpx;height: 110rpx;border-radius: 50%"></image>
				</view>
				<view class="imatwo">	
					<image src="../../static/images/亚军.icon.png" style="width: 60rpx;height: 60rpx;"></image>
				</view>
				<view class="mz">肖石榴</view>
			</view>
			<view class="shulian">
				<view class="number">2020</view>
				<view class="danwei">本书</view>
			</view>
		</view>
		<view class="br2"></view>
		<view class="top">
			<view class="ima">
				<view class="imaone">
					<image src="../../static/images/头像2.jpg" style="width: 110rpx;height: 110rpx;border-radius: 50%"></image>
				</view>
				<view class="imatwo">	
					<image src="../../static/images/季军.icon.png" style="width: 60rpx;height: 60rpx;"></image>
				</view>
				<view class="mz">肖石榴</view>
			</view>
			<view class="shulian">
				<view class="number">2019</view>
				<view class="danwei">本书</view>
			</view>
		</view>
		<view class="br2"></view>
		<view class="tr">
			<view class="BH">04</view>
			<image class="image" src="../../static/images/4.jpg" style="width: 110rpx;height: 110rpx;border-radius: 50%;"></image>
			<view class="minzi">肖石榴</view>
		</view>
		<view class="tr">
			<view class="BH">05</view>
			<image class="image" src="../../static/images/4.jpg" style="width: 110rpx;height: 110rpx;border-radius: 50%;"></image>
			<view class="minzi">肖石榴</view>
		</view>
		<view class="tr">
			<view class="BH">06</view>
			<image class="image" src="../../static/images/4.jpg" style="width: 110rpx;height: 110rpx;border-radius: 50%;"></image>
			<view class="minzi">肖石榴</view>
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
.top{
	color: #FFFFFF;
	height: 160rpx;
	/* background-color: #18B566; */
	display: flex;
	
	align-items: center;
	/* text-align: center; */
}
.br2 {
		width: 100%;
		height: 32rpx;
		background-color: #F5F5F5;
	}
.ima{
	width: 50%;
	margin-left: 30rpx;
	/* background-color: yellow; */
}
.imaone{
	/* background-color: #00AAFF; */
	margin-top: -20rpx;
}
.imatwo{
	margin-top: -140rpx;
}
.mz{
	color: #3B3B3B;
	margin-top: -10rpx;
	margin-left: 160rpx;
	/* background-color: #0066CC; */
}
.shulian{
	width: 250rpx;
	/* background-color: #19BE6B; */
	display: flex;
	margin-top: 25rpx;
	margin-left: 80rpx;
}
.number{
	font-size: 32rpx;
	margin-left: 80rpx;
	color: #32A0FE;
}
.danwei{
	font-size: 28rpx;
	color: #B5B5B5;
}
.tr {
	height: 155rpx;
	/* background-color: red; */
	display: flex;
	border-bottom: 1rpx solid #F3F4F6;
	align-items: center;
	text-align: center;
}
.BH{
	margin-left: 30rpx;
	margin-top: 110rpx;
	font-size: 24rpx;
	color: #B5B5B5;
}
.image {
	margin-top: 20rpx;
	margin-left: 20rpx;
}
.minzi {
	font-size: 35rpx;
	margin-top: 40rpx;
	align-items: center;
	margin-left: 30rpx;
}
</style>
