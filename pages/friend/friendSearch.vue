<template>
	<view>
		<view class="top">
		<view class="header-input">
			<view>
				<image class="image" src="../../static/images/search_icon.png">
				</image>
			</view>
			<input @input="goToSearch" placeholder="请输入关键字" placeholderStyle="color:#BBBBBB" type="text"></input>
		</view>
		<view class="ssuo">搜索</view>
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
		/* background-color: #007AFF; */
		height: 90rpx;
		box-shadow: #EDEDED 0rpx 0rpx 0rpx 0rpx;
	}
	.header-input {
	    margin-left: 30rpx;
	    margin-top: 30rpx;
	    width: 600rpx;
	    height: 66rpx;
	    border-radius: 36rpx;
		background-color: #F8F8F8;
	    /* border: 1rpx solid #E3E3E3; */
	    display: flex;
	    flex-direction: row;
		/* box-shadow: #007AFF 1rpx 1rpx 5rpx 1rpx; */
	} 
	.header-input input {
	    margin-left: 5rpx;
	    width: 479rpx;
	    height: 66rpx;
	    line-height: 66rpx;
	    /* border-right: 1rpx solid #dfdfdf; */
	    font-size: 28rpx;
	}
	
	.header-input view {
	    width: 96rpx;
	    height: 66rpx;
	}
	
	.image {
	    margin-left: 30rpx;
	    margin-top: 5rpx;
	    width: 60rpx;
	    height: 60rpx;
	}
	.ssuo{
		margin-top: -50rpx;
		text-align: right;
		margin-right: 30rpx;
	}
</style>
