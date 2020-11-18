<template name="Trade">
	<view>
		<!-- 中间内容 -->
		<view class="Lmid">
			<!-- 圈子名和头像 -->
			<view class="midone">
				<view class="circle"><image class="circletp" src="../../static/images/书2.jpg" style="width: 150rpx;height: 150rpx; border-radius: 10rpx;"></image></view>
				<view class="tpname">三屋w</view>
			</view>
			<!-- 简介 -->
			<view class="jj">
				<view class="jjName">简介</view>
				<view class="jjNR">
					<text>
						今哈哈哈哈哈哈哈哈今天上课觉得很经常技术的几句话大学哈哈哈哈呵呵好的环境斤斤计较看到看看今哈哈哈哈哈哈哈哈今天上课觉得很经常技术的几句话大学经济哈哈哈哈呵呵好的环境斤斤计较看到看看好好的简介哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈好好的简介哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
					</text>
				</view>
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
//信息中间内容
.midone {
	height: 300rpx;
	border-bottom: 1rpx solid #dfdfdf;
}
.circle {
	margin-top: 100rpx;
	margin-left: 25rpx;
	text-align: center;
}
.tpname {
	font-size: 28rpx;
	margin-top: 10rpx;
	margin-left: 25rpx;
	text-align: center;
}
// 简介
.jjName {
	margin-top: 20rpx;
	margin-left: 30rpx;
}
.jjNR {
	margin: 15rpx 20rpx;
	color: #666666;
	font-size: 28rpx;
}
</style>
