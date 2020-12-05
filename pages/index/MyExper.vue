<template>
	<view>
		<view class="top">
			<textarea class="te" placeholder="这一刻的想法......" maxlength="500"></textarea>
		</view>
		<button class="fb">发表</button>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style>
.top {
	/* background-color: #007AFF; */
	/* border-bottom: 1rpx solid #bbbbbb; */
	border-radius: 20rpx;
	margin: 30rpx 30rpx;
	border: #EBEBEB 3rpx solid;
	/* box-shadow: #808080 1rpx 1rpx 2rpx 2rpx; */
	width: 92%;
	height: 550rpx;
}
.te{
	margin: 30rpx 35rpx;
	width: 92%;
	font-size: 32rpx;
	/* background-color: #007AFF; */
	height: 75%;
	/* margin-left: 20rpx; */
	/* margin-top: 10rpx; */
	color: #000000;
}
.fb {
	color: #ffffff;
	font-size: 28rpx;
	margin-top: 100rpx;
	width: 520rpx;
	background-color: #4658F6;
	/* border-radius: 100rpx; */
}
</style>
