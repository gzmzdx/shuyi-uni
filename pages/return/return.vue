<template>
	<view>
		<view class="">
			<image class="erweima" src="../../static/images/二维码.png"></image>
		</view>
		<view class="erweima-action">扫描二维码</view>
		<view class="erweima-borrow">借走《巨人的陨落》</view>
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

	.erweima{
		width:262rpx; 
		height: 262rpx; 
		margin-top: 32%; 
		margin-left: 32%;
	}
	.erweima-action{
		margin-top: 5rpx;
		margin-left: 40%;
		font-size: 30rpx;
		color: #646464;
	}
	.erweima-borrow{
		margin-top: 10rpx;
		margin-left: 37%;
		font-size: 24rpx;
		color: #646464;
	}
</style>
