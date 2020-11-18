<template name="Orders">
	<view>
		<view class="underR">
			<!--圈主信息-->
			<view class="underRone">
				<image src="../../static/images/头像2.jpg" style="width: 90rpx; height: 90rpx;border-radius: 100%;"></image>
				<view class="qz">
					<view class="qzname">
						<text>爱丽丝</text>
					</view>
					<view class="qztp">
					<image src="../../static/images/quanzhu.png" style="width: 60rpx;height: 60rpx;"></image>	
					</view>
					<view class="riqi">
						<text>2020-12-21</text>
					</view>
				</view>
			</view>
			<!-- 公告内容 -->
			<view class="ggNR">
				<text>
					今哈哈哈哈哈哈哈哈今天上课觉得很经常技术的几句话大学哈哈哈哈呵呵好的环境斤斤计较看到看看今哈哈哈哈哈哈哈哈今天上课觉得很经常技术的几句话大学经济哈哈哈哈呵呵好的环境斤斤计较看到看看好好的简介哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈好好的简介哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
				</text>
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

<style>
/* 底部右边 */
.underRone{
	margin-left: 30rpx;
	margin-top: 40rpx;
	display: flex;
}
.qzname text{
	margin-top: 30rpx;
	margin-left: 20rpx;
	color: #18C7F2;
	font-size: 28rpx;
	/* background-color: yellow; */
}
.qztp{
	height: 50rpx;
	margin-top: -50rpx;
	margin-left: 110rpx;
}
.riqi{
	color: #333333;
	margin-top: 10rpx;
	margin-left: 20rpx;
	font-size: 20rpx;
	color: #999999;
}
/* 公告 */
.ggNR{
	margin: 15rpx 20rpx;
	font-size: 28rpx;
}
</style>
